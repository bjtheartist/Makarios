import { useState, useEffect } from 'react';
import {
  fetchPrayers,
  fetchLessons,
  fetchVideoCourses,
  fetchVideos,
  fetchTriviaBooks,
  fetchTriviaQuestionsByBook,
  fetchTestimonies,
} from './sanity';
import {
  PRAYERS,
  VIDEO_COURSES,
  TRIVIA_BOOKS,
  TESTIMONIES,
  LESSONS,
} from '../constants';

// Configuration flag - set to true when Sanity has content
const USE_SANITY = false; // Change to true when Sanity content is ready

// Generic hook for fetching content with fallback
function useContentFetch<T>(
  sanityFetcher: () => Promise<T[]>,
  fallbackData: T[],
  enabled: boolean = USE_SANITY
) {
  const [data, setData] = useState<T[]>(fallbackData);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) {
      setData(fallbackData);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        const result = await sanityFetcher();
        if (!cancelled) {
          // If Sanity returns empty, fall back to static data
          setData(result.length > 0 ? result : fallbackData);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('Sanity fetch failed, using fallback data:', err);
          setError(err as Error);
          setData(fallbackData);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [enabled]);

  return { data, loading, error };
}

// Specific content hooks
export function usePrayers() {
  return useContentFetch(fetchPrayers, PRAYERS);
}

export function useLessons() {
  return useContentFetch(fetchLessons, LESSONS);
}

export function useVideoCourses() {
  return useContentFetch(fetchVideoCourses, VIDEO_COURSES);
}

export function useVideos() {
  return useContentFetch(fetchVideos, []);
}

export function useTriviaBooks() {
  return useContentFetch(fetchTriviaBooks, TRIVIA_BOOKS);
}

export function useTriviaQuestions(bookSlug: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(USE_SANITY);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!USE_SANITY) {
      // Find the book from static data and return its questions
      const book = TRIVIA_BOOKS.find(
        (b) => b.id === bookSlug || b.name.toLowerCase().replace(/\s+/g, '-') === bookSlug
      );
      setData(book?.questions || []);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        const result = await fetchTriviaQuestionsByBook(bookSlug);
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('Sanity fetch failed:', err);
          setError(err as Error);
          // Fallback to static data
          const book = TRIVIA_BOOKS.find(
            (b) => b.id === bookSlug || b.name.toLowerCase().replace(/\s+/g, '-') === bookSlug
          );
          setData(book?.questions || []);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [bookSlug]);

  return { data, loading, error };
}

export function useTestimonies() {
  return useContentFetch(fetchTestimonies, TESTIMONIES);
}

// Export the configuration flag for components to check
export { USE_SANITY };

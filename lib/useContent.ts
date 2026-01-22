import { useState, useEffect } from 'react';
import { sanityClient } from './sanity';
import {
  DailyVerse,
  Prayer,
  PrayerCategory,
  VideoCourse,
  Testimony,
  TriviaBook,
  TriviaQuestion,
  Lesson,
} from '../types';
import * as fallback from '../constants';

// Configuration flag - set to true when Sanity has content
const USE_SANITY = true;

// GROQ queries
const QUERIES = {
  dailyVerse: `*[_type == "dailyVerse"] | order(date desc)[0] { "text": text, "reference": reference }`,

  prayerCategories: `*[_type == "prayerCategory"] | order(order asc) {
    "id": slug.current,
    title,
    icon,
  }`,

  prayers: `*[_type == "prayer"] | order(order asc) {
    "id": _id,
    "categoryId": category->slug.current,
    title,
    scripture,
    scriptureReference,
    content,
  }`,

  videoCourses: `*[_type == "videoCourse"] | order(order asc) {
    "id": _id,
    title,
    description,
    duration,
    thumbnailUrl,
    "thumbnailImage": thumbnail.asset->url,
    videoUrl,
  }`,

  testimonies: `*[_type == "testimony"] | order(order asc) {
    "id": _id,
    name,
    title,
    description,
    thumbnailUrl,
    "thumbnailImage": thumbnail.asset->url,
    videoUrl,
  }`,

  triviaBooks: `*[_type == "triviaBook"] | order(order asc) {
    "id": slug.current,
    name,
  }`,

  triviaQuestions: `*[_type == "triviaQuestion"] | order(order asc) {
    "id": _id,
    "bookId": book->slug.current,
    question,
    options,
    correctAnswer,
  }`,

  lessons: `*[_type == "lesson"] | order(order asc) {
    "id": _id,
    title,
    scriptureReference,
    content,
    quiz,
  }`,
};

interface ContentState {
  dailyVerse: DailyVerse;
  prayerCategories: PrayerCategory[];
  prayers: Prayer[];
  videoCourses: VideoCourse[];
  testimonies: Testimony[];
  triviaBooks: TriviaBook[];
  triviaQuestions: TriviaQuestion[];
  lessons: Lesson[];
  loading: boolean;
  error: string | null;
}

export function useContent(): ContentState {
  const [state, setState] = useState<ContentState>({
    dailyVerse: fallback.DAILY_VERSE,
    prayerCategories: fallback.PRAYER_CATEGORIES,
    prayers: fallback.PRAYERS,
    videoCourses: fallback.VIDEO_COURSES,
    testimonies: fallback.TESTIMONIES,
    triviaBooks: fallback.TRIVIA_BOOKS,
    triviaQuestions: fallback.TRIVIA_QUESTIONS,
    lessons: fallback.LESSONS,
    loading: USE_SANITY,
    error: null,
  });

  useEffect(() => {
    if (!USE_SANITY) return;

    async function fetchContent() {
      try {
        const [
          dailyVerse,
          prayerCategories,
          prayers,
          videoCourses,
          testimonies,
          triviaBooks,
          triviaQuestions,
          lessons,
        ] = await Promise.all([
          sanityClient.fetch(QUERIES.dailyVerse),
          sanityClient.fetch(QUERIES.prayerCategories),
          sanityClient.fetch(QUERIES.prayers),
          sanityClient.fetch(QUERIES.videoCourses),
          sanityClient.fetch(QUERIES.testimonies),
          sanityClient.fetch(QUERIES.triviaBooks),
          sanityClient.fetch(QUERIES.triviaQuestions),
          sanityClient.fetch(QUERIES.lessons),
        ]);

        setState({
          dailyVerse: dailyVerse || fallback.DAILY_VERSE,
          prayerCategories: prayerCategories?.length ? prayerCategories : fallback.PRAYER_CATEGORIES,
          prayers: prayers?.length ? prayers : fallback.PRAYERS,
          videoCourses: videoCourses?.length ? videoCourses : fallback.VIDEO_COURSES,
          testimonies: testimonies?.length ? testimonies : fallback.TESTIMONIES,
          triviaBooks: triviaBooks?.length ? triviaBooks : fallback.TRIVIA_BOOKS,
          triviaQuestions: triviaQuestions?.length ? triviaQuestions : fallback.TRIVIA_QUESTIONS,
          lessons: lessons?.length ? lessons : fallback.LESSONS,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error('Failed to fetch content from Sanity:', err);
        setState((prev) => ({
          ...prev,
          loading: false,
          error: 'Failed to load content. Using offline data.',
        }));
      }
    }

    fetchContent();
  }, []);

  return state;
}

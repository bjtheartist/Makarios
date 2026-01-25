import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: '6w7ytxw4',
  dataset: 'production',
  apiVersion: '2024-01-22',
  useCdn: true, // Use CDN for faster reads (set to false for real-time data)
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  // Prayers
  allPrayers: `*[_type == "prayer"] | order(order asc) {
    _id,
    title,
    category,
    content,
    scripture,
    isPremium,
    order
  }`,
  
  prayersByCategory: (category: string) => `*[_type == "prayer" && category == "${category}"] | order(order asc) {
    _id,
    title,
    category,
    content,
    scripture,
    isPremium,
    order
  }`,

  // Lessons
  allLessons: `*[_type == "lesson"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    content,
    scripture,
    duration,
    "thumbnail": thumbnail.asset->url,
    isPremium,
    order
  }`,

  lessonBySlug: (slug: string) => `*[_type == "lesson" && slug.current == "${slug}"][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    content,
    scripture,
    duration,
    "thumbnail": thumbnail.asset->url,
    isPremium
  }`,

  // Video Courses
  allVideoCourses: `*[_type == "videoCourse"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "thumbnail": thumbnail.asset->url,
    instructor,
    isPremium,
    "videoCount": count(*[_type == "video" && references(^._id)])
  }`,

  // Videos
  allVideos: `*[_type == "video"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    videoUrl,
    "thumbnail": thumbnail.asset->url,
    duration,
    "course": course->{title, "slug": slug.current},
    isPremium,
    order
  }`,

  videosByCourse: (courseSlug: string) => `*[_type == "video" && course->slug.current == "${courseSlug}"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    videoUrl,
    "thumbnail": thumbnail.asset->url,
    duration,
    isPremium,
    order
  }`,

  // Trivia
  allTriviaBooks: `*[_type == "triviaBook"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    testament,
    description,
    icon,
    isPremium,
    "questionCount": count(*[_type == "triviaQuestion" && references(^._id)])
  }`,

  triviaQuestionsByBook: (bookSlug: string) => `*[_type == "triviaQuestion" && book->slug.current == "${bookSlug}"] | order(order asc) {
    _id,
    question,
    options,
    correctAnswer,
    explanation,
    scripture,
    difficulty
  }`,

  // Testimonies
  allTestimonies: `*[_type == "testimony"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    author,
    location,
    "avatar": avatar.asset->url,
    excerpt,
    content,
    category,
    featured,
    publishedAt
  }`,

  featuredTestimonies: `*[_type == "testimony" && featured == true] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    author,
    location,
    "avatar": avatar.asset->url,
    excerpt,
    category
  }`,

  testimonyBySlug: (slug: string) => `*[_type == "testimony" && slug.current == "${slug}"][0] {
    _id,
    title,
    "slug": slug.current,
    author,
    location,
    "avatar": avatar.asset->url,
    content,
    category,
    publishedAt
  }`,
};

// Fetch functions
export async function fetchPrayers() {
  return sanityClient.fetch(queries.allPrayers);
}

export async function fetchPrayersByCategory(category: string) {
  return sanityClient.fetch(queries.prayersByCategory(category));
}

export async function fetchLessons() {
  return sanityClient.fetch(queries.allLessons);
}

export async function fetchLessonBySlug(slug: string) {
  return sanityClient.fetch(queries.lessonBySlug(slug));
}

export async function fetchVideoCourses() {
  return sanityClient.fetch(queries.allVideoCourses);
}

export async function fetchVideos() {
  return sanityClient.fetch(queries.allVideos);
}

export async function fetchVideosByCourse(courseSlug: string) {
  return sanityClient.fetch(queries.videosByCourse(courseSlug));
}

export async function fetchTriviaBooks() {
  return sanityClient.fetch(queries.allTriviaBooks);
}

export async function fetchTriviaQuestionsByBook(bookSlug: string) {
  return sanityClient.fetch(queries.triviaQuestionsByBook(bookSlug));
}

export async function fetchTestimonies() {
  return sanityClient.fetch(queries.allTestimonies);
}

export async function fetchFeaturedTestimonies() {
  return sanityClient.fetch(queries.featuredTestimonies);
}

export async function fetchTestimonyBySlug(slug: string) {
  return sanityClient.fetch(queries.testimonyBySlug(slug));
}

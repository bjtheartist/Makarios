export interface User {
  id: string;
  email: string;
  name: string;
  subscriptionStatus: 'none' | 'trial' | 'active';
  isGuest?: boolean;
}

export interface VideoCourse {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string; 
  duration: string;
}

export interface Testimony {
  id: string;
  name: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
}

export interface PrayerCategory {
  id: string;
  title: string;
  icon: string; // Lucide icon name mapping
}

export interface Prayer {
  id: string;
  categoryId: string;
  title: string;
  scripture: string;
  scriptureReference: string;
  content: string;
}

export interface DailyVerse {
  text: string;
  reference: string;
}

// Trivia Types
export interface TriviaBook {
  id: string;
  name: string;
}

export interface TriviaQuestion {
  id: string;
  bookId: string;
  question: string;
  options: string[];
  correctAnswer: number; // index
}

// Lesson Types
export interface Lesson {
  id: string;
  title: string;
  scriptureReference: string;
  content: string; // The reading material
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

// Navigation Types
export type ViewState = 'home' | 'videos' | 'prayers' | 'profile' | 'trivia' | 'lessons' | 'testimonies' | 'commentaries';
export type AuthState = 'loading' | 'unauthenticated' | 'authenticated';
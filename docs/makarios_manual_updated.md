# Makarios: The Founder's Manual (Updated)

## Introduction

Welcome to the updated founder's manual for Makarios. This document reflects the current state of the app as of **January 22, 2026**, including the successful integration of a **Firebase backend**. It serves as your comprehensive guide to the app's architecture, features, and the roadmap to App Store submission.

## 1. How It Works: The Technical Architecture

Makarios is built as a modern single-page web application using a robust technology stack. The recent integration of Firebase for backend services marks a significant milestone, moving the app from a prototype to a scalable, data-driven platform.

### 1.1. Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 | Core UI library for building components |
| **Language** | TypeScript 5.8 | Adds type safety to JavaScript |
| **Build Tool**| Vite 6.2 | Fast and modern build tool for web development |
| **Styling** | Tailwind CSS | A utility-first CSS framework for rapid UI development |
| **Icons** | Lucide React | A clean and consistent icon set |
| **Backend** | **Firebase** | **Provides authentication, database, and hosting** |

### 1.2. Project Structure

The project structure has been updated to include the Firebase integration:

```
Makarios/
├── src/ (legacy)
├── lib/
│   ├── firebase.ts       # Firebase configuration and initialization
│   └── AuthContext.tsx   # React context for managing authentication state
├── components/         # Reusable React components for each feature
├── constants.ts        # Static content for the app (prayers, lessons, etc.)
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component and routing
├── index.tsx           # Entry point of the application
├── public/
│   └── assets/         # New logo and splash screen
├── index.html          # Main HTML file with updated script entry
└── package.json        # Project dependencies and scripts
```

### 1.3. Data Management with Firebase

**The most significant update is the move from static data to a dynamic backend powered by Firebase.**

- **Authentication:** User authentication is no longer simulated. It is now handled by **Firebase Authentication**, supporting email/password, Google Sign-In, and anonymous guest access.
- **Database:** User data, including progress, streaks, and completed content, is now stored in **Firestore**, Firebase's NoSQL document database. This allows for data persistence across sessions and devices.
- **Content:** While the app's core content (prayers, lessons, etc.) is still in `constants.ts` for now, the infrastructure is in place to migrate this to a Content Management System (CMS) like Sanity and serve it through Firebase.

## 2. Why It Works: The Design Philosophy

The design philosophy remains the same, but it is now supported by a robust backend, making the experience more personalized and engaging.

- **Premium and Immersive User Experience:** The elegant dark UI is now complemented by a seamless and persistent user experience.
- **Structured and Guided Spiritual Growth:** With Firestore, we can now track user progress, providing a more personalized and rewarding journey.
- **Scalable and Secure Backend:** Firebase provides a secure and scalable backend, allowing the app to grow with its user base.

## 3. Core Features (Updated)

All core features are now connected to the Firebase backend:

- **Home Dashboard:** Displays a daily verse and provides access to all features.
- **Video Library:** Ready for integration with a video hosting service like Sanity.
- **Prayer Guides:** User progress is tracked in Firestore.
- **Bible Trivia:** Scores and progress are saved to the user's profile.
- **Bible Lessons:** Completed lessons are tracked in Firestore.
- **Testimonies:** Ready for dynamic content from a CMS.
- **Profile and Settings:** Displays user information from Firebase Auth and Firestore.
- **Subscription:** The UI is in place, ready for integration with a payment provider like Stripe.

## 4. Roadmap to App Store Submission

With the Firebase backend in place, we are now on a clear path to App Store submission. Here are the key steps:

| Step | Task | Status | Next Actions |
|---|---|---|---|
| 1 | **Backend & Auth** | ✅ Complete | Monitor and optimize as needed. |
| 2 | **Content Migration** | ⏳ In Progress | Migrate all content from `constants.ts` to a CMS (e.g., Sanity). |
| 3 | **Video Hosting** | ⏳ In Progress | Integrate with a video hosting provider (e.g., Sanity, Vimeo). |
| 4 | **Payment Processing** | ❌ Not Started | Integrate with Stripe to handle subscriptions. |
| 5 | **Push Notifications** | ❌ Not Started | Implement push notifications for daily verses and other reminders. |
| 6 | **Testing & QA** | ⏳ In Progress | Continue testing the app for bugs and usability issues. |
| 7 | **App Store Submission** | ❌ Not Started | Prepare the app for submission to the Apple App Store and Google Play Store. |

This updated manual provides a clear picture of where the Makarios app stands today. The successful integration of Firebase is a major step forward, and we are well-positioned to complete the remaining tasks and launch the app.

# Makarios: The Founder's Manual

## Introduction

Welcome to the founder's manual for Makarios, a Christian discipleship and spiritual growth mobile web application. This document serves as your guide to understanding the app's architecture, features, and the principles behind its design. It's the "keys to the car," empowering you to understand, operate, and prepare the app for its next phase of development, content input, and App Store submission.

## 1. How It Works: The Technical Architecture

Makarios is built as a modern single-page web application using a popular and robust technology stack. This architecture ensures a fast, responsive, and seamless user experience, similar to a native mobile app.

### 1.1. Technology Stack

The app is built on a foundation of **React**, a leading JavaScript library for building user interfaces, and **TypeScript**, which adds static typing to JavaScript for improved code quality and maintainability. The key technologies used are:

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 | Core UI library for building components |
| **Language** | TypeScript 5.8 | Adds type safety to JavaScript |
| **Build Tool**| Vite 6.2 | Fast and modern build tool for web development |
| **Styling** | Tailwind CSS | A utility-first CSS framework for rapid UI development |
| **Icons** | Lucide React | A clean and consistent icon set |

### 1.2. Project Structure

The project is organized into a logical and maintainable structure. The key files and directories are:

```
Makarios/
├── src/
│   ├── components/     # Reusable React components for each feature
│   ├── constants.ts    # Static content for the app (prayers, lessons, etc.)
│   ├── types.ts        # TypeScript type definitions
│   ├── App.tsx         # Main application component and routing
│   └── index.tsx       # Entry point of the application
├── public/             # Static assets like images and fonts
├── index.html          # Main HTML file
└── package.json        # Project dependencies and scripts
```

### 1.3. Component-Based Architecture

Makarios is built using a component-based architecture. Each feature of the app is encapsulated in its own React component, making the codebase modular, reusable, and easy to manage. The main components include:

- **`Auth.tsx`**: Handles user authentication (login, signup, guest access).
- **`Home.tsx`**: The main dashboard of the app.
- **`VideoLibrary.tsx`**: Displays video courses.
- **`Prayers.tsx`**: Provides guided prayers.
- **`BibleTrivia.tsx`**: A quiz feature to test biblical knowledge.
- **`Lessons.tsx`**: Presents Bible lessons with quizzes.
- **`Testimonies.tsx`**: Shares user testimonies.
- **`Profile.tsx`**: Manages user profiles and settings.
- **`Subscription.tsx`**: The paywall for the app's premium content.

### 1.4. Data Management

Currently, all the app's content is stored statically in the `constants.ts` file. This includes prayers, lessons, trivia questions, and video metadata. This approach was taken to rapidly prototype the app and focus on the user experience. For the next phase of development, this data will be migrated to a backend database to allow for dynamic content updates, user-generated content, and personalization.

## 2. Why It Works: The Design Philosophy

The design of Makarios is intentional, focusing on creating a premium, engaging, and spiritually enriching experience for the user. The "why" behind the app's design can be broken down into three key principles:

### 2.1. Premium and Immersive User Experience

The app's dark, elegant, and minimalist design is intended to create a premium and immersive experience. The use of a dark theme, serif fonts for headings, and ample white space creates a sense of reverence and focus, allowing the user to engage with the content without distraction. This design choice is a key differentiator and is central to the app's brand identity.

### 2.2. Structured and Guided Spiritual Growth

Makarios is designed to provide a structured and guided path for spiritual growth. The app's features are not just a collection of content but a curated journey for the user. The Home dashboard provides a starting point with a daily verse and a clear path to the app's core features. The guided prayers, Bible lessons with quizzes, and video courses are all designed to help the user deepen their faith in a structured and measurable way.

### 2.3. Simulated Backend for Rapid Prototyping

The decision to use a simulated backend and static data was a strategic one. It allowed for the rapid prototyping of the app's user interface and user experience without the overhead of building a full backend. This approach has enabled us to validate the app's design and functionality with a working prototype, providing a solid foundation for the next phase of development.

## 3. Core Features

This section provides a detailed overview of each of the app's core features.

### 3.1. Home Dashboard

The Home dashboard is the heart of the app, providing a central hub for the user's spiritual journey. It features a daily verse, a grid of the app's core features, and a carousel of user testimonies.

### 3.2. Video Library

The Video Library provides access to video courses on various spiritual topics. The UI is complete, but the video content and hosting are placeholders for now.

### 3.3. Prayer Guides

The Prayer Guides provide a collection of guided prayers organized by category. The prayers are designed to help users pray with intention and focus.

### 3.4. Bible Trivia

The Bible Trivia feature is a fun and engaging way for users to test their biblical knowledge. The feature is fully functional but requires more questions to be added.

### 3.5. Bible Lessons

The Bible Lessons feature provides in-depth lessons on various books of the Bible, complete with quizzes to test comprehension.

### 3.6. Testimonies

The Testimonies feature shares stories of faith from other users, providing encouragement and inspiration.

### 3.7. Profile and Settings

The Profile feature allows users to manage their account, view their subscription status, and access app settings.

### 3.8. Subscription

The Subscription feature is the paywall for the app's premium content. The UI is complete, but the payment processing is not yet integrated.

## 4. User Flows

Makarios offers three main user flows:

1.  **Guest User:** Users can explore the app's content without creating an account.
2.  **Email Registration:** Users can create an account to access premium features and track their progress.
3.  **Returning User:** Registered users can log in to their accounts and continue their spiritual journey.

This manual provides a comprehensive overview of the Makarios app. It is a living document that will be updated as the app evolves. We are excited about the future of Makarios and look forward to working with you to bring this vision to life.

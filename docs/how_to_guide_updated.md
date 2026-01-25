# Makarios: How-To Guide for Content Management (Updated)

## Introduction

This guide provides step-by-step instructions for managing the content within the Makarios application. As of **January 22, 2026**, the app now uses **Firebase** for user data and authentication, but the core content (prayers, lessons, etc.) is still managed statically. This guide has been updated to reflect the current state and future plans.

## 1. Content Management: The Current State

All of the app's core content is still located in the following file:

`/home/ubuntu/Makarios/constants.ts`

To update any content in the app, you will need to edit this file directly. The structure of the content remains the same as in the previous version of this guide.

## 2. The Role of Firebase

Firebase is now responsible for:

- **User Accounts:** All user accounts are stored in Firebase Authentication.
- **User Progress:** All user progress (completed lessons, prayers read, etc.) is stored in Firestore.

**You do not need to manually edit any data in Firebase.** The app handles all user data automatically.

## 3. The Path to a Full CMS

While editing the `constants.ts` file is a temporary solution, the long-term plan is to migrate all content to a headless Content Management System (CMS) like **Sanity**. This will provide a user-friendly interface for managing content, allowing non-developers to easily add, edit, and delete content without touching any code.

### Why Sanity?

- **Flexible Content Modeling:** Sanity allows us to create custom content models that match the structure of our prayers, lessons, and other content types.
- **Real-time Collaboration:** Multiple users can work on content at the same time.
- **Rich Media Support:** Sanity has excellent support for images and videos, which will be crucial for the Video Library and Testimonies sections.

### The Migration Plan

1.  **Set up a Sanity Project:** Create a new Sanity project and define the content models for each content type.
2.  **Migrate Existing Content:** Move all the content from `constants.ts` into Sanity.
3.  **Integrate Sanity with the App:** Update the app to fetch content from the Sanity API instead of `constants.ts`.

This migration will be a key part of the next phase of development, and it will make content management much easier and more scalable in the long run.

## 4. How to Edit Content (For Now)

For now, you can continue to edit the content in `constants.ts` as described in the previous version of this guide. The instructions for editing the daily verse, video courses, testimonies, prayers, trivia, and lessons remain the same.

This updated guide provides a clear path forward for content management in the Makarios app. The integration of Firebase is a major step, and the future migration to a CMS will make the app even more powerful and easy to manage.

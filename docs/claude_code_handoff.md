# Handoff to Claude Code: Makarios React Native Rebuild

This document outlines the current state of the Makarios project and the plan for rebuilding it in React Native with Expo for App Store submission.

## 1. Current State (React Web App)

- **GitHub Repo:** [https://github.com/bjtheartist/Makarios](https://github.com/bjtheartist/Makarios)
- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS
- **Backend:**
    - **Authentication:** Firebase (Email, Google, Anonymous)
    - **Database:** Firestore (for user data, progress)
    - **Content:** Sanity.io CMS
- **Live Demo:** A temporary live demo is running at [https://3000-i1r0gtzqhwtfs0n413chk-fdc6ecc5.us2.manus.computer](https://3000-i1r0gtzqhwtfs0n413chk-fdc6ecc5.us2.manus.computer)

**Key Achievements:**
- Full Firebase integration for auth and user data.
- Full Sanity CMS integration for all app content.
- All UI components are built and functional in the web app.
- Branding assets (logo, splash screen) are integrated.

## 2. React Native Rebuild Plan

The goal is to rebuild the app using **React Native and Expo** to prepare it for submission to the Apple App Store and Google Play Store.

### **Tech Stack:**
- **Framework:** Expo SDK 50+
- **Language:** TypeScript
- **Authentication:** Firebase (same configuration)
- **Database:** Firestore (same configuration)
- **Content:** Sanity.io (same configuration)
- **Payments:**
    - **iOS:** `expo-in-app-purchases` for Apple IAP
    - **Android:** `expo-in-app-purchases` for Google Play Billing

### **Rebuild Steps:**

1.  **Scaffold New Expo Project:**
    ```bash
    npx create-expo-app makarios-mobile --template
    ```

2.  **Port Over Existing Logic (High Reusability):**
    -   **`lib/` directory:** `firebase.ts`, `sanity.ts`, `useContent.ts`, and `AuthContext.tsx` can be reused with minimal changes.
    -   **`constants.ts`:** Can be reused.
    -   **`types.ts`:** Can be reused.

3.  **Rebuild UI Components (Requires Rewrite):**
    -   All components in the `components/` directory need to be rewritten using React Native components (`<View>`, `<Text>`, `<Image>`, `<TouchableOpacity>`).
    -   Tailwind CSS will be replaced with React Native styling (StyleSheet API or a library like `nativewind`).

4.  **Integrate Native Payments:**
    -   Use the `expo-in-app-purchases` library to handle subscriptions.
    -   Create a new `Subscription` component that interfaces with Apple/Google payment APIs.

5.  **App Store Assets:**
    -   Create adaptive app icons using the provided `MAKARIOSICON.PNG`.
    -   Generate splash screens.
    -   Prepare screenshots for the App Store listings.

6.  **Build & Submit:**
    -   Use Expo Application Services (EAS) to build the app for iOS and Android:
        ```bash
        eas build --platform all
        ```
    -   Submit the builds to App Store Connect and Google Play Console.

## 3. Key Files for Reference

-   **Firebase Config:** `firebase_config.txt` (in root)
-   **Sanity Config:** `sanity_config.txt` (in root)
-   **Sanity Studio:** The `sanity-studio` directory contains the full CMS configuration.
-   **UI Components:** The `components/` directory has all the React web components to be ported.

This handoff provides a clear path to get the Makarios app rebuilt in React Native and ready for the App Store. The backend and content systems are robust and ready to be connected to the new mobile UI.

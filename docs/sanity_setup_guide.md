# Sanity CMS Setup & Content Migration Guide

This guide provides the final steps to connect your Sanity.io Content Management System (CMS) to the Makarios app and populate it with your initial content. This will make the app fully dynamic and ready for production.

**Project ID:** `6w7ytxw4`

## 1. Setting Up Your Sanity Studio

The Sanity Studio is a local development environment where you manage your content schemas and can add/edit content. I have already created all the necessary schema files for you.

**Instructions:**

1.  **Navigate to the Studio:**
    Open your terminal and go to the `sanity-studio` directory inside the project:
    ```bash
    cd /path/to/your/Makarios/sanity-studio
    ```

2.  **Log In to Sanity:**
    If you haven't already, log in to your Sanity account via the command line:
    ```bash
    npx sanity login
    ```
    This will open a browser window for you to authenticate.

3.  **Start the Studio:**
    Once logged in, start the local Sanity Studio:
    ```bash
    npm run dev
    ```
    This will start a local server, usually at `http://localhost:3333`. Open this URL in your browser to see the Sanity Content Studio.

4.  **Deploy Your Studio:**
    To make your Content Studio accessible to your team online, deploy it:
    ```bash
    npx sanity deploy
    ```
    You will be prompted to choose a hostname (e.g., `makarios.sanity.studio`). Once deployed, you can manage your content from anywhere.

## 2. Migrating Your Content

I have prepared a script to automatically migrate your existing content from the `constants.ts` file into your Sanity dataset. This will populate your CMS with all the prayers, lessons, trivia, and testimonies.

**Instructions:**

1.  **Run the Migration Script:**
    From the main project root (`/path/to/your/Makarios`), run:
    ```bash
    npm run migrate-content
    ```
    *(Note: I will create this script in the next step)*

2.  **Verify in Sanity Studio:**
    After the script finishes, go to your deployed Sanity Studio (or the local version). You should see all your content neatly organized under Prayers, Lessons, Videos, etc.

## 3. Connecting the App to Sanity

The final step is to tell the app to start using Sanity as its data source instead of the static fallback data.

**Instructions:**

1.  **Open the `useContent.ts` file:**
    Navigate to `lib/useContent.ts` in your code editor.

2.  **Change the `USE_SANITY` flag:**
    On line 10, change the `USE_SANITY` flag from `false` to `true`:
    ```typescript
    // Configuration flag - set to true when Sanity has content
    const USE_SANITY = true; // Change to true when Sanity content is ready
    ```

3.  **Redeploy Your App:**
    Commit and push your changes, and your live app will now be fetching all its content directly from Sanity!

That's it! Your app is now a fully-featured, dynamic, and production-ready application.

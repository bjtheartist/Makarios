# Makarios: How-To Guide for Content Management

## Introduction

This guide provides step-by-step instructions for managing the content within the Makarios application. Currently, all content is stored in a single file, `constants.ts`, which acts as a temporary, static database. This allows for direct content manipulation without a complex backend system. As the project evolves, this will be replaced by a full-fledged Content Management System (CMS).

## 1. Locating the Content File

All the application's content is located in the following file:

`/home/ubuntu/Makarios/constants.ts`

To update any content in the app, you will need to edit this file directly.

## 2. Understanding the Content Structure

The `constants.ts` file exports several arrays of objects, each corresponding to a specific feature in the app. The main content types are:

- `DAILY_VERSE`
- `VIDEO_COURSES`
- `TESTIMONIES`
- `PRAYER_CATEGORIES`
- `PRAYERS`
- `TRIVIA_BOOKS`
- `TRIVIA_QUESTIONS`
- `LESSONS`

Each object in these arrays has a specific structure (a TypeScript interface) that must be followed for the content to display correctly in the app.

## 3. How to Edit Content

Below are instructions for editing the content for each feature.

### 3.1. Daily Verse

The daily verse is a single object. To change it, edit the `text` and `reference` properties.

**Structure:**
```typescript
export const DAILY_VERSE: DailyVerse = {
  text: "For I know the thoughts that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope.",
  reference: "Jeremiah 29:11"
};
```

### 3.2. Video Courses

Video courses are stored in the `VIDEO_COURSES` array. Each object represents a single video.

**Structure:**
```typescript
{
  id: '1',
  title: "What is Justification?",
  description: "Understanding the foundational doctrine of how we are made right with God.",
  duration: "12:30",
  thumbnailUrl: "https://picsum.photos/400/225?grayscale"
}
```

- **To add a new video:** Copy an existing video object, paste it at the end of the array, and update the `id`, `title`, `description`, `duration`, and `thumbnailUrl`.
- **To edit an existing video:** Locate the video by its `title` and modify the desired properties.
- **To delete a video:** Remove the entire object from the array.

**Note:** The `thumbnailUrl` currently uses placeholder images. You will need to replace these with actual URLs to your video thumbnails.

### 3.3. Testimonies

Testimonies are stored in the `TESTIMONIES` array.

**Structure:**
```typescript
{
  id: 't1',
  name: "Umika Rose-Lambert",
  title: "From Broken to Healed",
  description: "I went from broken to healed. Watch my testimony about God's saving grace.",
  thumbnailUrl: "https://picsum.photos/100/100?grayscale"
}
```

- **To add a new testimony:** Copy an existing testimony object, paste it, and update the properties.
- **To edit an existing testimony:** Find the testimony by `name` or `title` and modify it.
- **To delete a testimony:** Remove the object from the array.

### 3.4. Prayers

Prayers are organized into categories. First, define the categories in `PRAYER_CATEGORIES`, then add the prayers to the `PRAYERS` array, making sure to link them with the correct `categoryId`.

**Prayer Category Structure:**
```typescript
{ id: 'love', title: "LOVE", icon: "Heart" }
```

**Prayer Structure:**
```typescript
{
  id: 'love-1',
  categoryId: 'love',
  title: "Experiencing God’s Love",
  scripture: "See what great love the Father has lavished on us, that we should be called children of God!",
  scriptureReference: "1 John 3:1",
  content: "Father, open my eyes to the depth of Your love for me... Amen."
}
```

- **To add a new prayer:** Create a new prayer object, ensuring the `categoryId` matches one of the categories in `PRAYER_CATEGORIES`.

### 3.5. Bible Trivia

Trivia questions are linked to books of the Bible. First, ensure the book is defined in `TRIVIA_BOOKS`, then add questions to the `TRIVIA_QUESTIONS` array.

**Trivia Book Structure:**
```typescript
{ id: 'matthew', name: 'Matthew' }
```

**Trivia Question Structure:**
```typescript
{
  id: 'matthew-1',
  bookId: 'matthew',
  question: "Who visited Jesus after his birth in the Gospel of Matthew?",
  options: ["Shepherds", "The Wise Men (Magi)", "King Herod", "Angels"],
  correctAnswer: 1 // Index of the correct answer in the options array (0-indexed)
}
```

- **To add a new question:** Create a new question object, linking it to a `bookId`.

### 3.6. Bible Lessons

Bible lessons are stored in the `LESSONS` array. Each lesson can have multiple quiz questions.

**Lesson Structure:**
```typescript
{
  id: 'l1',
  title: "Genesis 1: Creation",
  scriptureReference: "Genesis 1:1-5",
  content: "In the beginning God created the heavens and the earth...",
  quiz: [
    {
      question: "What was hovering over the waters in the beginning?",
      options: ["The sun", "The Spirit of God", "Darkness", "Angels"],
      correctAnswer: 1
    }
  ]
}
```

- **To add a new lesson:** Create a new lesson object with its own title, content, and quiz questions.

## 4. Next Steps: Transitioning to a CMS

While editing the `constants.ts` file is a temporary solution, the long-term plan is to migrate all content to a headless Content Management System (CMS). A CMS will provide a user-friendly interface for managing content, allowing non-developers to easily add, edit, and delete content without touching any code. This will be a key part of the next phase of development.

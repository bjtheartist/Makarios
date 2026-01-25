# Makarios Content Studio
## A Guide for Content Editors

---

# Getting Started

## Step 1: Access the Studio

**URL:** https://makarios.sanity.studio/

1. Open the URL in your browser
2. Log in with your Sanity account credentials
3. You'll see the main dashboard with all content types

---

# The Dashboard

When you log in, you'll see a sidebar on the left with these sections:

```
📖 Daily Verse
─────────────
🎬 Video Courses
📚 Lessons
─────────────
🙏 Prayers
   ├── All Prayers
   └── Categories
─────────────
❓ Bible Trivia
   ├── Questions
   └── Books
─────────────
💬 Testimonies
```

Click any section to view and edit that content type.

---

# Managing Daily Verses

## To Add a New Verse:

1. Click **Daily Verse** in the sidebar
2. Click the **+ Create** button (top right)
3. Fill in:
   - **Reference:** e.g., "Philippians 4:13"
   - **Verse Text:** The full verse text
4. Click **Publish** (green button, bottom right)

## To Edit an Existing Verse:

1. Click the verse in the list
2. Make your changes
3. Click **Publish** to save

> **Note:** Changes appear in the app immediately after publishing!

---

# Managing Video Courses

## Fields to Fill:

| Field | Description | Example |
|-------|-------------|---------|
| **Title** | Course name | "The Beatitudes Explained" |
| **Description** | Short summary | "A deep dive into Matthew 5..." |
| **Thumbnail URL** | YouTube thumbnail | `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg` |
| **Video URL** | YouTube link | `https://youtube.com/watch?v=...` |
| **Duration** | Length | "45:30" |

## Getting YouTube Thumbnail URLs:

Replace `VIDEO_ID` with your video's ID:
```
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
```

Example: For `youtube.com/watch?v=abc123`:
```
https://img.youtube.com/vi/abc123/maxresdefault.jpg
```

---

# Managing Prayers

## Two Parts to Prayers:

### 1. Prayer Categories
Categories organize prayers (Love, Healing, Family, etc.)

**To add a category:**
1. Go to **Prayers → Categories**
2. Click **+ Create**
3. Enter:
   - **Name:** "Gratitude"
   - **Icon:** "Heart" (optional - uses Lucide icons)
4. Publish

### 2. Individual Prayers
Each prayer belongs to a category.

**To add a prayer:**
1. Go to **Prayers → All Prayers**
2. Click **+ Create**
3. Fill in:
   - **Title:** "Prayer for Inner Peace"
   - **Content:** The full prayer text
   - **Category:** Select from dropdown
4. Publish

---

# Managing Lessons

Lessons include content AND quiz questions.

## Adding a Lesson:

1. Click **Lessons** in sidebar
2. Click **+ Create**
3. Fill in:
   - **Title:** "Understanding Grace"
   - **Content:** The lesson text (can be multiple paragraphs)

## Adding Quiz Questions to a Lesson:

1. Scroll to **Quiz Questions** section
2. Click **Add item**
3. For each question:
   - **Question:** "What does grace mean in Greek?"
   - **Options:** Click **Add item** for each answer option
   - **Correct Answer:** Enter the index (0 = first option, 1 = second, etc.)

### Example Quiz Question:

```
Question: "What is the fruit of the Spirit?"

Options:
  0: "Love, joy, peace..."  ← Correct (enter 0)
  1: "Faith, hope, charity..."
  2: "Patience, kindness..."
  3: "All of the above"

Correct Answer: 0
```

---

# Managing Bible Trivia

## Two Parts:

### 1. Trivia Books
Books of the Bible that questions belong to.

**To add:**
1. Go to **Bible Trivia → Books**
2. Create with **Name:** "Genesis", "Exodus", etc.

### 2. Trivia Questions

**To add:**
1. Go to **Bible Trivia → Questions**
2. Click **+ Create**
3. Fill in:
   - **Question:** "Who built the ark?"
   - **Options:** Add 4 answer choices
   - **Correct Answer:** Index of correct option (0-3)
   - **Book:** Select which book this relates to
4. Publish

---

# Managing Testimonies

Testimonies are user stories of faith.

## Fields:

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Person's name | "Sarah M." |
| **Location** | City, State | "Austin, TX" |
| **Story** | Their testimony | "After years of struggling..." |

---

# Publishing & Drafts

## Understanding the Workflow:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Create    │ ──► │    Draft    │ ──► │  Published  │
│   Content   │     │   (saved)   │     │   (live!)   │
└─────────────┘     └─────────────┘     └─────────────┘
```

- **Draft:** Saved but NOT visible in the app
- **Published:** Live and visible to all users

## How to Publish:

1. Make your changes
2. Click the green **Publish** button (bottom right)
3. Content is now live!

## How to Unpublish:

1. Click the **⋮** menu next to Publish
2. Select **Unpublish**
3. Content returns to draft state

---

# Tips & Best Practices

## ✅ Do:

- **Preview before publishing** - Review all content carefully
- **Use consistent formatting** - Keep prayer styles similar
- **Test YouTube links** - Make sure videos play correctly
- **Keep descriptions concise** - Users scan, they don't read

## ❌ Don't:

- **Don't delete categories** that have prayers linked to them
- **Don't leave required fields empty** - They're required for a reason
- **Don't use very long titles** - They may get cut off in the app

---

# Common Tasks Quick Reference

| Task | Where to Go | Action |
|------|-------------|--------|
| Add daily verse | Daily Verse | + Create |
| Add video | Video Courses | + Create |
| Add prayer | Prayers → All Prayers | + Create |
| Add category | Prayers → Categories | + Create |
| Add lesson | Lessons | + Create |
| Add trivia | Bible Trivia → Questions | + Create |
| Add testimony | Testimonies | + Create |
| Edit anything | Click the item | Make changes → Publish |
| Delete | Click item → ⋮ menu | Delete |

---

# Need Help?

## Studio URL
https://makarios.sanity.studio/

## Support
Contact the development team for technical issues.

## Content Guidelines
- Keep prayers between 100-300 words
- Video descriptions: 1-2 sentences
- Testimonies: 150-400 words
- Quiz questions: 4 options each

---

# You're Ready!

Start adding content to bless the Makarios community.

**Remember:** Every piece of content you publish helps someone grow in their faith journey.

🙏 *Go make disciples of all nations.*

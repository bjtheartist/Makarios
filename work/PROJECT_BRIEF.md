# MAKARIOS - Project Brief

> Christian discipleship and spiritual growth mobile web application

---

## Executive Summary

**Project Name:** MAKARIOS (Greek: "blessed, happy")
**Mission:** Help users deepen their faith through structured content, guided prayers, biblical education, and community testimonies.
**Target Audience:** Christians seeking spiritual growth, prayer guidance, and biblical education
**Monetization:** Subscription-based ($12.99/mo or $97/yr) with 7-day free trial

---

## Project Status

| Aspect | Status | Notes |
|--------|--------|-------|
| **Frontend UI** | Complete | All 13 components built |
| **Static Content** | Complete | 21KB of prayers, lessons, trivia, videos |
| **Auth Flow** | Simulated | 1500ms delay, no real backend |
| **Database** | Not Started | No persistence layer |
| **Backend API** | Not Started | All data client-side |
| **Payments** | Not Started | Subscription UI only |
| **Video Hosting** | Mock | Placeholder player |

**Repository:** https://github.com/bjtheartist/Makarios.git
**Branch:** main
**Version:** 0.0.0 (Initial development)

---

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| **Framework** | React | 19.2.3 |
| **Language** | TypeScript | 5.8.2 |
| **Build Tool** | Vite | 6.2.0 |
| **Styling** | TailwindCSS | CDN |
| **Icons** | Lucide React | 0.562.0 |
| **Fonts** | Playfair Display + Inter | Google Fonts |

---

## Design Philosophy

### Visual Identity
- **Theme:** Dark, premium, elegant
- **Primary Background:** Onyx (#050505)
- **Card Background:** Charcoal (#1A1A1A)
- **Typography:** Serif headings (Playfair), Sans body (Inter)
- **Weight:** Light (200-300) for elegant feel
- **Corners:** Rounded-3xl cards, pill buttons
- **Borders:** Gray-800/900 for subtle definition

### User Experience
- Splash screen on load (2.5s)
- Bottom navigation (4 tabs)
- Guest mode for exploration
- Subscription wall after trial
- Nested navigation within features

---

## Core Features

### 1. Home Dashboard
- Daily verse card with scripture
- 6-tile explore grid (Videos, Prayers, Trivia, Lessons, Testimonies, Commentaries)
- Horizontal testimonies carousel
- Prayer categories quick access

### 2. Video Library
- 3 video courses (Justification, Prayer, Walking in Spirit)
- Grid view with hover effects
- Modal player with "Up Next" suggestions
- Mock video playback

### 3. Prayer Guides
- 6 categories: Love, Healing, Family, Guidance, Peace, Provision
- 20 guided prayers total
- Scripture foundation for each prayer
- Share and favorite actions (UI only)

### 4. Bible Trivia
- 6 New Testament books (Matthew, Mark, Luke, John, Acts, Romans)
- Multiple choice questions
- Immediate feedback (green/red)
- Progress tracking per session

### 5. Bible Lessons
- Genesis 1 & 2, John 1 lessons
- Scripture reading with context
- Embedded comprehension quizzes
- Quiz completion tracking

### 6. Testimonies
- 5 faith journey stories
- Card grid layout
- Play indicators for video testimonies
- Names: Umika, John, Sarah, David, Rachel

### 7. Profile & Settings
- User info display
- Guest vs authenticated states
- Subscription status
- Settings menu (Notifications, Preferences)
- Logout functionality

### 8. Subscription
- Monthly plan: $12.99/mo
- Yearly plan: $97/yr (best value)
- 7-day free trial
- Feature checklist comparison

---

## Content Library

### Prayers (20 total)
| Category | Count | Titles |
|----------|-------|--------|
| Love | 4 | Experiencing God's Love, Love That Casts Out Fear, Loving Others Well, Healing From Heartbreak |
| Healing | 4 | Strength for Body, Healing for Mind, Courage in Chronic Conditions, Restoration and Rest |
| Family | 4 | Unity in Home, Protection Over Loved Ones, Healing Family Relationships, Blessing for Generations |
| Guidance | 4 | Direction for Today, Wisdom in Conversations, Discernment and Protection, Wisdom for Big Decisions |
| Peace | 4 | Peace in Storm, Comfort in Grief, Peace at Night, Comfort for Anxious Heart |
| Provision | 4 | Daily Bread, Provision With Peace, Opportunity and Open Doors, Provision for Family |

### Video Courses (3)
1. "What is Justification?" (12:30)
2. "The Power of Prayer" (18:45)
3. "Walking in the Spirit" (15:10)

### Trivia Books (6)
Matthew, Mark, Luke, John, Acts, Romans

### Lessons (3)
1. Genesis 1: Creation
2. Genesis 2: Man & Woman
3. John 1: The Word

### Testimonies (5)
1. Umika Rose-Lambert - "From Broken to Healed"
2. John Doe - "Financial Breakthrough"
3. Sarah Jenkins - "Saved from Anxiety"
4. David Chen - "Restored Marriage"
5. Rachel Alucard - "Finding Purpose"

---

## User Flows

### Flow 1: Guest User
```
Splash → Auth Screen → "Continue as Guest" → Full App Access
                                              (subscription = 'active')
```

### Flow 2: Email Registration
```
Splash → Auth Screen → Sign Up → Subscription Wall → Select Plan → Full App
```

### Flow 3: Returning User
```
Splash → Auth Screen → Login → Check Sub Status → App or Paywall
```

---

## File Structure

```
Makarios/
├── index.html          # HTML shell with Tailwind config
├── index.tsx           # React DOM entry point
├── App.tsx             # Main app (routing, auth, state)
├── types.ts            # TypeScript interfaces (75 lines)
├── constants.ts        # Static content data (370 lines)
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript config
├── package.json        # Dependencies
├── README.md           # Setup instructions
├── metadata.json       # Project metadata
└── components/
    ├── Auth.tsx            # Login/signup form
    ├── Layout.tsx          # Bottom nav wrapper
    ├── Home.tsx            # Dashboard/hub
    ├── VideoLibrary.tsx    # Video courses
    ├── Prayers.tsx         # Guided prayers
    ├── BibleTrivia.tsx     # Quiz system
    ├── Lessons.tsx         # Bible reading + quizzes
    ├── Testimonies.tsx     # User stories
    ├── Profile.tsx         # User profile
    ├── Subscription.tsx    # Paywall
    ├── Commentaries.tsx    # Placeholder
    └── ui/
        └── Button.tsx      # Reusable button
```

---

## State Management

### Global State (App.tsx)
```typescript
user: User | null           // Current user
currentView: ViewState      // Active page
isLoading: boolean          // Splash screen
```

### Local Component State
- VideoLibrary: activeVideo
- Prayers: selectedCategory, activePrayer
- BibleTrivia: selectedBook, currentQuestionIndex, selectedAnswer
- Lessons: activeLesson, showQuiz
- Auth: isLogin, email, password, loading

---

## TypeScript Interfaces

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  subscriptionStatus: 'none' | 'trial' | 'active';
  isGuest?: boolean;
}

interface Prayer {
  id: string;
  categoryId: string;
  title: string;
  scripture: string;
  scriptureReference: string;
  content: string;
}

interface Lesson {
  id: string;
  title: string;
  scriptureReference: string;
  content: string;
  quiz: { question: string; options: string[]; correctAnswer: number }[];
}

type ViewState = 'home' | 'videos' | 'prayers' | 'profile' | 'trivia' | 'lessons' | 'testimonies' | 'commentaries';
```

---

## Next Steps

See ROADMAP.md for detailed development phases.

### Immediate Priorities
1. Backend API setup (Convex or Supabase)
2. Real authentication system
3. Database schema design
4. Payment integration (Stripe)

### Future Enhancements
- Push notifications for daily verse
- Community features
- User-generated testimonies
- Commentaries feature
- Offline support

---

## Contact & Resources

**Repository:** https://github.com/bjtheartist/Makarios.git
**Developer:** @bjtheartist
**Created:** January 2026
**Last Updated:** January 22, 2026

# MAKARIOS - Feature Breakdown

> Comprehensive documentation of all features, their implementation status, and user flows.

---

## Feature Overview

| Feature | Status | Component | Priority |
|---------|--------|-----------|----------|
| Authentication | Simulated | Auth.tsx | Critical |
| Home Dashboard | Complete | Home.tsx | High |
| Video Library | UI Complete | VideoLibrary.tsx | High |
| Prayer Guides | Complete | Prayers.tsx | High |
| Bible Trivia | Complete | BibleTrivia.tsx | Medium |
| Bible Lessons | Complete | Lessons.tsx | Medium |
| Testimonies | Complete | Testimonies.tsx | Medium |
| Profile | Complete | Profile.tsx | High |
| Subscription | UI Complete | Subscription.tsx | Critical |
| Commentaries | Placeholder | Commentaries.tsx | Low |

---

## 1. Authentication System

### Component: `Auth.tsx`

**Current Implementation:** Simulated (no backend)

### UI Elements
- Email input field
- Password input field
- Login/Signup toggle
- Submit button with loading state
- "Continue as Guest" option
- App branding (MAKARIOS title)

### User Flows

**Login Flow:**
```
1. User enters email + password
2. Click "Sign In"
3. 1500ms simulated delay
4. Create user object with subscriptionStatus: 'none'
5. Return to App.tsx → Check subscription
6. If 'none' → Show Subscription paywall
```

**Signup Flow:**
```
1. User enters email + password
2. Click "Create Account"
3. 1500ms simulated delay
4. Create user object with subscriptionStatus: 'none'
5. Return to App.tsx → Show Subscription paywall
```

**Guest Flow:**
```
1. Click "Continue as Guest"
2. Immediately create guest user
3. subscriptionStatus: 'active' (bypass paywall)
4. isGuest: true (affects Profile display)
5. Direct to Home dashboard
```

### Future Requirements
- [ ] Real authentication backend (Supabase/Convex)
- [ ] Email verification
- [ ] Password reset flow
- [ ] OAuth providers (Google, Apple)
- [ ] Session persistence
- [ ] Secure token storage

---

## 2. Home Dashboard

### Component: `Home.tsx`

**Status:** Complete

### Sections

#### Daily Verse Card
- Scripture text (Jeremiah 29:11)
- Scripture reference
- Elegant card design with serif typography

#### Explore Grid (6 tiles)
| Tile | Icon | Destination |
|------|------|-------------|
| Videos | Play | VideoLibrary view |
| Prayers | Heart | Prayers view |
| Trivia | Brain | BibleTrivia view |
| Lessons | BookOpen | Lessons view |
| Testimonies | Users | Testimonies view |
| Commentaries | FileText | Commentaries view |

#### Testimonies Carousel
- Horizontal scroll
- 5 testimony cards
- Click to view full testimony
- Thumbnail + name + title

#### Prayer Categories Preview
- 6 category cards
- Icon + title
- Click navigates to Prayers with category selected

### Navigation
- Clicking any tile calls `setView(viewName)`
- Bottom nav provides quick access to main sections

---

## 3. Video Library

### Component: `VideoLibrary.tsx`

**Status:** UI Complete, Video Playback Mock

### Video Courses Available

| ID | Title | Duration | Description |
|----|-------|----------|-------------|
| 1 | What is Justification? | 12:30 | Understanding how we are made right with God |
| 2 | The Power of Prayer | 18:45 | How communication with the Father transforms you |
| 3 | Walking in the Spirit | 15:10 | Distinguishing between flesh and spirit |

### UI Components

**Grid View:**
- 3-column grid on desktop
- Card with thumbnail, title, duration badge
- Hover effect for interaction feedback

**Player View (Modal):**
- Large video player area (mock)
- Video title + description
- Play/pause controls (UI only)
- "Up Next" section with other videos
- Back button to return to grid

### Interactions
```typescript
const [activeVideo, setActiveVideo] = useState<VideoCourse | null>(null);

// Click video card → setActiveVideo(video) → Show player
// Click back → setActiveVideo(null) → Show grid
```

### Future Requirements
- [ ] Real video hosting (YouTube, Vimeo, or custom)
- [ ] Video progress tracking
- [ ] Resume playback
- [ ] Bookmarking
- [ ] Video notes
- [ ] Completion certificates

---

## 4. Prayer Guides

### Component: `Prayers.tsx`

**Status:** Complete

### Content Structure

**6 Prayer Categories:**
| ID | Title | Icon | Prayer Count |
|----|-------|------|--------------|
| love | LOVE | Heart | 4 |
| healing | HEALING & HEALTH | Activity | 4 |
| family | FAMILY | Users | 4 |
| guidance | GUIDANCE & WISDOM | Compass | 4 |
| peace | PEACE & COMFORT | Sun | 4 |
| provision | PROVISION | Briefcase | 4 |

**20 Prayers Total** (see CONTENT_INVENTORY.md for full list)

Each prayer contains:
- Title
- Scripture (verse text)
- Scripture reference (book:chapter:verse)
- Full prayer content (50-100 words)

### Navigation Levels

**Level 1: Category Grid**
```
┌─────────┬─────────┬─────────┐
│  Love   │ Healing │ Family  │
├─────────┼─────────┼─────────┤
│Guidance │  Peace  │Provision│
└─────────┴─────────┴─────────┘
```

**Level 2: Prayer List**
```
Selected: LOVE
├── Experiencing God's Love
├── Love That Casts Out Fear
├── Loving Others Well
└── Healing From Heartbreak
```

**Level 3: Prayer Detail**
```
┌────────────────────────────┐
│     [Back Button]          │
│                            │
│  "Experiencing God's Love" │
│                            │
│  Scripture:                │
│  "See what great love..."  │
│  - 1 John 3:1              │
│                            │
│  [Prayer Content]          │
│                            │
│  [Share] [Favorite]        │
└────────────────────────────┘
```

### State Management
```typescript
const [selectedCategory, setSelectedCategory] = useState<PrayerCategory | null>(null);
const [activePrayer, setActivePrayer] = useState<Prayer | null>(null);

// Render logic
if (activePrayer) return <PrayerDetail />;
if (selectedCategory) return <PrayerList />;
return <CategoryGrid />;
```

### Future Requirements
- [ ] Favorite prayers (persist to DB)
- [ ] Share functionality
- [ ] Daily prayer reminders
- [ ] Custom prayers (user-created)
- [ ] Prayer journaling

---

## 5. Bible Trivia

### Component: `BibleTrivia.tsx`

**Status:** Complete

### Content Structure

**6 Trivia Books:**
- Matthew
- Mark
- Luke
- John
- Acts
- Romans

**4 Questions Currently** (Matthew, Mark only)

### Game Flow

**Step 1: Book Selection**
```
┌─────────┬─────────┬─────────┐
│ Matthew │  Mark   │  Luke   │
├─────────┼─────────┼─────────┤
│  John   │  Acts   │ Romans  │
└─────────┴─────────┴─────────┘
```

**Step 2: Question Display**
```
┌────────────────────────────────┐
│  Question 1 of 3               │
│                                │
│  Who visited Jesus after his   │
│  birth in Matthew?             │
│                                │
│  [ ] Shepherds                 │
│  [ ] The Wise Men (Magi) ←     │
│  [ ] King Herod                │
│  [ ] Angels                    │
│                                │
│  [Submit Answer]               │
└────────────────────────────────┘
```

**Step 3: Feedback**
- Correct: Option turns green, "Correct!" message
- Wrong: Selected option turns red, correct shows green
- Auto-advance to next question after 1.5s

### State Management
```typescript
const [selectedBook, setSelectedBook] = useState<TriviaBook | null>(null);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
const [isAnswered, setIsAnswered] = useState(false);
```

### Future Requirements
- [ ] More questions per book (25+ each)
- [ ] Score tracking and leaderboards
- [ ] Difficulty levels
- [ ] Timed challenges
- [ ] Achievements/badges
- [ ] Daily trivia challenge

---

## 6. Bible Lessons

### Component: `Lessons.tsx`

**Status:** Complete

### Content Structure

| ID | Title | Scripture | Quiz Questions |
|----|-------|-----------|----------------|
| l1 | Genesis 1: Creation | Genesis 1:1-5 | 2 |
| l2 | Genesis 2: Man & Woman | Genesis 2:7 | 1 |
| l3 | John 1: The Word | John 1:1-4 | 1 |

### Lesson Flow

**Step 1: Lesson List**
```
┌────────────────────────────────┐
│  📖 Genesis 1: Creation        │
│     Genesis 1:1-5              │
├────────────────────────────────┤
│  📖 Genesis 2: Man & Woman     │
│     Genesis 2:7                │
├────────────────────────────────┤
│  📖 John 1: The Word           │
│     John 1:1-4                 │
└────────────────────────────────┘
```

**Step 2: Reading View**
```
┌────────────────────────────────┐
│  [Back]                        │
│                                │
│  Genesis 1: Creation           │
│  Genesis 1:1-5                 │
│                                │
│  "In the beginning God         │
│   created the heavens and      │
│   the earth..."                │
│                                │
│  [Take Quiz →]                 │
└────────────────────────────────┘
```

**Step 3: Quiz Mode**
```
┌────────────────────────────────┐
│  Question 1 of 2               │
│                                │
│  What was hovering over        │
│  the waters in the beginning?  │
│                                │
│  [ ] The sun                   │
│  [●] The Spirit of God         │
│  [ ] Darkness                  │
│  [ ] Angels                    │
│                                │
│  [Next Question]               │
└────────────────────────────────┘
```

### State Management
```typescript
const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
const [showQuiz, setShowQuiz] = useState(false);
const [quizIndex, setQuizIndex] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
```

### Future Requirements
- [ ] More lessons (full Bible curriculum)
- [ ] Progress tracking
- [ ] Bookmarks
- [ ] Notes on passages
- [ ] Audio narration
- [ ] Reading plans

---

## 7. Testimonies

### Component: `Testimonies.tsx`

**Status:** Complete

### Content Structure

| ID | Name | Title | Theme |
|----|------|-------|-------|
| t1 | Umika Rose-Lambert | From Broken to Healed | Salvation |
| t2 | John Doe | Financial Breakthrough | Provision |
| t3 | Sarah Jenkins | Saved from Anxiety | Mental Health |
| t4 | David Chen | Restored Marriage | Relationships |
| t5 | Rachel Alucard | Finding Purpose | Career/Calling |

### UI Layout

**Grid View:**
```
┌─────────────┬─────────────┐
│ [Thumbnail] │ [Thumbnail] │
│ Umika       │ John Doe    │
│ From Broken │ Financial   │
├─────────────┼─────────────┤
│ [Thumbnail] │ [Thumbnail] │
│ Sarah       │ David       │
│ Anxiety     │ Marriage    │
└─────────────┴─────────────┘
```

Each card shows:
- User photo thumbnail
- Name
- Testimony title
- Play indicator (for video testimonies)

### Future Requirements
- [ ] Video testimonies (real playback)
- [ ] User-submitted testimonies
- [ ] Like/save functionality
- [ ] Category filtering
- [ ] Share to social media

---

## 8. Profile

### Component: `Profile.tsx`

**Status:** Complete

### UI Sections

**User Info:**
- Avatar placeholder
- User name (or "Guest User")
- User email (or "Explore Mode")
- Subscription badge

**For Guest Users:**
- "Create Account" button (navigates to Auth)

**For Authenticated Users:**
- Subscription status display

**Settings Menu:**
| Item | Icon | Action |
|------|------|--------|
| Notifications | Bell | Settings modal (placeholder) |
| Settings | Settings | Settings modal (placeholder) |
| Log Out | LogOut | Calls onLogout() |

### Guest vs Authenticated Display

```typescript
if (user.isGuest) {
  // Show: "Guest User", "Explore Mode", Create Account button
} else {
  // Show: user.name, user.email, subscription status
}
```

### Future Requirements
- [ ] Profile photo upload
- [ ] Edit profile
- [ ] Progress statistics
- [ ] Achievement badges
- [ ] Notification preferences (real)
- [ ] Account deletion

---

## 9. Subscription

### Component: `Subscription.tsx`

**Status:** UI Complete, No Payment Integration

### Plans

| Plan | Price | Billing | Features |
|------|-------|---------|----------|
| Monthly | $12.99/mo | Monthly | Full access |
| Yearly | $97/yr | Annually | Full access, 38% savings |

### UI Elements

**Hero Section:**
- Title: "Unlock Your Spiritual Journey"
- Subtitle: "Access all prayers, lessons, and more"

**Plan Cards:**
```
┌─────────────────┐  ┌─────────────────┐
│    Monthly      │  │    Yearly       │
│                 │  │  [BEST VALUE]   │
│   $12.99/mo     │  │    $97/yr       │
│                 │  │   Save 38%      │
│  [Select Plan]  │  │  [Select Plan]  │
└─────────────────┘  └─────────────────┘
```

**Feature Checklist:**
- Unlimited prayers
- All video courses
- Bible lessons & trivia
- Daily verse
- Testimonies
- Ad-free experience

**7-Day Free Trial:**
- Start trial with any plan
- Full access during trial
- Cancel anytime

### Future Requirements
- [ ] Stripe integration
- [ ] Payment processing
- [ ] Trial period tracking
- [ ] Subscription management
- [ ] Invoice history
- [ ] Cancellation flow

---

## 10. Commentaries

### Component: `Commentaries.tsx`

**Status:** Placeholder

### Current State
- "Coming Soon" message
- Back button to home
- Planned for future release

### Planned Features
- Bible commentaries by book
- Scholarly insights
- Historical context
- Cross-references
- Study notes

---

## Shared UI Components

### Button (`components/ui/Button.tsx`)

**Variants:**
| Variant | Style |
|---------|-------|
| primary | White bg, black text |
| secondary | Gray-800 bg, white text |
| outline | Transparent bg, white border |
| ghost | Transparent bg, no border |

**Props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}
```

---

## Feature Dependency Map

```
App.tsx
├── isLoading → Splash Screen
├── !user → Auth.tsx
├── user.subscriptionStatus === 'none' → Subscription.tsx
└── authenticated → Layout.tsx
    ├── Home.tsx
    │   ├── → VideoLibrary.tsx
    │   ├── → Prayers.tsx
    │   ├── → BibleTrivia.tsx
    │   ├── → Lessons.tsx
    │   ├── → Testimonies.tsx
    │   └── → Commentaries.tsx
    ├── Prayers.tsx
    ├── VideoLibrary.tsx
    └── Profile.tsx
```

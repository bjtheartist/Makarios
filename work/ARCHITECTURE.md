# MAKARIOS - Technical Architecture

> Deep dive into the technical implementation of the Makarios spiritual growth app.

---

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌──────────┐  ┌──────────┐  ┌─────────────┐  │
│  │  Vite   │  │  React   │  │Tailwind  │  │   Lucide    │  │
│  │ (Build) │  │  19.2.3  │  │   CDN    │  │   Icons     │  │
│  └────┬────┘  └────┬─────┘  └────┬─────┘  └──────┬──────┘  │
│       │            │             │               │          │
│       └────────────┴─────────────┴───────────────┘          │
│                            │                                 │
│                    ┌───────┴───────┐                        │
│                    │    App.tsx    │                        │
│                    │  (Root State) │                        │
│                    └───────┬───────┘                        │
│                            │                                 │
│      ┌─────────────────────┼─────────────────────┐          │
│      │                     │                     │          │
│  ┌───┴───┐            ┌────┴────┐          ┌────┴────┐     │
│  │ Auth  │            │  Views  │          │ Layout  │     │
│  └───────┘            └─────────┘          └─────────┘     │
│                            │                                 │
│    ┌───────┬───────┬───────┼───────┬───────┬───────┐       │
│    │       │       │       │       │       │       │       │
│  Home   Videos  Prayers  Trivia  Lessons Tests Profile    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                     STATIC DATA LAYER                        │
│                      (constants.ts)                          │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│  │ Prayers  │  Videos  │  Trivia  │ Lessons  │  Testi-  │  │
│  │   (20)   │   (3)    │   (4)    │   (3)    │  monies  │  │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘  │
└─────────────────────────────────────────────────────────────┘

                    ┌─────────────────┐
                    │   FUTURE API    │
                    │   (Not Built)   │
                    └─────────────────┘
```

---

## Directory Structure

```
Makarios/
├── index.html              # Entry HTML with CDN links
├── index.tsx               # React DOM render
├── App.tsx                 # Root component & state
├── types.ts                # TypeScript interfaces
├── constants.ts            # All static content
├── vite.config.ts          # Build configuration
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
├── metadata.json           # Project info
├── README.md               # Setup guide
│
├── components/             # React components
│   ├── Auth.tsx           # Authentication form
│   ├── Layout.tsx         # Navigation wrapper
│   ├── Home.tsx           # Dashboard
│   ├── VideoLibrary.tsx   # Video browser
│   ├── Prayers.tsx        # Prayer guides
│   ├── BibleTrivia.tsx    # Quiz game
│   ├── Lessons.tsx        # Bible study
│   ├── Testimonies.tsx    # User stories
│   ├── Profile.tsx        # User profile
│   ├── Subscription.tsx   # Paywall
│   ├── Commentaries.tsx   # Coming soon
│   └── ui/
│       └── Button.tsx     # Base button
│
└── work/                   # Documentation
    ├── PROJECT_BRIEF.md
    ├── ARCHITECTURE.md
    ├── FEATURES.md
    ├── ROADMAP.md
    ├── CONTENT_INVENTORY.md
    └── GAPS.md
```

---

## Build Configuration

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY)
  }
});
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### package.json Dependencies
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.562.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.4.1",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

---

## Component Architecture

### App.tsx (Root)

**Responsibilities:**
- Global state management (user, view, loading)
- Authentication flow orchestration
- View routing
- Splash screen control

**State:**
```typescript
const [user, setUser] = useState<User | null>(null);
const [currentView, setCurrentView] = useState<ViewState>('home');
const [isLoading, setIsLoading] = useState(true);
```

**Flow Logic:**
```
1. Mount → Show splash (2500ms)
2. Check user → null → Show Auth
3. User exists → Check subscription
4. Sub = 'none' → Show Subscription
5. Sub = 'trial'/'active' → Show Layout with view
```

### Layout.tsx (Navigation)

**Props:**
```typescript
interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}
```

**Navigation Items:**
- Home (Home icon)
- Prayers (Heart icon)
- Videos (Play icon)
- Profile (User icon)

### Auth.tsx

**State:**
```typescript
const [isLogin, setIsLogin] = useState(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
```

**Actions:**
- Email/password login (simulated 1500ms)
- Email/password signup (simulated 1500ms)
- Guest login (immediate, active subscription)

### Feature Components

Each feature component follows a consistent pattern:

```typescript
// Pattern for Prayers.tsx, Trivia.tsx, etc.
const [selectedItem, setSelectedItem] = useState<Item | null>(null);
const [activeDetail, setActiveDetail] = useState<Detail | null>(null);

// Three-level navigation:
// 1. List view (categories/books)
// 2. Selection view (items in category)
// 3. Detail view (full content)
```

---

## Data Architecture

### Type Definitions (types.ts)

```typescript
// User & Auth
export interface User {
  id: string;
  email: string;
  name: string;
  subscriptionStatus: 'none' | 'trial' | 'active';
  isGuest?: boolean;
}

// Content Types
export interface Prayer {
  id: string;
  categoryId: string;
  title: string;
  scripture: string;
  scriptureReference: string;
  content: string;
}

export interface PrayerCategory {
  id: string;
  title: string;
  icon: string; // Lucide icon name
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

export interface Lesson {
  id: string;
  title: string;
  scriptureReference: string;
  content: string;
  quiz: QuizQuestion[];
}

export interface TriviaQuestion {
  id: string;
  bookId: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

// Navigation
export type ViewState = 'home' | 'videos' | 'prayers' | 'profile' | 'trivia' | 'lessons' | 'testimonies' | 'commentaries';
```

### Static Data (constants.ts)

All content is exported as typed constants:

```typescript
export const DAILY_VERSE: DailyVerse = { ... };
export const VIDEO_COURSES: VideoCourse[] = [ ... ];
export const TESTIMONIES: Testimony[] = [ ... ];
export const PRAYER_CATEGORIES: PrayerCategory[] = [ ... ];
export const PRAYERS: Prayer[] = [ ... ];
export const TRIVIA_BOOKS: TriviaBook[] = [ ... ];
export const TRIVIA_QUESTIONS: TriviaQuestion[] = [ ... ];
export const LESSONS: Lesson[] = [ ... ];
```

**Content Counts:**
- Daily Verse: 1
- Video Courses: 3
- Testimonies: 5
- Prayer Categories: 6
- Prayers: 20
- Trivia Books: 6
- Trivia Questions: 4
- Lessons: 3

---

## Styling System

### Tailwind CDN Configuration (index.html)

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          onyx: '#050505',
          charcoal: '#1A1A1A'
        },
        fontFamily: {
          serif: ['Playfair Display', 'serif'],
          sans: ['Inter', 'sans-serif']
        }
      }
    }
  };
</script>
```

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Onyx | #050505 | Primary background |
| Charcoal | #1A1A1A | Card backgrounds |
| White | #FFFFFF | Primary text |
| Gray-400 | - | Secondary text |
| Gray-800 | - | Borders, subtle lines |
| Gray-900 | - | Darker borders |
| Green-500 | - | Success, correct answers |
| Red-500 | - | Errors, wrong answers |

### Typography Scale

```css
/* Headings */
.text-4xl font-serif font-light   /* Hero titles */
.text-2xl font-serif font-light   /* Section titles */
.text-xl font-semibold            /* Card titles */
.text-lg font-medium              /* Subtitles */

/* Body */
.text-sm text-gray-400            /* Body text */
.text-xs uppercase tracking-wide  /* Labels */
```

### Component Patterns

```css
/* Cards */
.bg-charcoal rounded-3xl p-6 border border-gray-800

/* Buttons (Primary) */
.bg-white text-black rounded-full px-8 py-3

/* Buttons (Secondary) */
.bg-gray-800 text-white rounded-full px-6 py-2

/* Navigation */
.fixed bottom-0 backdrop-blur-lg bg-black/80 border-t border-gray-800
```

---

## Authentication Flow

### Current Implementation (Simulated)

```typescript
// Login simulation
const handleLogin = async () => {
  setLoading(true);
  await new Promise(r => setTimeout(r, 1500)); // Fake API call
  onLogin({
    id: '1',
    email: email,
    name: email.split('@')[0],
    subscriptionStatus: 'none'
  });
};

// Guest login
const handleGuestLogin = () => {
  onLogin({
    id: 'guest',
    email: 'guest@makarios.app',
    name: 'Guest',
    subscriptionStatus: 'active',
    isGuest: true
  });
};
```

### Future Implementation (Backend Required)

```typescript
// Real authentication with Supabase/Convex
const handleLogin = async () => {
  const { user, error } = await auth.signIn({ email, password });
  if (error) throw error;

  const subscription = await db.getSubscription(user.id);
  onLogin({ ...user, subscriptionStatus: subscription.status });
};
```

---

## Navigation System

### View States

```typescript
type ViewState =
  | 'home'         // Dashboard
  | 'videos'       // Video library
  | 'prayers'      // Prayer guides
  | 'profile'      // User profile
  | 'trivia'       // Bible trivia
  | 'lessons'      // Bible lessons
  | 'testimonies'  // User testimonies
  | 'commentaries' // Coming soon
```

### Navigation Hierarchy

```
Bottom Nav (Layout.tsx)
├── Home → (navigate to features via buttons)
│   ├── Videos
│   ├── Prayers
│   ├── Trivia
│   ├── Lessons
│   ├── Testimonies
│   └── Commentaries
├── Prayers → (direct access)
├── Videos → (direct access)
└── Profile → (settings, logout)
```

### Nested Navigation

Each feature has internal navigation handled by local state:

```typescript
// Prayers example
const [selectedCategory, setSelectedCategory] = useState(null);
const [activePrayer, setActivePrayer] = useState(null);

// Render logic
if (activePrayer) return <PrayerDetail />;
if (selectedCategory) return <PrayerList />;
return <CategoryGrid />;
```

---

## Future Architecture (Backend)

### Recommended Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Database | Convex / Supabase | User data, progress, content |
| Auth | Convex Auth / Supabase Auth | Authentication |
| Payments | Stripe | Subscriptions |
| Storage | Convex / S3 | Video hosting |
| Edge Functions | Convex / Supabase | Business logic |

### Database Schema (Proposed)

```typescript
// Users table
users: {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Subscriptions table
subscriptions: {
  id: string;
  userId: string;
  status: 'none' | 'trial' | 'active' | 'cancelled';
  plan: 'monthly' | 'yearly';
  trialEndsAt: Date;
  currentPeriodEnd: Date;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
}

// Progress tracking
userProgress: {
  userId: string;
  lessonsCompleted: string[];
  triviaScores: { bookId: string; score: number }[];
  prayersFavorited: string[];
  lastActiveAt: Date;
}

// Content (if CMS needed)
content: {
  type: 'prayer' | 'lesson' | 'video' | 'testimony';
  data: JSON;
  publishedAt: Date;
}
```

---

## Performance Considerations

### Current Optimizations
- Static content (no API calls)
- Tailwind CDN (no build overhead)
- Minimal dependencies
- Code splitting via Vite

### Future Optimizations
- Lazy load feature components
- Image optimization
- Video streaming (HLS)
- Service worker for offline
- Database query caching

---

## Security Notes

### Current State
- No sensitive data handling
- No real auth tokens
- All content public/static

### Future Requirements
- HTTPS only
- Secure auth tokens (HttpOnly cookies)
- Input validation
- Rate limiting
- Content security policy
- Stripe webhook verification

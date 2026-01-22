# MAKARIOS - Development Roadmap

> Strategic plan for evolving Makarios from prototype to production.

---

## Current State Assessment

### What's Done
- Complete UI/UX for all core features
- Static content library (prayers, lessons, trivia, videos, testimonies)
- Client-side navigation and routing
- Subscription paywall UI
- Guest mode for exploration
- Dark, premium visual design

### What's Missing
- Backend infrastructure
- Real authentication
- Database persistence
- Payment processing
- Video hosting
- Push notifications
- Commentaries feature

---

## Development Phases

```
Phase 1: Foundation     Phase 2: Monetization     Phase 3: Content     Phase 4: Launch
   (2-3 weeks)              (1-2 weeks)            (2-3 weeks)         (1-2 weeks)
       ↓                        ↓                      ↓                   ↓
   Backend +              Stripe +               CMS + Video +        QA + Deploy +
   Auth + DB              Subscriptions          Notifications         Marketing
```

---

## Phase 1: Foundation

**Goal:** Establish core backend infrastructure

**Duration:** 2-3 weeks

### 1.1 Backend Setup

**Option A: Convex (Recommended)**
```
Pros:
- Real-time by default
- TypeScript-first
- Built-in auth
- Edge functions
- Easy to set up

Cons:
- Newer platform
- Vendor lock-in
```

**Option B: Supabase**
```
Pros:
- PostgreSQL (familiar)
- Row Level Security
- Auth included
- Larger community

Cons:
- More configuration
- Separate edge functions
```

**Tasks:**
- [ ] Create Convex/Supabase project
- [ ] Configure environment variables
- [ ] Set up development workflow
- [ ] Implement client connection

### 1.2 Authentication

**Tasks:**
- [ ] Replace simulated auth with real backend
- [ ] Implement email/password login
- [ ] Implement email/password signup
- [ ] Add email verification
- [ ] Add password reset flow
- [ ] Implement session management
- [ ] Add OAuth providers (optional)
  - [ ] Google
  - [ ] Apple (required for iOS)

**Convex Example:**
```typescript
// convex/auth.ts
import { ConvexCredentials } from "@convex-dev/auth/providers/ConvexCredentials";

export const { auth, signIn, signOut } = convexAuth({
  providers: [
    ConvexCredentials({
      authorize: async (credentials, ctx) => {
        // Verify email/password
        return { userId: user._id };
      }
    })
  ]
});
```

### 1.3 Database Schema

**Tables Required:**

```typescript
// Users
users: {
  _id: Id<"users">;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: number;
  updatedAt: number;
}

// Subscriptions
subscriptions: {
  _id: Id<"subscriptions">;
  userId: Id<"users">;
  status: "none" | "trial" | "active" | "cancelled" | "past_due";
  plan: "monthly" | "yearly";
  trialStartedAt?: number;
  trialEndsAt?: number;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
}

// User Progress
progress: {
  _id: Id<"progress">;
  userId: Id<"users">;
  lessonsCompleted: string[];
  triviaScores: { bookId: string; score: number; completedAt: number }[];
  prayersFavorited: string[];
  lastActiveAt: number;
}

// Favorites
favorites: {
  _id: Id<"favorites">;
  userId: Id<"users">;
  type: "prayer" | "video" | "lesson" | "testimony";
  itemId: string;
  createdAt: number;
}
```

### 1.4 Data Migration

**Tasks:**
- [ ] Move static content to database (optional for MVP)
- [ ] Create seed scripts for initial data
- [ ] Test data integrity
- [ ] Implement content queries

**Note:** For MVP, static content can remain in `constants.ts`. Database needed primarily for user data and progress.

---

## Phase 2: Monetization

**Goal:** Implement payment processing and subscription management

**Duration:** 1-2 weeks

### 2.1 Stripe Integration

**Tasks:**
- [ ] Create Stripe account
- [ ] Configure products and prices
  - [ ] Monthly: $12.99/mo (price_xxx)
  - [ ] Yearly: $97/yr (price_yyy)
- [ ] Set up Stripe webhooks
- [ ] Implement checkout flow
- [ ] Handle subscription events

**Products to Create in Stripe:**
```
Product: Makarios Premium
├── Price: Monthly ($12.99/month)
│   └── Trial: 7 days free
└── Price: Yearly ($97/year)
    └── Trial: 7 days free
```

### 2.2 Checkout Flow

```typescript
// Create checkout session
const checkout = async (priceId: string) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      trial_period_days: 7
    },
    success_url: `${SITE_URL}/success`,
    cancel_url: `${SITE_URL}/subscription`
  });

  return session.url;
};
```

### 2.3 Webhook Handlers

**Events to Handle:**
| Event | Action |
|-------|--------|
| `checkout.session.completed` | Create subscription record |
| `customer.subscription.updated` | Update subscription status |
| `customer.subscription.deleted` | Mark as cancelled |
| `invoice.payment_failed` | Mark as past_due |
| `invoice.payment_succeeded` | Update period dates |

### 2.4 Subscription UI Updates

**Tasks:**
- [ ] Connect Subscription.tsx to Stripe checkout
- [ ] Show current subscription status in Profile
- [ ] Add subscription management link (Stripe Customer Portal)
- [ ] Handle trial expiration gracefully
- [ ] Add cancel subscription flow

---

## Phase 3: Content & Features

**Goal:** Enhance content delivery and add engagement features

**Duration:** 2-3 weeks

### 3.1 Video Hosting

**Option A: YouTube Unlisted**
```
Pros: Free, reliable, mobile-optimized
Cons: YouTube branding, ads possible
```

**Option B: Vimeo Pro**
```
Pros: No ads, better player customization
Cons: Monthly cost (~$20/mo)
```

**Option C: Custom (Cloudflare Stream)**
```
Pros: Full control, pay-per-use
Cons: More setup, bandwidth costs
```

**Tasks:**
- [ ] Choose hosting provider
- [ ] Upload video content
- [ ] Implement video player component
- [ ] Add progress tracking
- [ ] Implement resume playback

### 3.2 Push Notifications

**Tasks:**
- [ ] Set up Firebase Cloud Messaging (or OneSignal)
- [ ] Implement notification permissions request
- [ ] Create notification types:
  - [ ] Daily verse reminder (morning)
  - [ ] Prayer reminder
  - [ ] New content alerts
- [ ] Add notification preferences in Profile
- [ ] Implement server-side notification triggers

### 3.3 Content Management System

**Option A: Build into Backend**
```
- Admin dashboard for content CRUD
- Direct database editing
- Markdown support for prayers/lessons
```

**Option B: Headless CMS (Sanity)**
```
- Visual editing interface
- Content versioning
- Rich text support
- API access
```

**Tasks:**
- [ ] Decide on CMS approach
- [ ] Migrate content from constants.ts
- [ ] Create admin interface (if custom)
- [ ] Implement content fetching
- [ ] Add content caching

### 3.4 Commentaries Feature

**Tasks:**
- [ ] Design commentaries data structure
- [ ] Source/create commentary content
- [ ] Build commentaries UI
- [ ] Implement book/chapter navigation
- [ ] Add cross-references

### 3.5 Progress & Achievements

**Tasks:**
- [ ] Track lesson completions
- [ ] Track trivia scores and streaks
- [ ] Track prayer engagement
- [ ] Design achievement system
- [ ] Create achievement badges
- [ ] Add progress dashboard to Profile

---

## Phase 4: Launch

**Goal:** Polish, test, and deploy to production

**Duration:** 1-2 weeks

### 4.1 Quality Assurance

**Tasks:**
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit (a11y)
- [ ] Security review
- [ ] Load testing

### 4.2 Production Deployment

**Hosting Options:**
| Platform | Cost | Notes |
|----------|------|-------|
| Vercel | Free tier | Best for Next.js |
| Netlify | Free tier | Good for Vite |
| Railway | ~$5/mo | Full stack support |

**Tasks:**
- [ ] Set up production environment
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Configure environment variables
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Configure analytics (PostHog, Mixpanel)

### 4.3 App Store Preparation (Optional)

**If packaging as PWA or native app:**
- [ ] Generate app icons (all sizes)
- [ ] Create splash screens
- [ ] Write app store descriptions
- [ ] Prepare screenshots
- [ ] Submit for review

### 4.4 Marketing Launch

**Tasks:**
- [ ] Create landing page
- [ ] Set up email capture
- [ ] Prepare social media assets
- [ ] Write launch announcement
- [ ] Plan soft launch (beta users)
- [ ] Plan public launch

---

## Future Enhancements (Post-Launch)

### Community Features
- [ ] User-submitted testimonies
- [ ] Prayer requests (anonymous option)
- [ ] Community prayer wall
- [ ] Discussion forums

### Personalization
- [ ] AI-powered daily recommendations
- [ ] Personalized reading plans
- [ ] Custom prayer lists
- [ ] Mood-based content suggestions

### Advanced Learning
- [ ] Full Bible curriculum
- [ ] Certification programs
- [ ] Live classes/webinars
- [ ] Mentor matching

### Internationalization
- [ ] Multi-language support
- [ ] Regional content
- [ ] RTL language support

### Offline Support
- [ ] Service worker for caching
- [ ] Offline prayer access
- [ ] Sync when online

---

## Resource Requirements

### Development
- 1 Full-stack developer (primary)
- 1 Designer (UI/UX refinements)
- Content writer (prayers, lessons)

### Infrastructure Costs (Monthly)
| Service | Estimated Cost |
|---------|----------------|
| Convex/Supabase | $0-25 |
| Vercel hosting | $0-20 |
| Stripe fees | 2.9% + $0.30/txn |
| Video hosting | $0-50 |
| Push notifications | $0-15 |
| **Total** | **$0-110/mo** |

### Timeline Summary

| Phase | Duration | Milestone |
|-------|----------|-----------|
| Phase 1 | Weeks 1-3 | Backend + Auth + DB |
| Phase 2 | Weeks 4-5 | Payments working |
| Phase 3 | Weeks 6-8 | Full features |
| Phase 4 | Weeks 9-10 | Production launch |

**Total: ~10 weeks to full production launch**

---

## Success Metrics

### Launch Goals
- 100 users in first month
- 10% trial-to-paid conversion
- 4.5+ star app rating
- < 3% churn rate

### Engagement Goals
- 5+ sessions per user per week
- 3+ prayers read per session
- 1+ lesson completed per week
- Daily active users: 30%+ of base

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Low conversion | Medium | High | A/B test pricing, improve onboarding |
| Content fatigue | Medium | Medium | Regular content updates, UGC |
| Technical issues | Low | High | Monitoring, error tracking |
| Competition | Low | Medium | Focus on unique value prop |
| Payment failures | Low | High | Retry logic, dunning emails |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-01-22 | Use Vite + React | Fast builds, modern DX |
| 2026-01-22 | Static content first | Faster prototype, iterate on UX |
| TBD | Backend choice | Convex vs Supabase evaluation |
| TBD | Video hosting | Cost vs quality tradeoff |

---

*This roadmap is a living document. Update as decisions are made and priorities shift.*

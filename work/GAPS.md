# MAKARIOS - Gap Analysis

> What's missing between the current prototype and a production-ready app.

---

## Gap Summary

| Category | Gap | Priority | Effort | Blocker? |
|----------|-----|----------|--------|----------|
| **Infrastructure** | Backend API | Critical | High | Yes |
| **Infrastructure** | Database | Critical | Medium | Yes |
| **Infrastructure** | Authentication | Critical | Medium | Yes |
| **Monetization** | Payment Processing | Critical | Medium | Yes |
| **Content** | Video Hosting | High | Medium | No |
| **Content** | Trivia Questions | Medium | Low | No |
| **Content** | Commentaries | Low | Medium | No |
| **Engagement** | Push Notifications | Medium | Low | No |
| **Engagement** | Progress Tracking | Medium | Medium | No |
| **Engagement** | Favorites/Bookmarks | Medium | Low | No |
| **Operations** | CMS | Low | Medium | No |
| **Operations** | Analytics | Medium | Low | No |
| **Operations** | Monitoring | Medium | Low | No |

---

## Critical Gaps (Blockers)

### 1. Backend API

**Current State:** All data is static, stored in `constants.ts`. No server communication.

**What's Missing:**
- Server-side logic
- Data persistence
- API endpoints
- Environment configuration

**Impact:**
- Cannot store user data
- Cannot track progress
- Cannot manage subscriptions
- Cannot update content without code deploy

**Solution Options:**
| Option | Pros | Cons | Cost |
|--------|------|------|------|
| Convex | Real-time, TypeScript, easy setup | Newer platform | Free-$25/mo |
| Supabase | PostgreSQL, mature, auth included | More config | Free-$25/mo |
| Firebase | Google backed, good mobile support | NoSQL complexity | Free-$25/mo |
| Custom Node.js | Full control | More maintenance | Hosting costs |

**Recommended:** Convex (fastest to production with similar React/TypeScript stack)

---

### 2. Database

**Current State:** No persistence. User reloads = lost state.

**What's Missing:**
- User table
- Subscription table
- Progress tracking table
- Favorites table
- Content tables (optional)

**Required Schema:**
```typescript
// Minimum viable schema
users: { id, email, name, createdAt }
subscriptions: { userId, status, plan, periodEnd, stripeId }
progress: { userId, lessonsCompleted, triviaScores, lastActive }
favorites: { userId, type, itemId, createdAt }
```

**Impact:**
- No user accounts persist
- No subscription management
- No progress saved
- No personalization possible

---

### 3. Real Authentication

**Current State:** Simulated with setTimeout. No actual verification.

**What's Missing:**
- Email/password verification
- Secure session management
- Password hashing
- Email verification flow
- Password reset flow
- OAuth providers

**Security Risks of Current Approach:**
- Anyone can "log in" with any email
- No password validation
- Sessions not persisted
- No token management

**Required Implementation:**
```typescript
// Real auth flow
signUp(email, password) → hash password → store user → send verification
signIn(email, password) → verify credentials → create session → return token
signOut() → invalidate session → clear client state
```

---

### 4. Payment Processing

**Current State:** Subscription UI exists but clicking "Subscribe" does nothing.

**What's Missing:**
- Stripe account setup
- Product/price configuration
- Checkout flow
- Webhook handlers
- Subscription status sync
- Trial period management
- Cancellation flow

**Revenue Impact:**
- Cannot collect payments
- Cannot monetize the app
- Cannot offer trials
- Cannot manage billing

**Required Stripe Integration:**
```typescript
// Checkout flow
createCheckoutSession(userId, priceId) → Stripe session → redirect
handleWebhook(event) → update subscription status
getSubscriptionStatus(userId) → check Stripe → return status
```

---

## High Priority Gaps

### 5. Video Hosting

**Current State:** Mock video player with placeholder thumbnails.

**What's Missing:**
- Actual video content (3 courses)
- Video hosting platform
- Streaming player
- Progress tracking
- Bandwidth management

**Options:**
| Platform | Cost | Quality | Control |
|----------|------|---------|---------|
| YouTube Unlisted | Free | Good | Low |
| Vimeo Pro | $20/mo | Great | Medium |
| Cloudflare Stream | Pay-per-use | Great | High |
| Mux | Pay-per-use | Great | High |

**Content Needed:**
1. "What is Justification?" (12:30 planned)
2. "The Power of Prayer" (18:45 planned)
3. "Walking in the Spirit" (15:10 planned)

---

## Medium Priority Gaps

### 6. Push Notifications

**Current State:** Not implemented.

**What's Missing:**
- Push notification service (FCM/OneSignal)
- Permission request flow
- Notification types (daily verse, reminders)
- User preferences
- Server-side triggers

**User Impact:**
- No daily verse reminders
- No engagement nudges
- Lower retention

---

### 7. Progress Tracking

**Current State:** Progress resets on page reload.

**What's Missing:**
- Lesson completion tracking
- Trivia scores and history
- Prayer engagement metrics
- Streak tracking
- Achievement system

**User Impact:**
- No sense of accomplishment
- No motivation to continue
- No personalized experience

---

### 8. Favorites/Bookmarks

**Current State:** Share/Favorite buttons exist but do nothing.

**What's Missing:**
- Favorite prayers list
- Bookmarked lessons
- Saved testimonies
- Quick access from profile

**User Impact:**
- Cannot save preferred content
- Must browse each time
- Poor personalization

---

### 9. Analytics

**Current State:** No tracking.

**What's Missing:**
- Page view tracking
- Feature usage metrics
- User journey analysis
- Conversion tracking
- Error tracking

**Business Impact:**
- No insight into user behavior
- Cannot optimize features
- Cannot measure success
- No data for decisions

**Recommended Tools:**
- PostHog (product analytics)
- Mixpanel (event tracking)
- Sentry (error monitoring)

---

## Low Priority Gaps

### 10. Trivia Question Expansion

**Current State:** Only 4 questions across 2 books.

**What's Missing:**
- Questions for Luke, John, Acts, Romans
- More questions per book (20+ each)
- Difficulty levels
- Categories within books

**Content Needed:** 116+ additional questions

---

### 11. Commentaries Feature

**Current State:** Placeholder "Coming Soon" page.

**What's Missing:**
- Commentary content
- Book/chapter navigation
- Cross-references
- Study notes
- Historical context

---

### 12. CMS for Content

**Current State:** All content hardcoded in `constants.ts`.

**What's Missing:**
- Admin interface for content editing
- Content versioning
- Rich text support
- Image management
- Scheduled publishing

**Impact:**
- Content changes require code deploy
- Non-developers cannot update
- No content workflow

---

## Gap Resolution Timeline

### Week 1-2: Critical Infrastructure
- [ ] Set up Convex/Supabase
- [ ] Implement real authentication
- [ ] Create database schema
- [ ] Migrate user flow

### Week 3-4: Monetization
- [ ] Set up Stripe
- [ ] Implement checkout flow
- [ ] Handle webhooks
- [ ] Sync subscription status

### Week 5-6: Content & Engagement
- [ ] Set up video hosting
- [ ] Implement push notifications
- [ ] Add progress tracking
- [ ] Implement favorites

### Week 7-8: Polish & Launch
- [ ] Add analytics
- [ ] Expand trivia content
- [ ] QA and testing
- [ ] Production deployment

---

## Cost to Close All Gaps

### Development Time
| Gap | Hours | Cost (@$100/hr) |
|-----|-------|-----------------|
| Backend + DB | 20-30 | $2,000-3,000 |
| Authentication | 10-15 | $1,000-1,500 |
| Payments | 15-20 | $1,500-2,000 |
| Video setup | 5-10 | $500-1,000 |
| Notifications | 5-10 | $500-1,000 |
| Progress/Favorites | 10-15 | $1,000-1,500 |
| Analytics | 5-8 | $500-800 |
| **Total Dev** | **70-108** | **$7,000-10,800** |

### Content Creation
| Content | Hours | Cost |
|---------|-------|------|
| Video production (3) | 40-60 | $4,000-6,000 |
| Trivia questions (116) | 10-15 | $1,000-1,500 |
| Commentaries | 20-40 | $2,000-4,000 |
| **Total Content** | **70-115** | **$7,000-11,500** |

### Monthly Infrastructure
| Service | Monthly Cost |
|---------|--------------|
| Backend (Convex/Supabase) | $0-25 |
| Hosting (Vercel) | $0-20 |
| Video hosting | $20-50 |
| Push notifications | $0-15 |
| Analytics | $0-25 |
| **Total Monthly** | **$20-135** |

---

## Risk Assessment

| Gap | Risk if Unresolved |
|-----|-------------------|
| No Backend | App cannot function in production |
| No Auth | Security vulnerability, no users |
| No Payments | Cannot generate revenue |
| No Video | Core feature missing |
| No Notifications | Lower engagement/retention |
| No Analytics | Flying blind on decisions |

---

## Recommended Priority Order

1. **Backend + Database** (foundation for everything)
2. **Authentication** (required for users)
3. **Payment Processing** (required for revenue)
4. **Video Hosting** (core feature)
5. **Progress Tracking** (engagement)
6. **Push Notifications** (retention)
7. **Analytics** (insights)
8. **Content Expansion** (ongoing)

---

*This gap analysis should be reviewed and updated as development progresses.*

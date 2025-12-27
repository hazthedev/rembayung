# Product Requirements Document (PRD)
# Rembayung Restaurant Website

**Version:** 1.0  
**Last Updated:** December 11, 2025  
**Document Owner:** Product Team  
**Status:** Draft

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Product Overview](#product-overview)
3. [Business Objectives](#business-objectives)
4. [Target Audience](#target-audience)
5. [User Personas](#user-personas)
6. [Core Features & Requirements](#core-features--requirements)
7. [Technical Requirements](#technical-requirements)
8. [Design Requirements](#design-requirements)
9. [Content Strategy](#content-strategy)
10. [Success Metrics](#success-metrics)
11. [Development Phases](#development-phases)
12. [Budget & Resources](#budget--resources)
13. [Risk Assessment](#risk-assessment)
14. [Appendices](#appendices)

---

## 1. Executive Summary

### 1.1 Project Background
Rembayung is Khairul Aming's first restaurant venture, representing a RM4 million investment in bringing authentic Malay kampung cuisine to Kampung Baru, Kuala Lumpur. The restaurant opens in January 2026 with a reservation-only model, accommodating up to 250 guests.

### 1.2 Purpose
This PRD outlines requirements for developing a comprehensive, conversion-focused website that serves as Rembayung's primary digital touchpoint for reservations, brand storytelling, and customer engagement.

### 1.3 Key Success Factors
- **Seamless reservation system** - Handle high demand with zero friction
- **Brand authenticity** - Reflect Khairul Aming's values and kampung heritage
- **Mobile-first experience** - 62.45% of traffic comes from mobile devices
- **Performance optimization** - Fast load times to prevent bounce rates
- **Scalability** - Support growth from single location to potential expansion

---

## 2. Product Overview

### 2.1 Product Vision
Create Malaysia's most engaging restaurant website that seamlessly converts Khairul Aming's 4+ million social media followers into loyal diners while establishing Rembayung as a must-visit culinary destination.

### 2.2 Product Mission
Deliver an exceptional digital experience that:
- Makes reservations effortless and transparent
- Tells the Rembayung story authentically
- Builds anticipation and excitement
- Provides clear operational information
- Establishes trust through transparency

### 2.3 Core Value Propositions
1. **For Customers:** Easy booking, transparent pricing, authentic kampung experience
2. **For Business:** Reduced operational burden, customer data collection, brand control
3. **For Staff:** Streamlined operations, better capacity management

---

## 3. Business Objectives

### 3.1 Primary Objectives
1. **Maximize Reservation Conversion Rate**
   - Target: 35%+ conversion from visit to reservation attempt
   - Reduce booking abandonment to <15%

2. **Build Strong Brand Presence**
   - Establish Rembayung as distinct from Khairul Aming's product brands
   - Communicate premium positioning while maintaining authenticity

3. **Operational Efficiency**
   - Reduce phone inquiries by 70% through comprehensive FAQs
   - Automate 90%+ of reservation management

4. **Data Collection**
   - Capture customer preferences and dining patterns
   - Build email list for marketing campaigns
   - Track source attribution for marketing ROI

### 3.2 Secondary Objectives
- Drive social media engagement
- Showcase behind-the-scenes content
- Support potential future expansion
- Enable merchandise/product integration

---

## 4. Target Audience

### 4.1 Primary Audiences

#### A. Khairul Aming's Existing Fanbase
- **Size:** 4+ million social media followers
- **Age:** 25-45 years old
- **Income:** Middle to upper-middle class
- **Behavior:** High trust in KA brand, willing to pay premium prices
- **Pain Points:** Getting bookings before sellout, knowing what to expect

#### B. Food Enthusiasts & Tourists
- **Demographics:** Local and international tourists
- **Psychographics:** Seeking authentic Malaysian dining experiences
- **Behavior:** Research extensively before dining, read reviews
- **Pain Points:** Finding authentic restaurants, understanding Malaysian cuisine

#### C. Business & Corporate Groups
- **Demographics:** 30-55 years old, corporate professionals
- **Use Case:** Client dinners, team celebrations
- **Budget:** RM100-200 per person acceptable
- **Pain Points:** Group booking management, private dining options

### 4.2 Secondary Audiences
- Media and influencers
- Local food bloggers
- Culinary tourists
- Celebration seekers (birthdays, anniversaries)

---

## 5. User Personas

### Persona 1: "Sara the Superfan"
**Demographics:**
- Age: 28, Marketing Executive
- Location: Petaling Jaya
- Income: RM5,000/month
- Device: iPhone, heavy Instagram user

**Behaviors:**
- Follows Khairul Aming since 2021
- Has bought every Nyet product
- Watches all "30 Hari 30 Resipi" videos
- Shares food content on social media

**Goals:**
- Be among the first to dine at Rembayung
- Take Instagram-worthy photos
- Support Khairul Aming's new venture

**Pain Points:**
- Worried about not getting a reservation
- Concerned about parking
- Wants to know menu prices upfront

**User Journey:**
1. Sees announcement on Instagram
2. Immediately visits website
3. Checks menu and prices
4. Attempts to make reservation
5. Shares booking confirmation on social media

---

### Persona 2: "David the Tourist"
**Demographics:**
- Age: 42, Australian tourist
- Location: Visiting KL for 1 week
- Budget: RM500/day for dining
- Device: Android smartphone

**Behaviors:**
- Researches destinations extensively
- Reads TripAdvisor and Google reviews
- Books everything in advance
- Values authentic local experiences

**Goals:**
- Experience authentic Malay cuisine
- Find restaurants locals love
- Avoid tourist traps
- Create memorable experiences

**Pain Points:**
- Doesn't know Malaysian food terminology
- Unsure about transportation
- Worried about dietary restrictions
- Needs reliable directions

**User Journey:**
1. Googles "best restaurants in Kuala Lumpur"
2. Finds Rembayung through search/reviews
3. Reads about chef and concept
4. Checks location and transportation
5. Makes reservation
6. Adds to Google Maps for navigation

---

### Persona 3: "Amir the Corporate Host"
**Demographics:**
- Age: 38, Senior Manager
- Location: KLCC area
- Budget: RM2,000+ for team dinner
- Device: Desktop at work, iOS mobile

**Behaviors:**
- Books restaurants for team events quarterly
- Values reliable service
- Needs group booking flexibility
- Expects professional communication

**Goals:**
- Find impressive but authentic venue
- Arrange smooth group dining experience
- Ensure dietary needs accommodated
- Stay within company budget

**Pain Points:**
- Group booking complications
- Last-minute attendee changes
- Payment processing for groups
- Need for private/semi-private space

**User Journey:**
1. Receives recommendation from colleague
2. Visits website during work hours
3. Reviews menu for dietary options
4. Contacts for group booking inquiry
5. Coordinates with team
6. Makes final reservation

---

## 6. Core Features & Requirements

### 6.1 MUST-HAVE Features (P0 - Launch Blockers)

#### 6.1.1 Online Reservation System
**Business Justification:** Core business model is reservation-only; without this, the restaurant cannot operate efficiently.

**Requirements:**
- Real-time availability display by date and time slot
- Party size selection (2-8 guests standard, 8+ requires inquiry)
- Calendar interface showing 60 days forward
- Guest information capture:
  - Full name (required)
  - Phone number with country code (required)
  - Email address (required)
  - Special requests/dietary needs (optional)
  - Occasion tag (optional: Birthday, Anniversary, Business, etc.)
- Confirmation page with booking details
- Automated email confirmation within 60 seconds
- Automated SMS confirmation (if Malaysian phone)
- Booking modification/cancellation up to 24 hours before
- No-show protection through credit card hold (not charged unless no-show)
- Waitlist functionality when fully booked

**Integration Requirements:**
- Must integrate with restaurant management system
- Must sync with Google Calendar for staff
- Must connect to customer CRM for data collection
- API webhooks for third-party integrations

**User Experience:**
- Mobile-first responsive design
- Maximum 4 steps from landing to confirmation
- Progress indicator showing booking steps
- Form validation with helpful error messages
- Auto-detect user location for phone number formatting
- One-tap phone input for mobile users

**Technical Specifications:**
- Load time: <2 seconds on 4G
- 99.9% uptime SLA during business hours
- SSL encryption for all data transmission
- GDPR/PDPA compliant data handling
- Rate limiting to prevent reservation bots
- CAPTCHA for suspicious activity

---

#### 6.1.2 Interactive Digital Menu
**Business Justification:** 77% of diners check restaurant menus before deciding to visit; menu transparency builds trust.

**Requirements:**

**Content:**
- Complete dish listing with:
  - Dish name (Malay and English)
  - Detailed description
  - Ingredients list
  - Allergen warnings (gluten, nuts, seafood, dairy)
  - Spice level indicator
  - Price (clear, no hidden costs)
  - Dietary tags (vegetarian, halal certified, gluten-free)
- Chef's recommendations/signatures
- Seasonal specials section
- Beverage menu (hot, cold, traditional)
- Desserts section

**Visual Elements:**
- Professional food photography (minimum 1200x800px)
- Consistent styling and lighting
- Lifestyle shots showing portions
- Ambient restaurant shots
- Hero image carousel on menu page

**Functionality:**
- Search functionality
- Filter by: dietary preference, price range, course type, spice level
- Sort by: price (low to high, high to low), popularity, chef's recommendation
- Print-friendly version
- Download as PDF option
- Share individual dishes on social media
- Nutritional information toggle (calories, preparation notes)

**Accessibility:**
- Screen reader compatible
- High contrast mode option
- Font size adjustment
- Alternative text for all images

**Update Mechanism:**
- Content Management System (CMS) access for menu updates
- Version control with change history
- Schedule menu changes in advance
- Quick "sold out" toggle for dishes

---

#### 6.1.3 Location & Contact Information
**Business Justification:** Clear location info reduces phone inquiries and improves customer experience. 61% of Google searches have local intent.

**Requirements:**

**Address Display:**
- Full formatted address: "Lot 2791, Jalan Daud, Off Jalan Raja Muda Abdul Aziz, Kampung Baru, 50300 Kuala Lumpur"
- Embedded Google Maps (interactive)
- "Get Directions" button (opens Google Maps/Waze)
- Landmark references ("9 minutes from KLCC")
- Distance indicator from major locations (KLCC, KL Sentral, etc.)

**Transportation Information:**
- Public transport section:
  - Nearest MRT/LRT stations (with walking time)
  - Bus routes that stop nearby
  - Walking directions from stations with photos
- Driving directions:
  - From major highways (AKLEH, DUKE, etc.)
  - Parking situation (honest assessment: "Limited parking, carpooling recommended")
  - Alternative parking locations nearby
- Ride-hailing:
  - Grab/taxi pickup/dropoff points
  - Approximate fare from KLCC

**Contact Methods:**
- Phone number (click-to-call on mobile): +60X-XXXX-XXXX
- Email: reservations@rembayung.com
- WhatsApp Business button
- Instagram/Facebook/TikTok links
- Operating hours clearly displayed:
  - Lunch service: XX:XX AM - XX:XX PM
  - Dinner service: XX:XX PM - XX:XX PM
  - Last seating time
  - Days closed (if any)

**Visual Aids:**
- Street view photo of restaurant exterior
- Recognizable building features
- Photos of entrance
- Short video of approach from main road

---

#### 6.1.4 Brand Story & About Section
**Business Justification:** Khairul Aming's personal brand drives customer interest; storytelling creates emotional connection and justifies premium positioning.

**Requirements:**

**Content Pillars:**

1. **The Vision**
   - Why Rembayung exists
   - Connection to kampung heritage
   - Khairul Aming's journey from engineer to restaurateur
   - The meaning behind "Rembayung" name
   - Restaurant mission and values

2. **The Investment**
   - Transparent discussion of RM4 million investment
   - Why quality costs (RM500K kitchen, 50 employees, AC, etc.)
   - Commitment to sustainable business vs. "mesra-rakyat" pricing
   - Value proposition justification

3. **The Team**
   - Staff size: 50 local employees
   - Hiring philosophy (merit-based, secret employer)
   - Kitchen brigade credentials
   - Service team training approach

4. **The Space**
   - Architecture concept (semi-glass house, warehouse elements)
   - Capacity: 250 seats
   - Design philosophy (elevated kampung aesthetic)
   - Behind-the-scenes construction photos/videos
   - Interactive 360° virtual tour

5. **The Food Philosophy**
   - Authentic kampung recipes
   - Ingredient sourcing (local, quality-focused)
   - No compromise on authenticity
   - Preservation of Malay culinary heritage
   - Innovation within tradition

**Media Elements:**
- Professional photography of Khairul Aming
- Time-lapse construction video
- Staff introduction videos
- Kitchen preparation videos
- Day-in-the-life content

**Tone & Voice:**
- Warm, authentic, transparent
- Educational without being preachy
- Pride in heritage without nationalism
- Confident but humble
- Conversational but professional

---

#### 6.1.5 High-Quality Visual Content
**Business Justification:** 45% of diners specifically look for photos when visiting restaurant websites. Visual quality directly impacts conversion.

**Requirements:**

**Professional Photography:**
- Minimum 50 high-resolution images (3000x2000px)
- Categories:
  - Food dishes (hero shots, detail shots, preparation)
  - Interior ambiance (day and night)
  - Exterior and entrance
  - Dining experience (people enjoying meals)
  - Kitchen and behind-scenes
  - Team and staff portraits
  - Kampung Baru neighborhood

**Photography Standards:**
- Professional photographer with restaurant experience
- Consistent color grading and style
- Natural lighting preference
- Authentic, not overly styled
- Diverse representation of diners
- Optimized for web (WebP format) without quality loss

**Video Content:**
- Homepage hero video (30-45 seconds, autoplay with mute)
- Long-form brand story video (3-5 minutes)
- Virtual restaurant tour (360° or walk-through)
- Food preparation clips
- Chef's table series

**Image Optimization:**
- Lazy loading for below-fold images
- Multiple image sizes for responsive design
- CDN hosting for fast delivery
- Alt text for accessibility and SEO

---

#### 6.1.6 Mobile-First Responsive Design
**Business Justification:** 62.45% of global traffic is mobile. Google uses mobile-first indexing for search rankings.

**Requirements:**

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

**Mobile-Specific Features:**
- Tap-to-call phone numbers
- Tap-to-email addresses
- One-tap WhatsApp messaging
- Simplified navigation (hamburger menu)
- Sticky reservation CTA button
- Bottom navigation bar for key actions
- Swipeable image galleries
- Pinch-to-zoom on maps and menus
- Native date/time pickers for reservations

**Performance Targets:**
- Page load time: <3 seconds on 4G
- Time to Interactive: <5 seconds
- First Contentful Paint: <1.5 seconds
- Lighthouse mobile score: >90

**Touch Optimization:**
- Minimum touch target size: 44x44px
- Adequate spacing between interactive elements
- No hover-dependent interactions
- Large, thumb-friendly buttons
- Pull-to-refresh support

**Testing Requirements:**
- Test on actual devices: iPhone 12+, Samsung Galaxy S21+, various screen sizes
- Cross-browser testing: Safari iOS, Chrome Android
- Network condition testing: 4G, slow 3G
- Accessibility testing with mobile screen readers

---

### 6.2 SHOULD-HAVE Features (P1 - Post-Launch Priority)

#### 6.2.1 Multilingual Support
**Languages:**
- Malay (primary)
- English (secondary)
- Simplified Chinese (tertiary - for tourists)

**Implementation:**
- Language switcher in header
- Auto-detect browser language preference
- Persistent language selection via cookie
- Separate SEO for each language version

---

#### 6.2.2 FAQ Section
**Purpose:** Reduce customer service inquiries by 70%

**Categories:**
- Reservations (cancellation policy, modifications, no-show policy)
- Dining Experience (dress code, duration, seating preferences)
- Menu (dietary restrictions, allergens, portion sizes)
- Payment (accepted methods, deposits, gratuity)
- Location (parking, transportation, accessibility)
- Special Occasions (private dining, group bookings, celebrations)
- Policies (children, photography, reservation timeframes)

**Format:**
- Accordion-style expandable answers
- Search functionality
- "Was this helpful?" feedback buttons
- Link to contact form for unanswered questions
- Most popular questions highlighted

---

#### 6.2.3 Customer Reviews & Social Proof
**Integration:**
- Embedded Google Reviews (auto-updating)
- Instagram feed with customer posts (tagged #Rembayung)
- Media mentions and press coverage
- Awards and recognition
- Celebrity/influencer testimonials
- Review summary statistics (average rating, total reviews)

**Features:**
- Filter reviews by rating
- Sort by most recent/most helpful
- "Verified diner" badges
- Response from restaurant to select reviews
- Photo reviews highlighted

---

#### 6.2.4 Email Newsletter Signup
**Purpose:** Build owned marketing channel

**Placement:**
- Footer on all pages
- Pop-up after 30 seconds (exit-intent)
- Post-reservation confirmation page

**Incentive:**
- "Be the first to know about new menu items and special events"
- Early access to special reservations
- Seasonal menu previews

**Data Collection:**
- Email (required)
- Name (required)
- Dietary preferences (optional)
- Birthday month (optional for special offers)

**Integration:**
- Mailchimp/SendGrid for email marketing
- Segmentation by customer type
- Automated welcome sequence

---

#### 6.2.5 Blog/News Section
**Purpose:** SEO, storytelling, engagement

**Content Types:**
- Menu launches and seasonal dishes
- Behind-the-scenes kitchen stories
- Staff spotlights
- Malaysian food culture education
- Kampung recipe origins
- Khairul Aming's reflections
- Restaurant milestones and updates
- Event announcements

**Publishing Frequency:**
- Minimum 2 posts per month
- Pre-scheduled content calendar

**SEO Optimization:**
- Keyword research for Malaysian food terms
- Long-tail keywords targeting
- Internal linking strategy
- Social sharing buttons

---

#### 6.2.6 Events & Private Dining
**Purpose:** Capture high-value group bookings

**Information Included:**
- Private dining room details (if available)
- Semi-private areas
- Capacity for groups
- Set menu options for groups
- Pricing structure
- Booking process for events
- Past event photo gallery
- Corporate event packages
- Celebration packages (birthdays, anniversaries)

**Lead Capture:**
- Dedicated event inquiry form
- Phone consultation booking
- Event planning guide download

---

#### 6.2.7 Gift Vouchers/Gift Cards
**Purpose:** Additional revenue stream, brand loyalty

**Features:**
- Digital gift card purchase
- Physical gift card option (shipped)
- Custom denominations (RM100, RM200, RM500, custom)
- Personalized message option
- Email delivery scheduling
- Gift card balance checking
- Redemption instructions

**Integration:**
- Payment gateway integration
- Gift card management system
- Expiry date tracking
- Redemption tracking at restaurant

---

### 6.3 NICE-TO-HAVE Features (P2 - Future Consideration)

#### 6.3.1 Virtual Restaurant Tour
- 360° panoramic photos
- Guided video tour with narration
- Interactive hotspots explaining design elements
- Table view preview (see your potential table)

#### 6.3.2 Loyalty Program
- Points system for repeat visits
- Member-exclusive reservations
- Birthday rewards
- Referral program
- Tiered membership (Silver, Gold, Platinum)

#### 6.3.3 Recipe Blog/Video Series
- Simplified kampung recipes for home cooking
- Ingredient spotlight posts
- Cooking technique videos
- Behind-the-recipe stories
- Links to Nyet product usage

#### 6.3.4 Online Merchandise Store
- Rembayung branded merchandise
- Integration with existing Nyet products
- Exclusive restaurant merchandise
- Pre-order system for new products

#### 6.3.5 Waitlist Management Portal
- Real-time waitlist status
- SMS notification when table available
- Estimated wait time display
- Queue position tracking

#### 6.3.6 Interactive Chef's Table Booking
- Premium experience bookings
- Chef interaction packages
- Cooking demonstration sessions
- Special tasting menus

---

## 7. Technical Requirements

### 7.1 Platform & Infrastructure

#### 7.1.1 Hosting
**Recommended:** Premium managed hosting solution

**Options:**
1. **AWS (Amazon Web Services)**
   - CloudFront CDN
   - EC2 or Elastic Beanstalk
   - S3 for media storage
   - RDS for database
   - Route 53 for DNS

2. **Google Cloud Platform**
   - Cloud CDN
   - Compute Engine or App Engine
   - Cloud Storage
   - Cloud SQL

3. **Vercel/Netlify** (for static site with API)
   - Global CDN included
   - Automatic scaling
   - Simplified deployment

**Requirements:**
- 99.9% uptime SLA
- Auto-scaling during traffic spikes
- Daily automated backups
- Disaster recovery plan
- DDoS protection
- Malware scanning

---

#### 7.1.2 Technology Stack

**Frontend:**
- **Framework:** Next.js 14+ (React-based)
  - Server-side rendering (SSR) for SEO
  - Static generation for performance
  - API routes for backend functionality
  - Image optimization built-in
  
- **Styling:** Tailwind CSS
  - Utility-first approach
  - Responsive by default
  - Easy customization
  - Small bundle size

- **State Management:** React Context API + SWR
  - For reservation system state
  - Optimistic UI updates
  - Cache management

**Backend:**
- **API:** Next.js API Routes or Node.js/Express
- **Database:** PostgreSQL
  - Relational data for reservations
  - Strong ACID compliance
  - Excellent for complex queries

- **Caching:** Redis
  - Session management
  - API response caching
  - Rate limiting

**CMS:**
- **Option 1:** Headless CMS (Sanity.io or Contentful)
  - Flexible content modeling
  - Real-time collaboration
  - API-first
  
- **Option 2:** WordPress headless
  - Familiar interface
  - Extensive plugin ecosystem
  - Easy for non-technical staff

**Reservation System Integration:**
- **Custom Build** OR
- **Third-Party:** OpenTable API, Resy, SevenRooms, or EatApp
  - Evaluate based on Malaysian market availability
  - Prefer direct integration over iframe

---

#### 7.1.3 Third-Party Integrations

**Essential:**
- Google Maps API
- Google Business Profile
- Payment Gateway: iPay88, Molpay, or Stripe
- Email Service: SendGrid or AWS SES
- SMS Service: Twilio or local Malaysian provider
- Analytics: Google Analytics 4 + Google Tag Manager
- Social Media APIs (Instagram, Facebook)

**Optional:**
- CRM: HubSpot or Salesforce
- Marketing Automation: Mailchimp or Klaviyo
- Review Management: Birdeye or Podium
- POS Integration: Square, Toast, or local system

---

#### 7.1.4 Security Requirements

**SSL/TLS:**
- HTTPS everywhere (no mixed content)
- TLS 1.3 minimum
- A+ rating on SSL Labs test

**Data Protection:**
- PDPA (Personal Data Protection Act) compliance for Malaysia
- GDPR compliance for EU visitors
- Encrypted data at rest and in transit
- Regular security audits
- Penetration testing before launch

**Application Security:**
- Input validation and sanitization
- SQL injection prevention
- XSS (Cross-Site Scripting) protection
- CSRF (Cross-Site Request Forgery) tokens
- Rate limiting on API endpoints
- WAF (Web Application Firewall)

**Payment Security:**
- PCI DSS compliance if storing card data
- Tokenization for credit cards
- 3D Secure authentication
- Fraud detection integration

---

#### 7.1.5 Performance Optimization

**Page Load Targets:**
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms

**Optimization Techniques:**
- Image lazy loading
- Code splitting
- Tree shaking
- Minification and compression (Gzip/Brotli)
- Browser caching strategies
- Service Workers for offline capability
- Critical CSS inlining
- Font optimization (subset, preload)
- Third-party script optimization

**CDN Strategy:**
- Static assets on CDN
- Geographic distribution (focus on Southeast Asia)
- Edge caching for dynamic content
- Image transformation at edge

---

#### 7.1.6 Browser & Device Compatibility

**Desktop Browsers:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

**Mobile Browsers:**
- Safari iOS 14+
- Chrome Android (last 2 versions)
- Samsung Internet

**Screen Resolutions:**
- 320px (iPhone SE) to 2560px (large desktop)
- Responsive breakpoints at 768px, 1024px, 1440px

**Device Testing:**
- iPhone 12/13/14/15 series
- Samsung Galaxy S21/S22/S23
- Various Android mid-range devices
- iPad/tablets

---

#### 7.1.7 Analytics & Tracking

**Metrics to Track:**

**Acquisition:**
- Traffic sources (organic, social, direct, referral)
- Campaign attribution
- Keyword rankings
- Social media referrals

**Engagement:**
- Bounce rate
- Average session duration
- Pages per session
- Scroll depth
- Video play rate
- Click-through rates on CTAs

**Conversion:**
- Reservation completion rate
- Reservation abandonment points
- Form field errors
- Reservation by time slot
- Reservation by party size
- Average booking lead time

**Technical:**
- Page load times by device/network
- Error rates
- API response times
- Uptime monitoring

**Custom Events:**
- Menu item views
- Menu PDF downloads
- Phone number clicks
- Direction clicks
- Social media clicks
- Newsletter signups
- Waitlist joins

**Tools:**
- Google Analytics 4 (primary)
- Hotjar or Microsoft Clarity (heatmaps, session recordings)
- Google Search Console (SEO)
- Core Web Vitals monitoring
- Uptime monitoring (Pingdom, UptimeRobot)

---

### 7.2 SEO Requirements

#### 7.2.1 On-Page SEO

**Technical SEO:**
- XML sitemap generation
- Robots.txt optimization
- Canonical tags
- Schema markup (Restaurant, Menu, LocalBusiness, Review)
- Structured data testing
- Open Graph tags for social sharing
- Twitter Cards
- Breadcrumb navigation
- Pagination handling

**Content SEO:**
- Keyword research targeting:
  - "Khairul Aming restaurant"
  - "Rembayung Kampung Baru"
  - "Best Malay restaurant Kuala Lumpur"
  - "Authentic kampung food KL"
  - "Nasi lemak Kampung Baru"
  - Long-tail variations
  
- Title tag optimization (50-60 characters)
- Meta descriptions (150-160 characters)
- Header hierarchy (H1, H2, H3)
- Alt text for all images
- Internal linking strategy
- Keyword density monitoring

#### 7.2.2 Local SEO

**Google Business Profile Optimization:**
- Complete profile with all details
- Regular posts and updates
- Photo uploads (menu, interior, food)
- Q&A management
- Review generation strategy
- Google Maps integration on website

**Local Citations:**
- Consistent NAP (Name, Address, Phone) across:
  - Yelp Malaysia
  - TripAdvisor
  - Facebook Places
  - Apple Maps
  - Waze
  - Malaysian food blogs/directories
  
**Local Content:**
- Kampung Baru neighborhood guide
- "How to get to Rembayung" blog post
- Local landmark references
- Malaysian food culture content

#### 7.2.3 Content Strategy for SEO

**Blog Topics:**
- Malay food culture education
- Kampung recipe histories
- Ingredient spotlights
- Malaysian dining etiquette
- Best dishes for first-timers
- Seasonal menu stories
- Behind-the-scenes content

**Content Calendar:**
- Minimum 2 posts/month
- Mix of educational and promotional
- Evergreen content prioritized
- Trending topic integration

---

### 7.3 Accessibility Requirements (WCAG 2.1 Level AA)

**Visual:**
- Color contrast ratio minimum 4.5:1 (text)
- Color contrast ratio minimum 3:1 (UI elements)
- No reliance on color alone for information
- Resizable text up to 200%
- Focus indicators on all interactive elements

**Auditory:**
- Captions for all video content
- Transcripts for audio content
- Visual alternatives for audio cues

**Motor:**
- Keyboard navigation for all functionality
- No time-sensitive actions (or with extensions)
- Large click targets (minimum 44x44px)
- No rapid flashing content

**Cognitive:**
- Clear, simple language
- Consistent navigation
- Clear error messages and recovery
- Predictable interface behavior
- Skip links for navigation

**Screen Reader Support:**
- Semantic HTML5
- ARIA labels where necessary
- Landmark regions
- Alt text for images
- Form label associations
- Table headers and data associations

**Testing:**
- Screen reader testing (JAWS, NVDA, VoiceOver)
- Keyboard-only navigation testing
- Color blindness simulation
- Automated accessibility scanning (axe, WAVE)

---

## 8. Design Requirements

### 8.1 Design Philosophy

**Core Principles:**
1. **Authentic Kampung Aesthetic** - Modern interpretation of traditional Malaysian village life
2. **Premium Yet Approachable** - High-end experience without intimidation
3. **Visual Storytelling** - Every element tells Rembayung's story
4. **Functional Beauty** - Design serves usability first, beauty second
5. **Mobile-First Mindset** - Small screens are the primary experience

---

### 8.2 Visual Identity

#### 8.2.1 Color Palette

**Primary Colors:**
- **Rembayung Orange/Gold:** #D97B3A (sunset colors, referencing the name meaning)
  - Use: CTAs, highlights, hover states
  
- **Warm Terracotta:** #B85A3A
  - Use: Headers, icons, accents

**Secondary Colors:**
- **Deep Forest Green:** #2C5F4D (nature, kampung greenery)
  - Use: Navigation, footer, supporting elements
  
- **Warm Cream:** #F4EDE3 (traditional textiles)
  - Use: Backgrounds, cards, sections

**Neutral Palette:**
- **Charcoal:** #2D2D2D (text)
- **Medium Gray:** #6B6B6B (secondary text)
- **Light Gray:** #E5E5E5 (borders, dividers)
- **Off-White:** #FAFAFA (page backgrounds)
- **Pure White:** #FFFFFF (cards, clean spaces)

**Accent Colors:**
- **Success Green:** #4CAF50 (confirmations)
- **Warning Amber:** #FF9800 (alerts, special notes)
- **Error Red:** #F44336 (errors, cancellations)
- **Info Blue:** #2196F3 (informational messages)

---

#### 8.2.2 Typography

**Primary Font (Headings):**
- **Option 1:** Custom font reflecting Malay heritage (if budget allows)
- **Option 2:** Playfair Display (elegant, traditional feel)
- **Option 3:** Merriweather (readable, warm serif)

**Body Font:**
- **Inter** or **Source Sans Pro**
  - Excellent readability
  - Professional yet warm
  - Wide language support (including Malay diacritics)
  - Variable font support for performance

**Scale:**
- H1: 48px/56px (mobile: 32px/40px)
- H2: 40px/48px (mobile: 28px/36px)
- H3: 32px/40px (mobile: 24px/32px)
- H4: 24px/32px (mobile: 20px/28px)
- Body: 16px/24px (mobile: 16px/24px)
- Small: 14px/20px

**Font Weights:**
- Regular (400) for body text
- Medium (500) for emphasis
- Semibold (600) for subheadings
- Bold (700) for headings

---

#### 8.2.3 Iconography

**Style:**
- Custom icon set or **Lucide/Feather Icons** (clean, modern)
- Consistent stroke width (2px)
- Rounded corners (matching brand softness)
- Duotone style for key features (sunset colors)

**Key Icons Needed:**
- Reservation/calendar
- Location/map pin
- Phone/contact
- Email
- Menu/food
- Parking
- Public transport
- Dietary preferences (vegetarian, halal, spicy, etc.)
- Social media
- Time/clock
- Group/people
- Special occasion (birthday, anniversary)

---

#### 8.2.4 Photography Guidelines

**Style Direction:**
- Natural, warm lighting (golden hour aesthetic matching "rembayung")
- Authentic, not overly styled
- Include Malaysian faces and diverse diners
- Show the cooking process and ingredients
- Capture ambiance and atmosphere
- Showcase the kampung-meets-modern aesthetic

**Technical Requirements:**
- Minimum 3000x2000px resolution
- sRGB color space
- Professional retouching (natural, not overdone)
- Consistent color grading across all photos
- Multiple aspect ratios: 16:9, 4:3, 1:1, 3:4

**Shot List:**
- 30+ hero food shots
- 10+ interior ambiance shots
- 5+ exterior shots
- 10+ team/staff portraits
- 5+ neighborhood context shots
- 20+ detail shots (ingredients, decor, textures)
- 10+ dining experience shots (people enjoying meals)

---

#### 8.2.5 Video Production

**Homepage Hero Video (30-45 seconds):**
- Time-lapse of sunset transitioning to restaurant evening
- Smooth transitions between cooking, serving, and dining
- No dialogue, ambient sound with subtle music
- Text overlay: "Where Kampung Meets City" / "Rembayung"
- Optimized for autoplay (under 5MB)

**Brand Story Video (3-5 minutes):**
- Narrated by Khairul Aming
- Story arc: Heritage → Journey → Vision → Invitation
- Behind-the-scenes construction montage
- Team introductions
- Food preparation showcase
- Customer testimonials (post-launch)

**Kitchen/Food Videos:**
- Short-form (15-30 seconds) for social media
- Recipe preparation clips
- "Meet the dish" series
- Chef's techniques

---

### 8.3 UI Components Library

#### 8.3.1 Buttons

**Primary Button:**
- Background: Rembayung Orange (#D97B3A)
- Text: White
- Height: 48px (mobile), 56px (desktop)
- Border radius: 8px
- Hover: Darken 10%, subtle lift shadow
- Active: Darken 15%, pressed state
- Disabled: 40% opacity

**Secondary Button:**
- Background: Transparent
- Border: 2px solid Rembayung Orange
- Text: Rembayung Orange
- Same dimensions as primary
- Hover: Light orange background (10% opacity)

**Text Button:**
- No border or background
- Text: Deep Forest Green
- Underline on hover
- Used for tertiary actions

---

#### 8.3.2 Form Elements

**Input Fields:**
- Height: 48px
- Border: 1px solid Light Gray (#E5E5E5)
- Border radius: 8px
- Padding: 12px 16px
- Focus state: Border changes to Rembayung Orange, subtle glow
- Error state: Red border with error icon
- Success state: Green border with checkmark icon

**Dropdown/Select:**
- Custom styled (not default browser)
- Chevron icon indicating expandable
- Smooth animation on open
- Max height with scroll for long lists

**Date Picker:**
- Calendar interface, not native picker (for consistency)
- Highlight selected date
- Disable unavailable dates
- Show current day clearly
- Mobile: optimized touch targets

**Checkboxes & Radio Buttons:**
- Custom styled with brand colors
- Clear checked/unchecked states
- Animation on selection
- Large touch target (44x44px minimum)

---

#### 8.3.3 Navigation

**Desktop Navigation:**
- Horizontal menu bar
- Sticky/fixed on scroll
- Transparent background that becomes solid on scroll
- Hover states with subtle underlines
- Menu items: Home, Menu, About, Reservations, Contact, (Blog)
- Right side: Phone number, "Book Now" CTA

**Mobile Navigation:**
- Hamburger icon (top right)
- Full-screen overlay menu
- Large, easily tappable menu items
- Contact buttons at bottom (Call, WhatsApp, Direction)
- Smooth animation (slide in from right)
- Close button (X) clearly visible

**Footer:**
- Three columns (desktop): About, Quick Links, Contact
- Single column (mobile): stacked
- Social media icons
- Newsletter signup
- Copyright and legal links
- Back to top button

---

#### 8.3.4 Cards

**Menu Item Card:**
- Image (16:9 aspect ratio)
- Dish name (heading)
- Short description (2-3 lines)
- Price (prominent)
- Dietary icons
- Hover: Subtle lift and shadow

**Blog Post Card:**
- Featured image (16:9)
- Category tag
- Title (2 lines max)
- Excerpt (3 lines max)
- Read time
- Date
- Hover: Image zoom effect

**Review Card:**
- Star rating
- Reviewer name and photo
- Review text (truncated with "read more")
- Date
- "Verified diner" badge if applicable

---

#### 8.3.5 Alerts & Notifications

**Success Alert:**
- Green background (#4CAF50 at 10% opacity)
- Green border and icon
- Used for: Successful reservations, form submissions

**Error Alert:**
- Red background (#F44336 at 10% opacity)
- Red border and icon
- Used for: Form errors, booking failures

**Warning Alert:**
- Amber background (#FF9800 at 10% opacity)
- Amber border and icon
- Used for: Important information, capacity warnings

**Info Alert:**
- Blue background (#2196F3 at 10% opacity)
- Blue border and icon
- Used for: General information, tips

---

### 8.4 Page Layouts

#### 8.4.1 Homepage

**Hero Section (Above the Fold):**
- Full-width video or image carousel
- Overlay text: "Rembayung" (logo/wordmark)
- Tagline: "Where Kampung Heritage Meets Modern KL"
- Primary CTA: "Make a Reservation" (large button)
- Scroll indicator

**About Section:**
- Side-by-side layout (desktop): Image | Text
- Khairul Aming portrait or restaurant exterior
- Brief story (3-4 paragraphs)
- CTA: "Read Our Full Story"

**Featured Dishes:**
- Grid of 6-8 signature dishes
- Hover reveals dish name and price
- CTA: "View Full Menu"

**Location Highlight:**
- Map embed
- Quick facts: 9 min from KLCC, 5 min from MRT
- Transportation icons
- CTA: "Get Directions"

**Social Proof:**
- Review statistics
- Latest Instagram posts
- Media mentions
- Awards/recognition

**Call to Action:**
- Final push to book
- Urgency element: "Limited tables available"
- Large reservation button

**Footer**

---

#### 8.4.2 Reservations Page

**Step Indicator:**
- Progress bar showing: 1. Date & Time → 2. Party Details → 3. Confirmation
- Always visible at top

**Step 1: Date & Time Selection**
- Calendar interface (large touch targets)
- Unavailable dates grayed out
- Time slots shown after date selection
- Visual indication of available/limited/full slots
- Party size selector

**Step 2: Guest Information**
- Form with clear labels
- Progressive validation (check as they type)
- Optional fields clearly marked
- Special requests text area
- Terms & conditions checkbox

**Step 3: Confirmation**
- Summary of booking details
- Edit buttons for each section
- "Confirm Reservation" button
- Security badge (data protection)

**Success Screen:**
- Confirmation message
- Booking reference number
- Calendar invite download
- Add to Google Calendar button
- Sharing options
- "What to expect" next steps
- Directions to restaurant

---

#### 8.4.3 Menu Page

**Header:**
- Hero image of food spread
- Page title: "Our Menu"
- Subtitle: "Authentic Kampung Flavors, Elevated"

**Filter & Search Bar:**
- Sticky on scroll
- Search box (prominent)
- Filter buttons: All, Appetizers, Mains, Sides, Desserts, Beverages
- Dietary filter: Vegetarian, Spicy, Gluten-Free
- Sort options: Default, Price (low-high), Price (high-low)

**Menu Grid:**
- Masonry or uniform grid layout
- 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Dish cards with images
- Quick view modal on click for full details

**Downloadable Menu:**
- PDF download button (top right)
- Print-friendly version

---

#### 8.4.4 About Page

**Narrative Sections (vertical scroll):**

1. **Hero:** Large quote from Khairul Aming about the vision
2. **The Journey:** Timeline of Khairul's path from engineer to restaurateur
3. **The Investment:** Transparent breakdown with infographics
4. **The Name:** Etymology and meaning of "Rembayung" with twilight visuals
5. **The Space:** Architecture and design philosophy with 360° tour embed
6. **The Team:** Staff photos and hiring philosophy
7. **The Food:** Culinary philosophy and ingredient sourcing
8. **The Impact:** Community involvement, local employment

**Interactive Elements:**
- Parallax scrolling effects (subtle)
- Image galleries
- Video embeds
- Pull quotes
- Timeline graphic

---

#### 8.4.5 Contact Page

**Two-Column Layout:**

**Left Column:**
- Contact form (Name, Email, Phone, Subject, Message)
- Purpose dropdown: General Inquiry, Reservation, Private Events, Press, Other
- Submit button

**Right Column:**
- Address (formatted, with map pin icon)
- Phone (click-to-call)
- Email (click-to-email)
- WhatsApp button
- Operating hours (clear table)
- Social media links

**Map Section:**
- Full-width embedded Google Map
- Custom marker with Rembayung branding
- Directions button

---

## 9. Content Strategy

### 9.1 Content Principles

1. **Authentic Voice:** Speak as Khairul Aming would—warm, genuine, transparent
2. **Educational:** Teach customers about kampung cuisine and Malay food culture
3. **Transparent:** Be honest about pricing, parking, and expectations
4. **Storytelling:** Every piece of content tells part of the Rembayung story
5. **Actionable:** Guide customers clearly on what to do next

---

### 9.2 Tone of Voice

**Characteristics:**
- Warm and welcoming, not stuffy or pretentious
- Confident but humble
- Knowledgeable without being condescending
- Proudly Malaysian
- Conversational but professional

**Examples:**

❌ Don't: "Rembayung presents an exquisite culinary experience featuring the finest ingredients..."
✅ Do: "At Rembayung, we cook the way our grandmothers did—with quality ingredients and a lot of heart."

❌ Don't: "Parking facilities are not available on premises."
✅ Do: "We're honest with you—parking is tight in Kampung Baru. We recommend carpooling or taking the MRT (just 5 minutes away!)."

---

### 9.3 SEO Content Strategy

#### 9.3.1 Primary Keywords to Target

**Brand Keywords:**
- Rembayung restaurant
- Khairul Aming restaurant
- Rembayung Kampung Baru
- Khairul Aming Rembayung

**Location Keywords:**
- Restaurants in Kampung Baru
- Malay restaurant Kuala Lumpur
- Best kampung food KL
- Authentic Malay cuisine KL
- Restaurants near KLCC

**Cuisine Keywords:**
- Masak lemak KL
- Nasi lemak Kampung Baru
- Traditional Malay food
- Kampung-style restaurant
- Authentic rendang KL

**Long-Tail Keywords:**
- Best places to eat in Kampung Baru
- Where to find authentic Malay food in KL
- Khairul Aming's new restaurant menu
- Reservation-only restaurants KL
- Kampung cuisine Kuala Lumpur

#### 9.3.2 Content Calendar (First 6 Months)

**Month 1 (Launch):**
- "Welcome to Rembayung: Our Story"
- "What is Rembayung? The Meaning Behind the Name"
- "A Tour of Our Kitchen: RM500,000 of Love"
- "How to Get to Rembayung (Parking, MRT, Grab)"

**Month 2:**
- "Meet Our Signature Dishes"
- "The Art of Masak Lemak: From Kampung to Your Plate"
- "Behind the Scenes: A Day in Our Kitchen"
- "Why We Chose Kampung Baru"

**Month 3:**
- "Understanding Malaysian Spice Levels"
- "The Story of Sambal: From Nyet to Rembayung"
- "Meet Our Head Chef"
- "Dietary Accommodations at Rembayung"

**Month 4:**
- "Seasonal Ingredients We Love"
- "The Best Time to Visit Rembayung"
- "Group Dining at Rembayung"
- "Celebrating Special Occasions with Us"

**Month 5:**
- "Customer Favorites: Top 5 Dishes"
- "The Kampung Breakfast Tradition"
- "Pairing Guide: What to Order Together"
- "Staff Spotlight: Meet [Name]"

**Month 6:**
- "6 Months of Rembayung: What We've Learned"
- "New Menu Items Coming Soon"
- "The Kampung Dessert Tradition"
- "Behind Our Hiring Philosophy"

---

### 9.4 Copywriting Guidelines

#### 9.4.1 Homepage Hero Copy

**Version A:**
Headline: "Where Kampung Heritage Meets Modern Kuala Lumpur"
Subheadline: "Experience authentic Malay cuisine in a space designed for today."
CTA: "Reserve Your Table"

**Version B:**
Headline: "Rembayung"
Subheadline: "Kampung cooking, elevated. From Khairul Aming's heart to your table."
CTA: "Make a Reservation"

---

#### 9.4.2 About Page Opening

"Ten years ago, I started cooking on the floor of my apartment, sharing simple recipes with 800 Instagram followers.

Today, Rembayung stands as my largest dream realized—a RM4 million commitment to preserving the flavors of kampung Malaysia while creating 50 jobs for local Malaysians.

This isn't just a restaurant. It's a homecoming to the tastes of our childhood, served in a space that honors where we've been and celebrates where we're going.

Welcome to Rembayung. Welcome home."

— Khairul Amin Kamarulzaman

---

#### 9.4.3 Menu Description Examples

**Masak Lemak Cili Api Udang**
"Sweet prawns swimming in a creamy coconut curry laced with cili padi—exactly how it's made in Kelantan. Rich, spicy, and impossible to stop eating. Served with fluffy steamed rice."
*Spice Level: 🌶️🌶️🌶️* | *RM 38*

**Ayam Masak Merah**
"Our grandmother's recipe: chicken braised in a rich, slightly sweet tomato-coconut sauce until it falls off the bone. The kind of dish that makes you close your eyes with the first bite."
*Spice Level: 🌶️* | *RM 32*

---

#### 9.4.4 FAQ Answers (Examples)

**Q: Why don't you accept walk-ins?**
A: We care about your experience more than filling every seat. With our reservation system, you won't wait in the sun for hours, and we can prepare for exactly how many guests we'll serve. It's better for you, better for us, and better for our Kampung Baru neighbors.

**Q: Why is the pricing higher than typical Malay food stalls?**
A: We're completely transparent about this. We invested RM4 million to create this space—including a RM500,000 professional kitchen, 12 AC units, and hiring 50 full-time staff with fair wages. We source quality ingredients and cook everything from scratch. We can't serve mesra-rakyat prices with these standards, but we promise every ringgit reflects the quality and experience you'll receive.

**Q: Is parking available?**
A: Let's be honest—parking in Kampung Baru is challenging. We recommend taking the MRT (Kampung Baru station is 5 minutes away) or carpooling. There's limited street parking, but we can't guarantee spots. Your table reservation holds; your parking doesn't.

---

## 10. Success Metrics

### 10.1 Key Performance Indicators (KPIs)

#### 10.1.1 Conversion Metrics

**Primary:**
- Reservation Completion Rate: Target >35%
- Booking Abandonment Rate: Target <15%
- Time to Complete Reservation: Target <3 minutes
- Repeat Reservation Rate: Target >25% within 6 months

**Secondary:**
- Newsletter Signup Rate: Target >5% of visitors
- Menu PDF Downloads: Track as engagement metric
- Contact Form Submissions: Track for inquiry quality
- Social Media Clicks: Track for engagement

---

#### 10.1.2 Traffic Metrics

**Acquisition:**
- Total Sessions: Establish baseline first month
- Unique Visitors: Growth target +20% month-over-month (first 3 months)
- Traffic Sources:
  - Organic Search: Target 40%
  - Direct: Target 25%
  - Social: Target 20%
  - Referral: Target 10%
  - Paid: Target 5%

**Engagement:**
- Bounce Rate: Target <45%
- Average Session Duration: Target >3 minutes
- Pages Per Session: Target >3 pages
- Return Visitor Rate: Target >30%

---

#### 10.1.3 SEO Metrics

**Ranking:**
- Keywords in Top 10: Target 15+ within 3 months
- Featured Snippets: Target 3+ within 6 months
- Local Pack Inclusion: Target within 1 month

**Authority:**
- Domain Authority: Target >30 within 6 months
- Backlinks: Target 50+ quality backlinks within 6 months
- Referring Domains: Target 30+ unique domains

**Local SEO:**
- Google Business Profile Views: Track weekly
- Direction Requests: Target 500+/month
- Google Reviews: Target 100+ within first 3 months
- Average Rating: Maintain >4.5 stars

---

#### 10.1.4 Technical Metrics

**Performance:**
- Page Load Time: <3 seconds (75th percentile)
- Time to Interactive: <5 seconds
- Core Web Vitals: All "Good" ratings
- Uptime: >99.9%

**Mobile:**
- Mobile Traffic %: Track (likely 60%+)
- Mobile Conversion Rate: Should be within 80% of desktop
- Mobile Page Speed Score: >85

**Errors:**
- 404 Errors: <0.5% of pageviews
- Form Errors: <5% of form submissions
- API Errors: <0.1% of requests

---

#### 10.1.5 Business Impact Metrics

**Reservations:**
- Total Reservations: Track daily/weekly/monthly
- Average Party Size: Track for revenue planning
- Peak Booking Times: Identify patterns
- Advance Booking Window: Average days before visit
- Cancellation Rate: Target <10%
- No-Show Rate: Target <3%

**Revenue Impact (Indirect):**
- Referral Source for Reservations
- High-Value Group Inquiries
- Gift Card Sales
- Merchandise Sales (if applicable)

**Customer Satisfaction:**
- Net Promoter Score (NPS): Target >70
- Review Ratings: Target >4.5/5
- Customer Service Inquiries: Track volume and type
- Repeat Reservation Rate: Target >25%

---

### 10.2 Analytics Setup

#### 10.2.1 Google Analytics 4 Configuration

**Custom Events:**
- `reservation_started` - User clicks "Make Reservation"
- `reservation_date_selected` - Date chosen
- `reservation_time_selected` - Time slot chosen
- `reservation_details_entered` - Form filled
- `reservation_completed` - Success page reached
- `reservation_abandoned` - Exit at various stages
- `menu_viewed` - Menu page accessed
- `menu_item_viewed` - Individual dish clicked
- `menu_downloaded` - PDF download
- `phone_clicked` - Click-to-call action
- `directions_clicked` - Navigation initiated
- `social_clicked` - Social media link clicked
- `newsletter_signed` - Email captured
- `waitlist_joined` - Added to waitlist

**Custom Dimensions:**
- Reservation Party Size
- Reservation Date (how far in advance)
- Reservation Time Slot (lunch/dinner, specific time)
- Traffic Source Medium
- Device Category
- User Language Preference
- Returning vs. New Visitor

---

#### 10.2.2 Funnel Analysis

**Reservation Funnel:**
1. Homepage Visit
2. Navigate to Reservations
3. Select Date
4. Select Time
5. Enter Details
6. Confirm Booking
7. Completion

**Drop-off Points to Monitor:**
- Homepage to Reservations page
- Date selection abandonment
- Time selection abandonment
- Form field abandonment (which fields cause issues)
- Final confirmation abandonment

---

#### 10.2.3 A/B Testing Plan

**Phase 1 Tests (Month 1-2):**
- CTA button text: "Book Now" vs. "Reserve Table" vs. "Get a Table"
- Homepage hero image: Video vs. Static image
- Reservation button color: Orange vs. Green

**Phase 2 Tests (Month 3-4):**
- Menu layout: Grid vs. List view
- About page length: Short vs. Long form
- Pricing display: Showing vs. "View Menu for Prices"

**Phase 3 Tests (Month 5-6):**
- Newsletter popup timing: 30s vs. Exit intent
- Review display: Carousel vs. Grid
- Footer CTA: Reservation vs. Newsletter signup

---

## 11. Development Phases

### Phase 1: MVP (Minimum Viable Product) - 6-8 Weeks

**Goal:** Launch-ready website with core functionality

**Deliverables:**
- Homepage (with hero, about snippet, featured dishes, location, CTA)
- Reservations system (fully functional)
- Interactive menu page
- About page
- Contact page
- Mobile responsive design
- Basic SEO setup
- Google Analytics integration
- SSL certificate
- Google Business Profile integration

**Team Required:**
- 1 Project Manager
- 1 UI/UX Designer
- 2 Frontend Developers
- 1 Backend Developer
- 1 QA Tester
- 1 Content Writer
- 1 Photographer

**Budget Estimate:** RM 80,000 - RM 120,000

---

### Phase 2: Enhancement - 4-6 Weeks Post-Launch

**Goal:** Add engagement and conversion optimization features

**Deliverables:**
- FAQ section
- Blog setup with first 5 posts
- Customer review integration
- Email newsletter system
- Multilingual support (Malay, English)
- Enhanced image gallery
- Virtual tour integration
- Gift card system
- Events/private dining page

**Team Required:**
- 1 Frontend Developer
- 1 Backend Developer
- 1 Content Writer
- 1 SEO Specialist

**Budget Estimate:** RM 40,000 - RM 60,000

---

### Phase 3: Advanced Features - Ongoing

**Goal:** Optimize and expand based on user data

**Deliverables:**
- Loyalty program
- Advanced analytics dashboard
- CRM integration
- Recipe blog/video section
- Merchandise store
- Chef's table booking system
- Mobile app (iOS/Android) consideration
- Chatbot for common inquiries
- Advanced personalization

**Timeline:** 3-6 months post-launch
**Budget:** RM 80,000 - RM 150,000

---

### 11.1 Development Timeline (Phase 1 Detail)

**Week 1-2: Discovery & Design**
- Stakeholder workshops
- User research & persona validation
- Competitive analysis
- Sitemap and user flow creation
- Wireframes for all key pages
- Design system creation
- High-fidelity mockups
- Content outline

**Week 3-4: Development Setup & Content**
- Development environment setup
- CMS configuration
- Frontend framework setup
- Database design
- API architecture
- Photography shoot coordination
- Content writing for key pages
- SEO keyword research

**Week 5-6: Core Development**
- Homepage development
- Reservation system integration/development
- Menu page with filtering
- About page
- Contact page with form
- Navigation and footer
- Mobile optimization
- Initial content upload

**Week 7: Testing & Refinement**
- Cross-browser testing
- Cross-device testing
- Accessibility audit
- Performance optimization
- Security testing
- User acceptance testing (UAT)
- Bug fixes
- Content proofing

**Week 8: Launch Preparation**
- Final QA
- Analytics verification
- SEO checklist completion
- Google Business Profile optimization
- Social media integration testing
- SSL certificate verification
- Backup and disaster recovery test
- Soft launch to limited audience
- Final adjustments
- Public launch

---

## 12. Budget & Resources

### 12.1 Development Budget (Phase 1)

**Design:**
- UI/UX Design (80 hours @ RM150/hr): RM 12,000
- Design System & Assets: RM 5,000
- **Subtotal: RM 17,000**

**Development:**
- Frontend Development (320 hours @ RM180/hr): RM 57,600
- Backend Development (160 hours @ RM200/hr): RM 32,000
- **Subtotal: RM 89,600**

**Content:**
- Professional Photography (2 days): RM 12,000
- Videography (1 day): RM 8,000
- Copywriting (40 hours @ RM100/hr): RM 4,000
- Content Strategy: RM 3,000
- **Subtotal: RM 27,000**

**Project Management:**
- PM (120 hours @ RM150/hr): RM 18,000

**Testing & QA:**
- QA Testing (80 hours @ RM100/hr): RM 8,000
- Accessibility Audit: RM 3,000
- Performance Testing: RM 2,000
- **Subtotal: RM 13,000**

**Third-Party Services (Year 1):**
- Domain & SSL: RM 300
- Hosting (AWS/GCP): RM 6,000
- Reservation System (if third-party): RM 12,000
- Email Service (SendGrid): RM 2,400
- SMS Service (Twilio): RM 3,600
- CDN: RM 2,400
- Backup & Security: RM 2,400
- **Subtotal: RM 29,100**

**Contingency (15%):** RM 26,205

**TOTAL PHASE 1: RM 219,905**

---

### 12.2 Ongoing Costs (Monthly)

**Hosting & Infrastructure:**
- Cloud Hosting: RM 500
- CDN: RM 200
- Backups: RM 200
- **Subtotal: RM 900**

**SaaS Tools:**
- Reservation System: RM 1,000
- Email Marketing: RM 200
- SMS Service: RM 300
- Analytics Tools: RM 150
- **Subtotal: RM 1,650**

**Maintenance & Updates:**
- Developer Retainer (20 hrs): RM 3,600
- Content Updates: RM 1,000
- SEO Monitoring: RM 800
- **Subtotal: RM 5,400**

**MONTHLY TOTAL: RM 7,950**

**ANNUAL ONGOING: RM 95,400**

---

### 12.3 Team Structure

#### 12.3.1 Core Team (Phase 1)

**Project Manager**
- Role: Oversee timeline, budget, stakeholder communication
- Time Commitment: 30 hours/week for 8 weeks
- Cost: RM 18,000

**UI/UX Designer**
- Role: Create design system, mockups, user flows
- Time Commitment: 40 hours/week for 2 weeks (full-time design phase)
- Cost: RM 12,000

**Senior Frontend Developer**
- Role: Lead frontend architecture, implement responsive design
- Time Commitment: 40 hours/week for 6 weeks
- Cost: RM 43,200

**Frontend Developer**
- Role: Support senior dev, component development
- Time Commitment: 30 hours/week for 6 weeks
- Cost: RM 14,400

**Backend Developer**
- Role: API development, database, integrations
- Time Commitment: 40 hours/week for 4 weeks
- Cost: RM 32,000

**QA Tester**
- Role: Test functionality, cross-browser/device testing
- Time Commitment: 40 hours/week for 2 weeks
- Cost: RM 8,000

**Content Writer**
- Role: Write all website copy, blog posts, SEO content
- Time Commitment: 40 hours over 4 weeks
- Cost: RM 4,000

**Photographer/Videographer**
- Role: All visual content creation
- Time Commitment: 3 days (2 photo, 1 video)
- Cost: RM 20,000

---

#### 12.3.2 Post-Launch Team

**Retention Model:**
- Monthly retainer developer (20 hours): RM 3,600
- Monthly content writer (10 hours): RM 1,000
- Monthly SEO specialist (8 hours): RM 800
- Quarterly design updates: RM 3,000

**Total Monthly Post-Launch:** RM 5,400 + tools (RM 7,950 total)

---

## 13. Risk Assessment

### 13.1 Technical Risks

#### Risk 1: Reservation System Overload
**Probability:** High  
**Impact:** Critical  
**Mitigation:**
- Load testing before launch (simulate 1000+ concurrent users)
- Auto-scaling infrastructure
- Queue system for high traffic
- Waitlist functionality as backup
- Clear communication about system limits
**Contingency:** Manual booking via phone/email as fallback

---

#### Risk 2: Payment Gateway Integration Issues
**Probability:** Medium  
**Impact:** High  
**Mitigation:**
- Test with Malaysian banks specifically
- Multiple payment method options
- Clear error messages and recovery paths
- Manual payment option via bank transfer
**Contingency:** Launch without credit card hold, implement post-launch

---

#### Risk 3: Mobile Performance Issues
**Probability:** Medium  
**Impact:** High (60%+ mobile traffic expected)  
**Mitigation:**
- Mobile-first development approach
- Extensive mobile device testing
- Performance budget enforcement
- Progressive Web App (PWA) consideration
**Contingency:** Simplified mobile version if needed

---

#### Risk 4: Third-Party Service Downtime
**Probability:** Low  
**Impact:** High  
**Mitigation:**
- Choose providers with 99.9%+ SLA
- Monitor uptime actively
- Fallback systems for critical services
- Cached versions of content
**Contingency:** Manual operations procedures documented

---

### 13.2 Business Risks

#### Risk 1: Overwhelming Demand Crashes Site
**Probability:** High (given Khairul Aming's following)  
**Impact:** Critical (reputation damage)  
**Mitigation:**
- Launch announcement timing control
- Gradual access rollout (soft launch to fans first)
- CDN and caching aggressive implementation
- Auto-scaling cloud infrastructure
- Load balancing
**Contingency:** 
- Waiting room/queue system (like Ticketmaster)
- Phased booking releases (1 month at a time)

---

#### Risk 2: Negative Reviews Before Opening
**Probability:** High (already happening per research)  
**Impact:** Medium  
**Mitigation:**
- Claim all review platforms immediately
- Respond professionally to premature reviews
- Report fake/premature reviews
- Build positive review pipeline post-opening
**Contingency:** Review response strategy with PR team

---

#### Risk 3: Price Shock from Customers
**Probability:** Medium  
**Impact:** Medium  
**Mitigation:**
- Transparent pricing on website (no hidden costs)
- Educational content explaining value
- Khairul Aming's video explaining investment
- FAQ addressing pricing directly
- Highlight premium ingredients and experience
**Contingency:** Value-menu items or lunch specials if needed

---

#### Risk 4: Booking Scalper/Bots
**Probability:** Medium  
**Impact:** High (legitimate customers can't book)  
**Mitigation:**
- CAPTCHA on booking flow
- Rate limiting on reservations per IP/email
- Phone verification
- Credit card verification (not charged)
- Behavioral analysis (too-fast clicking)
- Account system (limits per account)
**Contingency:** Manual review of suspicious bookings

---

### 13.3 Content Risks

#### Risk 1: Menu Changes Require Constant Updates
**Probability:** High  
**Impact:** Low  
**Mitigation:**
- Easy-to-use CMS for menu updates
- Staff training on content management
- Automated alerts for outdated content
- Seasonal menu templates prepared
**Contingency:** "Menu subject to change" disclaimer

---

#### Risk 2: Imagery Not Meeting Brand Standards
**Probability:** Medium  
**Impact:** Medium  
**Mitigation:**
- Professional photographer hired
- Shot list approval by Khairul Aming
- Multiple revision rounds budgeted
- Brand style guide for consistency
**Contingency:** Additional photo shoot budget (RM 5,000)

---

#### Risk 3: Translation Quality Issues
**Probability:** Medium  
**Impact:** Low  
**Mitigation:**
- Native speakers for each language
- Cultural consultant for Chinese translations
- A/B testing different phrasing
**Contingency:** English-only launch, add languages later

---

### 13.4 Launch Risks

#### Risk 1: Restaurant Not Ready But Website Is
**Probability:** Low  
**Impact:** High  
**Mitigation:**
- Website launch tied to restaurant opening date
- Staging environment for testing
- "Coming Soon" mode with countdown
- Waitlist during pre-launch
**Contingency:** Delay website public launch, keep in beta

---

#### Risk 2: SEO Penalty from Over-Optimization
**Probability:** Low  
**Impact:** Medium  
**Mitigation:**
- White-hat SEO only
- Natural link building
- Quality content focus
- Regular SEO audits
**Contingency:** SEO consultant on retainer

---

## 14. Post-Launch Strategy

### 14.1 First 30 Days

**Week 1: Monitor & Fix**
- 24/7 monitoring for critical issues
- Daily analytics review
- User feedback collection
- Bug triage and hot-fixes
- Performance optimization based on real traffic
- Social media sentiment tracking

**Week 2: Optimize**
- Conversion funnel analysis
- A/B test setup for key pages
- Content adjustments based on feedback
- SEO performance review
- Review response strategy implementation

**Week 3: Content Push**
- First blog posts published
- Behind-the-scenes content
- Customer testimonial collection
- Social media integration refinement
- Newsletter campaign launch

**Week 4: Evaluation**
- Full metrics review vs. targets
- User survey distribution
- Team retrospective
- Phase 2 planning kick-off
- Budget reallocation if needed

---

### 14.2 First 6 Months Roadmap

**Month 2:**
- Multilingual support launch
- Enhanced FAQ based on common questions
- First menu updates (if seasonal)
- Review collection campaign
- Google Business optimization based on data

**Month 3:**
- Blog expansion (2 posts/week)
- Guest blog outreach
- Influencer partnership content
- Video content expansion
- First A/B test results analysis

**Month 4:**
- Gift card system launch
- Events/private dining page enhancement
- CRM integration
- Customer segmentation
- Personalization features

**Month 5:**
- Loyalty program soft launch
- Referral program
- Recipe content series
- Cooking video series
- Community building initiatives

**Month 6:**
- Full Phase 2 launch
- 6-month retrospective
- Customer satisfaction survey
- Phase 3 planning
- Potential expansion content (if applicable)

---

### 14.3 Marketing Integration

The website should integrate seamlessly with broader marketing efforts:

**Social Media:**
- Instagram feed embed
- Social sharing optimization
- User-generated content gallery
- Influencer partnership landing pages
- Social media contest integration

**Email Marketing:**
- Automated welcome sequence
- Reservation confirmation/reminder emails
- Monthly newsletter
- Special occasion emails (birthdays)
- Re-engagement campaigns for inactive users

**Paid Advertising:**
- Landing pages for specific campaigns
- UTM parameter tracking
- Conversion pixel installation (Facebook, Google)
- Retargeting audience building
- A/B test landing page variants

**PR & Media:**
- Press kit download page
- Media inquiry contact form
- High-res image downloads
- Brand guidelines download
- Press release archive

**Partnerships:**
- Delivery platform integration (if offered later)
- Tourism board partnerships
- Hotel concierge resources
- Corporate partnership pages

---

## 15. Appendices

### Appendix A: Competitive Analysis Summary

**Direct Competitors:**
1. **Bijan Bar & Restaurant**
   - Strengths: Established brand, fine dining ambiance, central location
   - Weaknesses: Older website, limited online presence
   - Price Point: Similar (RM 50-80/person)

2. **Enak KL**
   - Strengths: Strong chef reputation, modern Malay concept
   - Weaknesses: Less authentic "kampung" feel
   - Price Point: Higher (RM 80-120/person)

3. **Precious Old China**
   - Strengths: Unique Peranakan-Malay fusion, strong ambiance
   - Weaknesses: Older clientele, traditional marketing
   - Price Point: Similar (RM 50-70/person)

**Indirect Competitors:**
- Village Park Restaurant (nasi lemak focus)
- Capital Cafe (kopitiam style)
- Various Kampung Baru eateries

**Rembayung's Differentiation:**
- Celebrity chef brand power
- Modern reservation system
- Strong digital presence
- Authentic kampung focus with modern execution
- Built-in audience of 4M+ followers

---

### Appendix B: User Testing Scenarios

**Scenario 1: First-Time Visitor (International Tourist)**
Task: Find the restaurant, understand the menu, and make a reservation for 2 people next Friday at 7 PM.

Success Criteria:
- Can locate address and directions within 30 seconds
- Understands menu offerings and prices within 2 minutes
- Completes reservation within 5 minutes
- Feels confident about what to expect

---

**Scenario 2: Khairul Aming Fan (Local)**
Task: Book a table for an anniversary dinner, understand parking situation, and sign up for updates.

Success Criteria:
- Makes reservation successfully
- Finds transportation information easily
- Adds booking to calendar
- Subscribes to newsletter

---

**Scenario 3: Corporate Event Planner**
Task: Inquire about private dining for 25 people, review menu options, and understand the process.

Success Criteria:
- Finds events/private dining information
- Submits inquiry form with all relevant details
- Downloads menu for review
- Receives automated confirmation

---

### Appendix C: Technical Stack Recommendation

**Optimal Stack:**
- **Frontend:** Next.js 14 (React) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Backend:** Next.js API Routes + Node.js
- **Database:** PostgreSQL (via Supabase or AWS RDS)
- **CMS:** Sanity.io (headless)
- **Hosting:** Vercel (frontend) + AWS (backend services)
- **CDN:** CloudFlare
- **Email:** SendGrid
- **SMS:** Twilio
- **Analytics:** Google Analytics 4 + Vercel Analytics
- **Monitoring:** Sentry (error tracking) + UptimeRobot
- **Forms:** React Hook Form + Zod validation
- **Payments:** Stripe or iPay88
- **Image Optimization:** Next.js Image + Cloudinary

---

### Appendix D: Content Checklist

**Before Launch:**
- [ ] Homepage copy (500-800 words)
- [ ] About page (1500-2000 words)
- [ ] Menu descriptions (all dishes)
- [ ] FAQ (minimum 20 questions)
- [ ] Contact page content
- [ ] All meta descriptions
- [ ] All image alt text
- [ ] Footer content
- [ ] Legal pages (Privacy Policy, Terms of Service)
- [ ] Cookie Policy
- [ ] Reservation confirmation email template
- [ ] Reservation reminder email template
- [ ] Cancellation email template
- [ ] Welcome newsletter email

**Post-Launch (First Month):**
- [ ] 5 blog posts
- [ ] Press release
- [ ] Social media announcement posts
- [ ] Email announcement
- [ ] Customer feedback survey
- [ ] Review request template

---

### Appendix E: SEO Checklist

**Technical SEO:**
- [ ] XML sitemap generated and submitted
- [ ] Robots.txt configured
- [ ] SSL certificate installed
- [ ] Canonical tags implemented
- [ ] 301 redirects for changed URLs
- [ ] Structured data (Schema.org) markup
- [ ] OpenGraph tags for social sharing
- [ ] Twitter Card tags
- [ ] Page speed optimization
- [ ] Mobile-friendliness verified
- [ ] Core Web Vitals passing

**On-Page SEO:**
- [ ] Keyword research completed
- [ ] Title tags optimized (all pages)
- [ ] Meta descriptions written (all pages)
- [ ] H1 tags optimized
- [ ] Header hierarchy correct (H1-H6)
- [ ] Image alt text added (all images)
- [ ] Internal linking strategy implemented
- [ ] Content keyword optimization
- [ ] URL structure optimized

**Local SEO:**
- [ ] Google Business Profile claimed and optimized
- [ ] NAP consistency verified across all platforms
- [ ] Local citations created
- [ ] Google Maps integration
- [ ] Local schema markup
- [ ] Location pages optimized
- [ ] Review generation strategy

**Off-Page SEO:**
- [ ] Backlink strategy developed
- [ ] Social media profiles created and linked
- [ ] Directory submissions completed
- [ ] Press release distribution
- [ ] Influencer outreach initiated

---

### Appendix F: Accessibility Checklist (WCAG 2.1 AA)

**Perceivable:**
- [ ] All images have alt text
- [ ] Color contrast meets 4.5:1 ratio
- [ ] Video has captions
- [ ] Audio has transcripts
- [ ] No information conveyed by color alone
- [ ] Text can be resized to 200%

**Operable:**
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Sufficient time for interactions
- [ ] No flashing content >3 times/second
- [ ] Skip navigation links
- [ ] Descriptive page titles
- [ ] Focus order is logical
- [ ] Link purpose clear from context

**Understandable:**
- [ ] Language of page identified
- [ ] Navigation consistent across pages
- [ ] Forms have clear labels
- [ ] Error identification and suggestions
- [ ] No unexpected context changes
- [ ] Help available for complex interactions

**Robust:**
- [ ] Valid HTML
- [ ] ARIA used correctly
- [ ] Status messages announced
- [ ] Compatible with assistive technologies

---

### Appendix G: Launch Day Checklist

**Technical:**
- [ ] Final DNS update
- [ ] SSL certificate active
- [ ] All forms tested
- [ ] Reservation system load tested
- [ ] Payment gateway tested
- [ ] Email templates tested
- [ ] SMS notifications tested
- [ ] Analytics tracking verified
- [ ] Google Tag Manager confirmed
- [ ] Backup system verified
- [ ] Monitoring alerts configured
- [ ] Error logging active

**Content:**
- [ ] All content proofread
- [ ] Menu prices verified
- [ ] Operating hours confirmed
- [ ] Contact information verified
- [ ] Social media links working
- [ ] Legal pages published
- [ ] All images optimized
- [ ] Videos loading correctly

**Marketing:**
- [ ] Google Business Profile updated
- [ ] Social media posts scheduled
- [ ] Email announcement ready
- [ ] Press release distributed
- [ ] Influencer partnerships activated
- [ ] Paid ads launched (if applicable)
- [ ] UTM parameters configured

**Operations:**
- [ ] Staff trained on system
- [ ] Customer service protocols ready
- [ ] FAQ responses prepared
- [ ] Review monitoring active
- [ ] Crisis communication plan ready
- [ ] On-call developer assigned

---

## 16. Conclusion & Next Steps

### 16.1 Summary

This PRD outlines a comprehensive digital strategy for Rembayung restaurant that:

1. **Prioritizes User Experience:** Mobile-first, fast, intuitive reservation system
2. **Reflects Brand Values:** Authentic kampung heritage meets modern sophistication
3. **Drives Conversions:** Optimized for booking completions
4. **Builds Trust:** Transparent pricing, clear information, quality content
5. **Scales Gracefully:** Infrastructure ready for high demand and future growth
6. **Measures Success:** Robust analytics and clear KPIs

The estimated Phase 1 investment of **RM 220,000** positions Rembayung with a best-in-class digital presence that matches the quality of the RM4 million physical restaurant investment.

---

### 16.2 Immediate Next Steps

**Week 1:**
1. **Stakeholder Approval:** Present this PRD to Khairul Aming and key decision-makers
2. **Budget Confirmation:** Finalize budget allocation
3. **Vendor Selection:** Begin RFP process for development agency (or hire internal team)
4. **Photography Planning:** Schedule restaurant photography shoot dates
5. **Domain Acquisition:** Secure rembayung.com and variations

**Week 2:**
1. **Kickoff Meeting:** Assemble core team
2. **Discovery Workshop:** Validate personas and user journeys
3. **Content Audit:** Identify existing content from Khairul Aming's channels
4. **Technical Architecture:** Finalize technology stack decisions
5. **Design Kickoff:** Begin wireframing and design system creation

**Week 3-4:**
1. **Design Phase:** Complete all mockups
2. **Content Creation:** Begin copywriting and photography
3. **Development Environment:** Set up staging and production environments
4. **Reservation System:** Begin integration or custom development
5. **SEO Foundation:** Complete keyword research and strategy

---

### 16.3 Critical Success Factors

For this project to succeed, the following must be maintained:

1. **Khairul Aming's Involvement:** His authentic voice and approval on key decisions
2. **Quality Over Speed:** Don't rush launch at expense of user experience
3. **Mobile Excellence:** Given 60%+ mobile traffic, this is non-negotiable
4. **Performance:** Fast load times directly impact conversion
5. **Brand Consistency:** Website must feel like natural extension of Khairul's brand
6. **Scalability:** Build for day-one traffic surge from 4M+ followers
7. **Data-Driven Decisions:** Let analytics guide optimization post-launch
8. **Customer-Centric:** Every decision filtered through "What's best for the customer?"

---

### 16.4 Long-Term Vision

This website is not just a booking tool—it's the digital foundation for Rembayung's future:

- **Year 1:** Establish as go-to resource for authentic Malay cuisine in KL
- **Year 2:** Expand content to become food culture hub, integrate loyalty program
- **Year 3:** Support multiple locations (if expansion occurs), robust merchandise platform
- **Year 5:** Complete digital ecosystem connecting restaurants, products, content, and community

The digital presence should grow alongside the physical business, always serving customers first while supporting business objectives.

---

## Document Version Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 11, 2024 | Product Team | Initial PRD creation |
| | | | |

---

## Approval Sign-Off

**Product Owner:** _____________________ Date: _______

**Technical Lead:** _____________________ Date: _______

**Design Lead:** _____________________ Date: _______

**Business Owner (Khairul Aming):** _____________________ Date: _______

---

**END OF DOCUMENT**

*This PRD is a living document and should be updated as requirements evolve, user feedback is gathered, and business needs change.*
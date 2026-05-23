# Naomi's Bites — Project Bible

> This document is the single source of truth for everyone working on this project.
> Read this before touching any code, copy, or design decision.

---

## 0. Figma-to-Code Rule (MANDATORY)

> Every section must be built by reading Figma data first. No guessing, no improvising.

### The workflow for every section

1. **Fetch Figma node data before writing any code**
   ```
   curl "https://api.figma.com/v1/files/FILE_KEY/nodes?ids=NODE_ID&depth=6" \
     -H "X-Figma-Token: YOUR_FIGMA_TOKEN"
   ```
   *(File key and token are in `.env.local` — never commit them)*
   Extract for every text node: `characters`, `fontSize`, `fontWeight`, `fontStyle`, `lineHeightPx`, `letterSpacing`, `textAlignHorizontal`, and `absoluteBoundingBox.width`

2. **Set `maxWidth` on every text element**
   Every text node in Figma has an explicit pixel width (`absoluteBoundingBox.width`). That value becomes `maxWidth` in the component. This is what locks line breaks to match Figma exactly. Without it, text flows wider and every line breaks at the wrong word.

3. **Copy text verbatim** — never paraphrase, improve, or substitute. If Figma says "tentang", code says "tentang". If Figma has an emoji, code has the emoji.

4. **Extract all spacing and dimensions from Figma** — padding, gap, width, height, border-radius, border width/colour. Nothing is eyeballed.

5. **Canvas-measure as rate-limit fallback** — if the Figma API returns 429, derive `maxWidth` via `ctx.measureText()` in the browser to find the exact pixel width that produces the correct line breaks.

6. **Screenshot → compare line-by-line** — after building, take a screenshot and verify each line of text against the Figma screenshot word-for-word before marking a section done.

### What went wrong (and must not repeat)

| Mistake | Root cause | Fix |
|---|---|---|
| Wrong words on each line | No `maxWidth` set — text flowed wider than Figma | Always fetch `absoluteBoundingBox.width` and apply as `maxWidth` |
| "soal" instead of "tentang" | Copied text from memory / earlier build, not re-fetched | Always re-read `characters` from Figma API for the current design |
| Photo too small → quote wrapped wrong | Photo dimensions not re-fetched after Figma was updated | Fetch `absoluteBoundingBox` for every container, not just text |
| Subtext on wrong line | `maxWidth` missing on body paragraph | Every text block needs `maxWidth`, not just headlines |

---

## 1. Business Overview

**Business Name:** Naomi's Bites
**Founded by:** Naomi (from Palembang, based in Bali)
**Instagram:** @naomisbitesofficial
**WhatsApp:** +62 851-9082-5988
**Operating from:** Bali, Indonesia
**Serving:** All of Indonesia

### What We Sell

| Product | Price | Description |
|---|---|---|
| Kue Nastar | Rp 75.000/toples | Classic pineapple tart cookies, ~30 pcs per jar |
| Kue Putri Salju | Rp 70.000/toples | Snow-dusted melt-in-mouth cookies, ~30 pcs per jar |

### The Founding Story (for copy reference)

Naomi grew up in Palembang where homemade kue kering was a staple of every special occasion. After moving to Bali, she searched for nastar and putri salju that tasted the way she remembered — and couldn't find them. Every commercial option tasted the same: flat, mass-produced, soulless. So she spent 3 months perfecting her own recipe. What started as a personal fix became Naomi's Bites.

**Important:** The story of Naomi is not the main pitch. It exists only as proof of WHY the cookies taste different. The real pitch is the product's differentiation.

---

## 2. Brand Positioning

### The Core Positioning Statement (internal — never use verbatim)

> For Indonesians who want nastar and putri salju that actually tastes like it was made at home — not in a factory — Naomi's Bites is the only choice because it is made by someone who had the exact same frustration and refused to settle.

### What Makes It Different (the 4 proof points)

1. **Wijsman Butter** — not margarine, not generic butter. A specific, recognisable premium ingredient.
2. **Real Pineapple Fruit** — the filling is made from actual pineapple, not readymade jam from a packet.
3. **Gram by Gram Precision** — every cookie is weighed and shaped individually. No machines.
4. **Maximum 4 Toples Per Day** — a hard physical limit born from doing things properly. The constraint is the proof.

### What We Are

- A founder-led, small-batch homemade cookie brand
- A premium alternative to commercial bakeries (Holland Bakery, toko kue, etc.)
- A year-round product anchored in the emotional resonance of Lebaran
- A personal, WhatsApp-first business with a human face

### What We Are NOT

- Not a commercial bakery or mass-production operation
- Not a marketplace seller (no Tokopedia, no Shopee listings — the website is the only catalog)
- Not just another "homemade UMKM" — the differentiation is specific, verifiable, and ingredient-driven
- Not a seasonal-only product — available 365 days a year
- Not a brand that competes on price — we compete on taste and integrity

---

## 3. Target Audience

### Primary

Indonesians aged 22–45, across all major cities, who:
- Have eaten nastar/putri salju their whole lives and have a strong taste memory
- Have been disappointed by commercial versions
- Are buying for themselves, family, or gifting (Lebaran, birthdays, office hampers)
- Discover us via Instagram or personal recommendation

### Secondary

- Indonesians in Bali (expats, migrants, tourists) seeking a taste of home
- People searching Google for `nastar homemade`, `pesan nastar online`, `nastar nanas asli`

### Who Is NOT Our Customer

- Price-sensitive buyers looking for the cheapest nastar
- Buyers expecting same-day delivery
- Wholesale/reseller inquiries (not supported in Phase 1)

---

## 4. Brand Identity

### Colours

| Token | Hex | Usage |
|---|---|---|
| Navy (Primary) | `#1B2D5F` | Buttons, navbar, headings, jar label |
| Cream (Background) | `#FAF7F2` | Page background — never pure white |
| Cookie Gold (Accent) | `#C8820A` | Price tags, highlights, hover states |
| Off-White (Surface) | `#FFFFFF` | Cards, FAQ panels |
| Text Primary | `#1B2D5F` | Body copy |
| Text Muted | `#6B7280` | Subtitles, secondary info |

### Typography

| Role | Font | Style |
|---|---|---|
| Display / Hero | Playfair Display | Bold serif — warmth + premium |
| Body / UI | DM Sans | Clean, readable, modern |
| Accent | Playfair Display Italic | Small labels, product subtitles |

### Tone of Voice

**Framework: Friendly & Conversational**

- Write like you're talking to a friend, not presenting to a customer
- Use *kamu*, not *Anda*. Use *kami*, not *perusahaan kami*
- Short sentences. Human rhythm. No marketing jargon.
- Indonesian is the primary language. English only for UI labels (buttons, nav).
- Never sound corporate. Never sound desperate.

### Copywriting Framework

**Belief Shift (Old Way → Why It Fails → New Way)**

The customer arrives believing commercial nastar is "good enough." Our job is to crack that belief with specifics (Wijsman, nanas asli, 4 toples), then present Naomi's Bites as the logical conclusion.

---

## 5. Technical Stack

### Current (Phase 1)

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | Next.js 14 (App Router) | Website framework |
| Styling | Tailwind CSS | UI styling |
| Database | Supabase (PostgreSQL) | Product catalog |
| Hosting | Vercel | Deployment & CDN |
| Version Control | GitHub | Code backup & history |
| Language | TypeScript | Type safety |

### Environments

| Environment | Branch | Supabase | URL |
|---|---|---|---|
| Production | `main` | Naomi's Bites Prod (`ufrnczsetsibdskdethc`) | naomisbites.vercel.app |
| Development | `dev` | Naomi's Bites Dev (`wjgwagvuuqrippfrbpsn`) | Vercel preview URL |
| Local | `dev` | Naomi's Bites Dev (via `.env.local`) | localhost:3000 |

### Database Schema

**Table: `products`**
```
id            uuid        primary key
name          text        not null
slug          text        not null unique
description   text
price         integer     (IDR, whole number)
image_url     text
is_available  boolean     default true
created_at    timestamptz default now()
```

### Workflow Rule

> **Never commit directly to `main`.**
> All work happens on `dev`. When tested and approved, merge `dev` → `main`.
> `main` push = automatic production deployment on Vercel.

---

## 6. Development Phases

### Phase 1 — MVP Catalog Website *(current)*
**Deadline:** May 2026
**Goal:** Get Naomi selling on Monday.

#### Website Sections Tracker

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Navbar | ✅ Done | Logo top-left, burger menu top-right, transparent overlay |
| 2 | Hero | ✅ Done | Full-bleed photo, gradient, headline, WhatsApp CTA. maxWidth set on all text nodes. |
| 2b | Founder Story | ✅ Done | Photo, quote, body copy. All text maxWidth matched to Figma. |
| 3 | Trust Bar | ⬜ Not started | Design in Figma first |
| 4 | The Difference | ⬜ Not started | Design in Figma first |
| 5 | Products | ⬜ Not started | Design in Figma first |
| 6 | Gallery | ⬜ Not started | Design in Figma first |
| 7 | Testimonials | ⬜ Not started | Design in Figma first |
| 8 | FAQ | ⬜ Not started | Design in Figma first |
| 9 | Final CTA | ⬜ Not started | Design in Figma first |
| 10 | Instagram Strip | ⬜ Not started | Design in Figma first |
| 11 | Footer | ⬜ Not started | Design in Figma first |

#### Technical Checklist

| Item | Status | Notes |
|---|---|---|
| Mobile-first 430px container | ✅ Done | Navy sides on desktop |
| Floating WhatsApp button | ✅ Done | Container-aware positioning |
| Google Fonts (Plus Jakarta Sans) | ✅ Done | Also Playfair Display + DM Sans |
| SEO metadata + Open Graph | ✅ Done | In layout.tsx |
| Structured data (LocalBusiness + Product) | ✅ Done | In layout.tsx |
| Supabase client setup | ✅ Done | lib/supabase.ts |
| sitemap.xml | ⬜ Not started | |
| robots.txt | ⬜ Not started | |
| Mobile device testing | ⬜ Not started | iPhone Safari + Android Chrome |
| Merge dev → main (go live) | ⬜ Not started | After all sections done |

---

### Phase 2 — Content Management
**Goal:** Naomi can update products, prices, and copy without a developer.

- Supabase Auth (email/password for admin)
- Protected `/admin` route in Next.js
- Product CRUD (create, edit, delete, toggle availability)
- Image upload via Supabase Storage
- Testimonial management (add/edit/delete reviews)
- Basic rich text for product descriptions

**New tables:** `testimonials`, `site_settings`

---

### Phase 3 — Order Management
**Goal:** Orders flow into a system, not just WhatsApp chaos.

- Order form on website (name, address, products, quantity)
- Orders table in Supabase
- Order status tracking (pending → confirmed → packed → shipped → delivered)
- Admin dashboard: view all orders, update status
- Automated WhatsApp notification on order status change (via Fonnte or WA Business API)
- Stock counter per product (deducted on order confirmation)

**New tables:** `orders`, `order_items`, `stock`

---

### Phase 4 — Payments
**Goal:** Customers pay online. No manual bank transfer chase.

- Payment gateway: **Midtrans** or **Xendit** (both support Indonesian banks, GoPay, OVO, QRIS)
- Payment status webhook → updates order status in Supabase automatically
- Invoice generation (PDF) sent via WhatsApp on successful payment
- Refund handling in admin dashboard

**New tables:** `payments`, `invoices`

---

### Phase 5 — Logistics
**Goal:** Shipping is automated, not manual.

- **RajaOngkir API** integration for real-time shipping cost calculation at checkout
- Supported couriers: JNE, J&T, SiCepat, AnterAja
- Automatic airwaybill (resi) input in admin
- Customer-facing order tracking page
- Estimated delivery date displayed at checkout

**New tables:** `shipments`

---

### Phase 6 — Analytics & Ads Tracking
**Goal:** Naomi knows where her customers come from and what converts.

- **Google Analytics 4** — pageviews, scroll depth, WhatsApp click events
- **Meta Pixel** — purchase events, AddToCart, ViewContent for Facebook/Instagram ads retargeting
- **Google Tag Manager** — tag management without code deployments
- Conversion events: WhatsApp button click, FAQ expansion, Gallery view
- UTM parameter tracking for Instagram link-in-bio campaigns
- Basic dashboard in admin: traffic sources, top-converting sections, revenue by period

---

### Phase 7 — Full Dashboard (WordPress Equivalent)
**Goal:** Naomi or her team can run the entire business from one interface.

- Unified admin dashboard (Next.js `/admin` with role-based access)
- **Roles:** Owner (Naomi) | Ops (packing/shipping) | Marketing (content only)
- **Modules:**
  - Content: products, gallery, testimonials, FAQs, homepage copy
  - Orders: intake, status, history, export to CSV
  - Stock: inventory levels, low stock alerts, batch size tracker
  - Payments: transaction history, refunds, revenue reports
  - Logistics: shipment tracking, courier performance
  - Analytics: GA4 + Meta Pixel data in one view
  - Settings: WhatsApp number, Instagram handle, business info, promo banners
- Mobile-optimised admin (Naomi manages from phone)
- Notification system (new order → push notification)

---

## 7. SEO Strategy

### Target Keywords

| Type | Keywords |
|---|---|
| Primary | `nastar homemade`, `putri salju homemade` |
| Secondary | `kue nastar bali`, `pesan nastar online`, `nastar lebaran` |
| Long tail | `nastar wijsman butter`, `nastar nanas asli`, `kue kering homemade bali` |
| Local | `kue kering bali`, `pesan kue online indonesia` |

### Technical SEO Checklist

- [x] Meta title + description
- [x] Open Graph tags (WhatsApp/Instagram link previews)
- [ ] Structured data: `LocalBusiness` schema
- [ ] Structured data: `Product` schema per product
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Semantic HTML (single H1, logical H2/H3)
- [ ] Alt text on all images
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms

---

## 8. Conversion Strategy

**Target:** 30%+ conversion rate (1 in 3 visitors clicks WhatsApp CTA)

**Key conversion mechanics:**
1. Belief Shift copy framework — crack "commercial cookies are fine" belief before introducing Naomi's
2. 4 specific proof points (Wijsman, nanas asli, gram per gram, 4 toples) — no vague claims
3. Pre-filled WhatsApp message — removes the "what do I even say?" friction
4. Floating WhatsApp button — CTA always visible at every scroll position
5. FAQ section — kills every objection before it kills the sale
6. Multiple CTA placements — Hero, each Product card, post-FAQ, Final CTA
7. Testimonials — borrowed trust from real customers (to be populated post-launch)
8. Instagram strip — long-game recapturing for visitors not ready to buy today

---

## 9. File Structure (Phase 1)

```
naomis-bites/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage (all sections)
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── TheDifference.tsx
│   ├── Products.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── RecaptureSection.tsx
│   ├── FinalCTA.tsx
│   ├── InstagramStrip.tsx
│   ├── Footer.tsx
│   └── FloatingWhatsApp.tsx
├── lib/
│   └── supabase.ts         # Supabase client
├── supabase/
│   └── migrations/         # All DB migrations in order
├── public/
│   └── images/             # Static assets
├── PROJECT.md              # This file
└── .env.local              # Never committed
```

---

## 10. Definition of Done (Per Phase)

A phase is only complete when:

1. All features work on `dev` (localhost + Vercel preview)
2. All features tested on mobile (iPhone Safari + Android Chrome)
3. Merged to `main` and confirmed working on `naomisbites.vercel.app`
4. No console errors in production
5. Lighthouse score: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 85

---

*Last updated: May 2026*
*Maintained by: Naomi's Bites development team*

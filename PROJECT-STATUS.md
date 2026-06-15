# Moreno Bakery — Project Walkthrough & Status

_Last reviewed: 2026-06-15. Build was last touched 2026-04-07 (client went quiet ~2 months)._

---

## 1. What this is

A **Next.js (App Router) website** for **Moreno Bakery**, a Cuban-heritage bakery
+ full kitchen in **Brandon, FL** (Tampa Bay). It replaces their current Duda site
at morenobakery.com and serves two audiences:

- **Everyday** — breakfast, lunch, pastries, coffee; walk-in / pickup / delivery
- **Events** — weddings, corporate catering, birthdays, private events (high-value)

Design direction: Panera clarity × Magnolia warmth × Cuban bakery identity.
Brand blues `#0166B7` / `#0391C7`, warm neutral `#B59785`; Patrick Hand (accent
headings) + Quicksand (body), both self-hosted and preloaded.

- **Two folders on disk**
  - `moreno-bakery/` — the Next.js build (this repo), Vercel project `moreno-bakery`
  - `moreno/` — planning + source assets (brief in `CLAUDE.md`, 23 docx copy files,
    162-item menu database, 135 product photos, logo, proposal PDF)
- **Staging:** https://moreno-bakery.vercel.app (Ready; not on the live domain yet)
- **NAP:** 737 W. Brandon Blvd., Brandon, FL 33511 · 813.689.0320 · susan@morenobakery.com
- **Social:** facebook.com/morenosbakery · instagram.com/morenobakery · tiktok.com/@moreno_bakery

## 2. What's built (21 routes — all present and populated)

| Area | Routes |
|---|---|
| Home | `/` (hero slideshow) |
| Menu | `/menu`, `/menu/bakery`, `/menu/food`, `/menu/catering` — 162 items from `app/data/menu.js` |
| Catering | `/catering` (+ interactive **catering planner** that suggests menus) |
| Events | `/events` + `/events/weddings`, `/corporate`, `/private-events`, `/birthdays-graduations`, `/wedding-cakes` |
| Story/Brand | `/our-story`, `/featured-on-nbc`, `/gallery` (lightbox) |
| Careers | `/join-the-team` (application form) |
| Contact | `/contact` — tabbed: General · Catering · **multi-step Wedding Cake questionnaire** · **multi-step Custom Cake Order** |
| Blog | `/stories` + 3 posts (Brandon story, 500-employee custom treats, PI-law-firm catering) |

**Done well:** full copy + 162-item menu integrated; JSON-LD schema on 11 pages;
self-hosted preloaded fonts; a11y basics (skip link, `<main>` landmark); Next
`metadata` API with `metadataBase` set to the live domain; gallery lightbox;
genuinely useful interactive forms (catering planner, multi-step cake flows).

## 3. Lead capture — how forms work

All forms POST JSON to `https://myaieditor.com/api/form-notify` with
`site_slug: "moreno-bakery"` and a honeypot `_honey`. The six `form_type`s emitted:

| form_type | Source | Category |
|---|---|---|
| `general` | Contact → General tab | inquiry |
| `catering` | Contact → Catering tab | inquiry |
| `wedding` | Contact → Wedding Cake questionnaire (multi-step) | cake order (high-value) |
| `cake-order` | Contact → Custom Cake Order (multi-step) | cake order (high-value) |
| `catering-planner` | `/catering` interactive planner | catering |
| `job-application` | `/join-the-team` | careers |

## 4. What we learned / fixed reviewing it (gaps vs. the WES standard in `Desktop/Websites/CLAUDE.md`)

**Fixed 2026-06-15:**
- ✅ **No Supabase `sites` row existed** for `moreno-bakery`. Because `leads.site_id`
  is a FK to `sites`, submissions over the staging period had nowhere to land in
  the pipeline (admin-fallback email only). Created the row
  (`id 5713923d-4412-4972-9bea-234d896c7bf6`, `enabled_modules`:
  inbox, leads-pipeline, cake-orders, catering, careers, blog-publisher;
  `framework: nextjs-app`; `production_url: https://moreno-bakery.vercel.app`).
- ✅ Registered in the global Sites table + form-slug table in `Desktop/Websites/CLAUDE.md`.

**Still open (launch checklist):**
1. ⚠️ **No reCAPTCHA** on any form. Standard requires reCAPTCHA v3 + a
   `recaptcha_token` field; forms currently send only the honeypot. Add the shared
   WES key and register `morenobakery.com` in the reCAPTCHA admin before go-live, or
   the contact forms will take bot spam.
2. ⚠️ **No GTM / GA4 / consent-mode** in `app/layout.js` — the site has zero
   analytics. Add a GTM container (+ Google Consent Mode default block).
3. ⚠️ **No `sitemap.xml` / `robots.txt`** — add `app/sitemap.js` + `app/robots.js`
   (Next route handlers) before submitting to Search Console.
4. ⚠️ **Image weight** — ~13 MB in `public/images`; most food photos are 150–260 KB
   JPGs (only 15 WebP vs 248 JPG/PNG). `next/image` resizes at runtime, but convert
   sources to WebP (quality 65–75) to cut origin weight.
5. ⚠️ **No `site_access` rows** — the client (Susan) isn't granted, so form
   notifications fall back to Justin/WES admin only. Grant access once her email is confirmed.
6. ⚠️ **Domain not cut over** — morenobakery.com still points at the old Duda site;
   `production_url` is the staging URL until DNS moves.
7. ⚠️ **Post-launch + SEO audits** not yet run (`POST-LAUNCH-AUDIT.md`, `SEO-REVIEW.md`).

## 5. Admin portal

A single-tenant admin portal (`admin-moreno-bakery/`) is being scaffolded per
`Desktop/Websites/ADMIN-PORTAL.md` so the bakery can manage cake orders, catering
requests, general inquiries, and job applications. It reads the same `leads` table
the forms above feed. Modules: inbox · leads-pipeline · cake-orders · catering ·
careers · blog-publisher. See the Deployed-portals table in `ADMIN-PORTAL.md`.

## 6. Suggested next actions, in order

1. Build + deploy the admin portal (in progress).
2. Add reCAPTCHA v3 + GTM/GA4 + sitemap/robots (the three standard launch items).
3. Convert food/hero images to WebP.
4. Re-engage the client to confirm content, then DNS cutover + post-launch/SEO audits.

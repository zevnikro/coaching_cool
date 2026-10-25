# coaching.cool — Production Build

## File Structure
```
coaching.cool/
├── index.html              ← Homepage (landing page)
├── coachability-index.html ← Interactive quiz tool
├── wheel-of-life.html      ← Interactive radar chart tool
├── pricing.html             ← Packages & pricing (Stripe)
├── contact.html             ← Contact form + Calendly embed
├── about.html               ← Coach bio & credentials
├── coaching-dads.html       ← Niche: Dads
├── coaching-moms.html       ← Niche: Moms
├── coaching-students.html   ← Niche: Students
├── coaching-youngsters.html ← Niche: Young Adults
├── privacy.html             ← Privacy policy (GDPR template)
├── terms.html               ← Terms of service (template)
├── css/
│   └── style.css            ← Global stylesheet
├── js/
│   └── main.js              ← Shared JS (nav, scroll animations)
└── README.md
```

## Deployment (Hitrost.com / cPanel)
1. Add coaching.cool as addon domain in cPanel
2. Upload ALL files to the coaching.cool document root
3. SSL should auto-provision via Let's Encrypt

## Configuration Required Before Launch
### Stripe Payment Links
- Create Payment Links in Stripe Dashboard
- Replace `YOUR_FIRST_STEP_LINK`, `YOUR_MOMENTUM_LINK`, `YOUR_ALL_IN_LINK` in:
  - `index.html` (bottom script)
  - `pricing.html` (bottom script)

### Calendly
- Replace placeholder in `contact.html` with Calendly embed widget
- Add popup widget to pricing CTAs (see integration guide)

### Kit (ConvertKit)
- Replace `FORM_ID` and `YOUR_PUBLIC_API_KEY` in:
  - `coachability-index.html` (submitEmail function)
  - `wheel-of-life.html` (submitWolEmail function)

### Google Analytics
- Uncomment GA4 script tag in `index.html` <head>
- Add GA4 tracking to all other pages

### Cookie Consent
- Add CookieYes or Cookiebot script to all pages

### About Page
- Replace `[Your Name]` with actual coach name
- Add real photo (replace the ✦ placeholder)

### Legal Pages
- Have privacy.html and terms.html reviewed by a legal professional
- Update with real business details

## Tech Notes
- Pure static HTML/CSS/JS — no build step, no Node.js required
- All fonts loaded from Google Fonts CDN
- Mobile-responsive (breakpoint at 768px)
- Scroll animations via IntersectionObserver
- Zero dependencies beyond Google Fonts

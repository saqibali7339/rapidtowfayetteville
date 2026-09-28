# rapidtowfayetteville.com

Static rank-and-rent towing site. Plain HTML/CSS/JS, so no build step is needed to deploy.

## Go live on GitHub Pages
1. Create a new GitHub repo, e.g. `rapidtowfayetteville`.
2. Upload **everything inside this folder** to the repo root. `index.html` must sit at the root.
3. Go to Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
4. Custom domain: the `CNAME` file already says `rapidtowfayetteville.com`. At your registrar, add:
   - `A` records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` for `www` → `<your-github-username>.github.io`
   Then tick **Enforce HTTPS** in Settings → Pages.
   (If you're not using the domain yet, delete `CNAME`.)

## Before launch — must do
- **Phone number:** edit `assets/site.js` → `RT_CONFIG`. Also do a find-and-replace across all files: `(910) 555-0142` → your number and `+19105550142` → your E.164 number. The number is also baked into the HTML and schema, so it works without JS and Google can read it.
- **Quote form:** right now it only shows a confirmation. To receive leads, point the form at a form service. For example, in each page's `<form class="form" data-quote>`, add `action="https://formspree.io/f/XXXX" method="POST"`, then remove the `e.preventDefault()` block in `site.js`. Or post it via fetch from `site.js`.
- **Analytics:** add a GA4/GTM snippet to the `<head>`. Call clicks already push `call_click`, `quote_submit` and `gps_located` to `dataLayer`.
- **About page:** fill in the dashed "Operator details" box with the renter's info.
- **Search Console:** submit `https://rapidtowfayetteville.com/sitemap.xml`.

## Files
- `index.html` + one folder per page (`/slug/index.html`)
- `assets/site.css`, `assets/site.js`
- `sitemap.xml`, `robots.txt`, `CNAME`
- `Site Plan.html`: internal keyword map (noindex, not linked). Delete it before going live if you don't want it public.
- `_build/`: page content + generator (ignored by GitHub Pages). Only needed if you want to regenerate the pages.

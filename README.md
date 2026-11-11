# Simran B. - Websites That Work Beautifully

Next.js 14 (App Router) portfolio. No CSS framework, no extra dependencies.

## Edit everything in `data/site.js`
Instagram, the three demo sites, portfolio entries, services, plans (set `price` to publish real prices), process and form options.

To use a screenshot instead of the live iframe preview, add it to `/public/previews/` and set `image: "/previews/name.jpg"` (and `mobileImage`) on the project/demo.

## Contact form -> your email (email is never shown on the site)
1. Create a form at Formspree (or Web3Forms) using your email as the destination.
2. In Vercel -> Settings -> Environment Variables add `FORM_ENDPOINT` (the form URL). For Web3Forms also add `FORM_ACCESS_KEY`.
3. Redeploy. Until set, the API returns 501 and the form says it is not connected.

## Run
```
npm install
npm run dev
```

## Deploy
Import the repo in Vercel (Next.js preset) and add env vars from `.env.example`.

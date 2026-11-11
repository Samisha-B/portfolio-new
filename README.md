# Simran B. - Websites That Work Beautifully

Next.js 14 (App Router) portfolio. No CSS framework, no extra dependencies.

## Edit everything in `data/site.js`
Instagram, the three demo sites, portfolio entries, services, plans (set `price` to publish real prices), process and form options.

To use a screenshot instead of the live iframe preview, add it to `/public/previews/` and set `image: "/previews/name.jpg"` (and `mobileImage`) on the project/demo.

## Contact form -> your inbox via Resend
1. Sign up at resend.com with the email you want enquiries sent to.
2. Create an API key (Sending access).
3. In Vercel -> Settings -> Environment Variables add `RESEND_API_KEY` and `CONTACT_TO_EMAIL`. Optionally `RESEND_FROM` and `NEXT_PUBLIC_SITE_URL`.
4. Redeploy and send a test enquiry. Check spam the first time.

Without a verified domain, Resend only sends from `onboarding@resend.dev` and only to your own account email. To send from your own domain, verify it in Resend and set `RESEND_FROM`.

Until configured, the API returns 501 and the form says it is not connected. Your email and key live only in Vercel env vars, never in the repo or on the site.

## Run
```
npm install
npm run dev
```

## Deploy
Import the repo in Vercel (Next.js preset) and add env vars from `.env.example`.

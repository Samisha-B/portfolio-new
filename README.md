# Simran B. - Websites That Work Beautifully

Next.js 14 (App Router) portfolio. No CSS framework, no extra dependencies.

## Edit everything in one file
`data/site.js` holds contact details, projects, URLs, services, process and copy.

- Replace `whatsapp`, `instagram`, `email` placeholders.
- Beauty projects 2-5 and the second cleaning project are placeholders (no link, labelled). Fill in `name`, `description`, `features`, `url`.
- Add a screenshot to `/public/previews/` and set `image: "/previews/name.jpg"` on a project to use it instead of the live iframe preview.

## Contact form
Set `FORM_ENDPOINT` (e.g. a Formspree URL) in Vercel -> Settings -> Environment Variables. Until then, the API returns 501 and the form tells the visitor it is not connected, so nothing is silently lost.

## Run
```
npm install
npm run dev
```

## Deploy
Import the repo in Vercel. Framework preset: Next.js. Add env vars from `.env.example`.

## Note on live previews
Previews are scaled iframes of the real sites. If a site blocks framing, the card falls back to a styled placeholder; add a screenshot via `image`.

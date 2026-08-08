# Eurotech Ads Subdomain

React SPA for Eurotech ads landing pages (`ads.eurotechworld.net`).

## Pages

- `/` — Home hub
- `/robotic-welding-course`
- `/ce-mark`
- `/plumbing-training`
- `/welding-training-courses`

All pages are `noindex, nofollow` and include a shared lead form posting to the n8n `euro-common` webhook.

## Develop

```bash
npm install
npm run dev
```

Optional: copy `.env.example` to `.env` and set `VITE_FORM_WEBHOOK`.

## Build

```bash
npm run build
npm run preview
```

SPA fallback is configured via `public/_redirects` (Netlify) and `vercel.json`.

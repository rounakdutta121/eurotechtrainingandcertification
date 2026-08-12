# Eurotech Ads Subdomain

Next.js site for Eurotech ads landing pages (`ads.eurotechworld.net`).

## Pages

- `/` — Home hub
- `/about`
- `/robotic-welding-course`
- `/ce-mark`
- `/plumbing-training`
- `/welding-training-courses`
- `/privacy-policy`

All pages are `noindex, nofollow` and include a shared lead form posting to the form webhook.

## Develop

```bash
npm install
npm run dev
```

Optional: copy `.env.example` to `.env` and set `NEXT_PUBLIC_FORM_WEBHOOK`.

## Build

```bash
npm run build
npm start
```

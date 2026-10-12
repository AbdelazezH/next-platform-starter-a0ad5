# [Studio Name] Platform: Version 2

This version uses a cloud-sky hero, floating portfolio gallery, clean Manrope typography, and lime accents, based on the second visual reference. The full original notebook design is preserved in the sibling `version 1/` directory.

Run from the parent workspace using `npm run dev:v2` (port 3001), or install dependencies in this folder and use `npm run dev -- --port 3001`.

The built-in image-generation tool created `public/brand/sky-hero.png`. Prompt: "Vivid azure and cyan daylight sky, soft white cumulus clouds framing the lower edges, open blue upper area for text, natural photography, no text or objects."

A responsive demo platform for a fixed-price branding studio. It covers the public marketing site, package selection, onboarding brief, demo checkout, client portal, admin workspace, and designer workspace.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Demo journey

1. Visit `/packages` and choose a package.
2. Complete the stepper at `/order/logo-essentials`, `/order/brand-identity`, or `/order/complete-brand-launch`.
3. Use demo payment on the review step. The order and project are saved in browser storage.
4. Visit `/admin` or `/designer` to upload concepts, change project status, and add final deliverables.
5. Return to `/portal` to review concepts, request revisions, approve final assets, and download a demo ZIP.

## Integrations

The app runs in demo mode without credentials. Production configuration should add:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

The API route boundaries are in `app/api/pricing`, `app/api/checkout`, and `app/api/webhooks/stripe`. Browser storage should be replaced with Supabase tables and private storage buckets following `IMPLEMENTATION_PLAN.md`.

# Routes, Data Model, and Phases

## Routes

- `/` public homepage with selected work, package comparison, process, testimonials, FAQs, and CTA.
- `/portfolio` filterable work grid.
- `/portfolio/[slug]` case study with brief, creative direction, and delivered assets.
- `/packages` editable package tiers and extras summary.
- `/how-it-works` package-to-delivery process.
- `/about` studio, team, contact form, and consultation booking.
- `/contact` inquiry form.
- `/privacy`, `/terms`, `/refund` policy placeholders.
- `/order/[packageId]` package purchase flow: contact, extras, brief, review, payment, project handoff.
- `/checkout/success` demo payment confirmation.
- `/sign-in` email-link sign-in placeholder.
- `/portal` client project dashboard.
- `/portal/projects/[id]` client workspace with brief, concepts, feedback, revisions, final approval, invoice, and downloads.
- `/admin` role workspace for packages, orders, assignment, deadlines, portfolio, FAQs, content, payment records, and refunds.
- `/designer` role workspace for assigned briefs, concepts, messages, versions, and final deliverables.
- `/api/pricing` server-side price calculation.
- `/api/checkout` Stripe checkout boundary with demo fallback.
- `/api/webhooks/stripe` verified, idempotent webhook boundary.

## Data Model

- `users`: id, role, name, email, company, created_at.
- `packages`: id, name, price_cents, summary, concepts, revision_rounds, delivery_days, deliverables, active.
- `extras`: id, name, price_cents, description, delivery_day_delta.
- `orders`: id, user_id, package_snapshot, extras_snapshot, subtotal_cents, total_cents, payment_status, stripe_checkout_id, created_at.
- `briefs`: id, order_id, brand_name, tagline, industry, business_description, audience, personality, impression, styles, colors, typography, competitors, inspiration_links, uploads, existing_assets, requirements, status, updated_at.
- `projects`: id, order_id, client_id, designer_id, status, payment_status, estimated_delivery_date, revision_allowance, revision_rounds_used, created_at.
- `project_messages`: id, project_id, author_id, visibility, body, attachments, created_at.
- `concepts`: id, project_id, title, direction, version, asset_urls, status, created_at.
- `feedback`: id, concept_id, project_id, client_id, body, selected_direction, revision_requested, created_at.
- `deliverables`: id, project_id, title, file_url, file_type, approved, created_at.
- `payments`: id, order_id, provider, provider_event_id, amount_cents, status, idempotency_key, created_at.
- `content_blocks`: id, key, value_json, updated_at.

## Implementation Phases

1. Demo shell: public routes, editable content model, order stepper, client/admin/designer workspaces, and browser-persisted demo data.
2. Supabase persistence: auth email links, row-level security, project-level access, private storage buckets, signed URLs, and file validation.
3. Stripe payments: Checkout Sessions, idempotent webhook storage, payment verification, refunds, and order snapshots.
4. Notifications: email updates for brief completion, payment, concept upload, feedback, revisions, approval, and delivery.
5. Hardening: audit logs, admin permissions, upload scanning, analytics, deadline reminders, and production QA.

import { NextRequest, NextResponse } from "next/server";

const processedEvents = new Set<string>();

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const body = await request.text();

  if (webhookSecret && !signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let eventId = "";
  try {
    const parsed = JSON.parse(body) as { id?: string; type?: string };
    eventId = parsed.id ?? "";
  } catch {
    return NextResponse.json({ error: "Invalid webhook body" }, { status: 400 });
  }

  if (!eventId) {
    return NextResponse.json({ error: "Missing event id" }, { status: 400 });
  }

  if (processedEvents.has(eventId)) {
    return NextResponse.json({ received: true, duplicate: true });
  }
  processedEvents.add(eventId);

  return NextResponse.json({
    received: true,
    verified: Boolean(webhookSecret),
    note: "Production should verify the Stripe signature with stripe.webhooks.constructEvent, persist the event id, and atomically update payment status."
  });
}

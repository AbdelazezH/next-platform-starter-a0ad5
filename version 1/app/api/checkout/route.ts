import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { calculateOrder } from "@/lib/pricing";

const schema = z.object({
  packageId: z.string(),
  extraIds: z.array(z.string()).default([]),
  customerEmail: z.string().email().optional()
});

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid checkout request" }, { status: 400 });
  }

  const order = calculateOrder(parsed.data.packageId, parsed.data.extraIds);
  const hasStripe = Boolean(process.env.STRIPE_SECRET_KEY);

  if (!hasStripe) {
    return NextResponse.json({
      mode: "demo",
      message: "Stripe credentials unavailable. Use the local demo payment button.",
      order
    });
  }

  return NextResponse.json({
    mode: "stripe-required",
    message: "Create a Stripe Checkout Session here with package and extras snapshots, then verify completion in the webhook.",
    order
  });
}

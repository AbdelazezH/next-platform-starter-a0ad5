import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { calculateOrder } from "@/lib/pricing";

const schema = z.object({
  packageId: z.string(),
  extraIds: z.array(z.string()).default([])
});

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid pricing request" }, { status: 400 });
  }

  try {
    return NextResponse.json(calculateOrder(parsed.data.packageId, parsed.data.extraIds));
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Pricing failed" }, { status: 400 });
  }
}

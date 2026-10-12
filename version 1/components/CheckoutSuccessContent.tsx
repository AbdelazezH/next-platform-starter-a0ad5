"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui";

export function CheckoutSuccessContent() {
  const params = useSearchParams();
  const project = params.get("project");

  return (
    <Card className="max-w-2xl p-8">
      <CheckCircle2 size={34} className="text-fern" />
      <p className="mt-4 leading-7 text-ink/70">
        Demo payment is marked paid. In production, the project would unlock only after Stripe confirms the payment webhook.
      </p>
      <Link href={project ? `/portal/projects/${project}` : "/portal"} className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bone">
        Open project dashboard
      </Link>
    </Card>
  );
}

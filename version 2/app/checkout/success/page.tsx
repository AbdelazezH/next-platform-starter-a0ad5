import { Suspense } from "react";
import { CheckoutSuccessContent } from "@/components/CheckoutSuccessContent";
import { Section } from "@/components/ui";

export default function CheckoutSuccessPage() {
  return (
    <main>
      <Section eyebrow="Payment complete" title="Your project workspace is ready.">
        <Suspense fallback={<div className="rounded-lg border border-ink/10 bg-white/70 p-8">Preparing project link...</div>}>
          <CheckoutSuccessContent />
        </Suspense>
      </Section>
    </main>
  );
}

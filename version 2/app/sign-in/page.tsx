import { Mail } from "lucide-react";
import { Card, Field, Section, inputClass } from "@/components/ui";

export default function SignInPage() {
  return (
    <main>
      <Section eyebrow="Secure access" title="Email sign-in link.">
        <Card className="max-w-xl p-6">
          <p className="leading-7 text-ink/65">
            Demo mode shows the intended authentication entry. Production should send a Supabase magic link and enforce role-based project access.
          </p>
          <form className="mt-5 grid gap-4">
            <Field label="Email"><input className={inputClass} type="email" placeholder="you@example.com" /></Field>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bone">
              <Mail size={16} /> Send sign-in link
            </button>
          </form>
        </Card>
      </Section>
    </main>
  );
}

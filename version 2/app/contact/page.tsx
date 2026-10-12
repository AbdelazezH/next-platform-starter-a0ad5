import { Mail } from "lucide-react";
import { Card, Field, Section, inputClass } from "@/components/ui";

export default function ContactPage() {
  return (
    <main>
      <Section eyebrow="Contact" title="Tell the studio what you are trying to launch.">
        <Card className="max-w-2xl p-6">
          <form className="grid gap-4">
            <Field label="Name"><input className={inputClass} /></Field>
            <Field label="Email"><input className={inputClass} type="email" /></Field>
            <Field label="Company"><input className={inputClass} /></Field>
            <Field label="Message"><textarea className={inputClass} rows={6} /></Field>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bone">
              <Mail size={16} /> Send message
            </button>
          </form>
        </Card>
      </Section>
    </main>
  );
}

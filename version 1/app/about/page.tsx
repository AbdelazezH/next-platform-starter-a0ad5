import { CalendarDays, Mail } from "lucide-react";
import { Card, Field, Section, inputClass } from "@/components/ui";
import { studio } from "@/lib/content";

export default function AboutPage() {
  return (
    <main>
      <Section eyebrow="About" title="A focused studio model for brand identity projects.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-6">
            <p className="text-lg leading-8 text-ink/70">
              {studio.name} is a demo identity studio built around transparent scope, structured feedback, and practical delivery. The public site is expressive; the dashboards are intentionally clear so clients and designers can keep momentum.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Creative lead", "Brand designer", "Project manager"].map((role) => (
                <div key={role} className="rounded-md border border-ink/10 bg-bone p-4">
                  <p className="font-semibold">{role}</p>
                  <p className="mt-2 text-sm text-ink/55">Sample team role</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold">Inquiry form</h2>
            <form className="mt-5 grid gap-4">
              <Field label="Name"><input className={inputClass} placeholder="Your name" /></Field>
              <Field label="Email"><input className={inputClass} placeholder="you@example.com" type="email" /></Field>
              <Field label="Project note"><textarea className={inputClass} rows={5} placeholder="Tell us what you are building." /></Field>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bone" type="button">
                <Mail size={16} /> Send inquiry
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink" type="button">
                <CalendarDays size={16} /> {studio.bookingLabel}
              </button>
            </form>
          </Card>
        </div>
      </Section>
    </main>
  );
}

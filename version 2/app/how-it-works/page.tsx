import { Card, Section } from "@/components/ui";

const steps = [
  ["Package selection", "Compare inclusions, concepts, revision allowance, delivery timeline, and optional extras."],
  ["Brief submission", "Answer focused prompts for brand name, audience, personality, style, colors, competitors, references, and uploads."],
  ["Payment", "Demo mode completes instantly. Production mode should verify Stripe payment before the project starts."],
  ["Concept review", "Preview designs, compare directions, choose a preferred route, and submit consolidated feedback."],
  ["Revisions", "Track remaining revision rounds while the designer uploads new versions and client-visible notes."],
  ["Final delivery", "Confirm approval, then download individual final assets, invoice, and a complete ZIP."]
];

export default function HowItWorksPage() {
  return (
    <main>
      <Section eyebrow="How it works" title="A clear studio workflow from checkout to final assets.">
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map(([title, body], index) => (
            <Card key={title} className="p-6">
              <p className="text-sm font-semibold text-coral">Step {index + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-ink/65">{body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}

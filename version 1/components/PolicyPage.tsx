import { Card, Section } from "./ui";

export function PolicyPage({ title, body }: { title: string; body: string }) {
  return (
    <main>
      <Section eyebrow="Policy" title={title}>
        <Card className="max-w-3xl p-6">
          <p className="leading-8 text-ink/70">{body}</p>
        </Card>
      </Section>
    </main>
  );
}

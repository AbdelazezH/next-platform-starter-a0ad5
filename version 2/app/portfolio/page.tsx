import { PortfolioFilter } from "@/components/PortfolioFilter";
import { Section } from "@/components/ui";

export default function PortfolioPage() {
  return (
    <main>
      <Section
        eyebrow="selected work / sample projects"
        title="A few ideas, out in the world."
      >
        <PortfolioFilter />
      </Section>
    </main>
  );
}

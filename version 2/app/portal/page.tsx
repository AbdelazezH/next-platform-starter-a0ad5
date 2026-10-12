import { PortalDashboard } from "@/components/ProjectViews";
import { Section } from "@/components/ui";

export default function PortalPage() {
  return (
    <main>
      <Section eyebrow="Client portal" title="Active and completed projects.">
        <PortalDashboard />
      </Section>
    </main>
  );
}

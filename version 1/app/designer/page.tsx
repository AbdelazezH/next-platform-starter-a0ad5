import { AdminWorkspace } from "@/components/ProjectViews";
import { Section } from "@/components/ui";

export default function DesignerPage() {
  return (
    <main>
      <Section eyebrow="Designer workspace" title="Assigned briefs, concepts, feedback, and final deliverables.">
        <AdminWorkspace designerMode />
      </Section>
    </main>
  );
}

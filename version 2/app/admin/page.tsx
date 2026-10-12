import { AdminWorkspace } from "@/components/ProjectViews";
import { Section } from "@/components/ui";

export default function AdminPage() {
  return (
    <main>
      <Section eyebrow="Admin workspace" title="Manage orders, content, assignments, deadlines, payments, and refunds.">
        <AdminWorkspace />
      </Section>
    </main>
  );
}

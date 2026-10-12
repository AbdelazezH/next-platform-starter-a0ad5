import { ClientProject } from "@/components/ProjectViews";
import { Section } from "@/components/ui";

export default function ClientProjectPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <Section eyebrow="Project workspace" title="Review concepts, request revisions, approve, and download.">
        <ClientProject projectId={params.id} />
      </Section>
    </main>
  );
}

import { notFound } from "next/navigation";
import { OrderFlow } from "@/components/OrderFlow";
import { Section } from "@/components/ui";
import { packages } from "@/lib/content";
import type { PackageId } from "@/lib/types";

export function generateStaticParams() {
  return packages.map((pkg) => ({ packageId: pkg.id }));
}

export default function OrderPage({ params }: { params: { packageId: PackageId } }) {
  const selectedPackage = packages.find((pkg) => pkg.id === params.packageId);
  if (!selectedPackage) notFound();

  return (
    <main>
      <Section eyebrow="Start a project" title="Choose package → brief → payment → dashboard.">
        <OrderFlow packageId={params.packageId} />
      </Section>
    </main>
  );
}

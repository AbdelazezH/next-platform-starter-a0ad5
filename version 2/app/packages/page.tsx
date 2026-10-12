import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { extras, formatMoney, packages } from "@/lib/content";

export default function PackagesPage() {
  return (
    <main>
      <Section eyebrow="let's make something" title="Big ideas. Clear prices.">
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <article
              key={pkg.id}
              className={`package-paper package-paper-${index}`}
            >
              <p className="micro-label">
                0{index + 1} / {pkg.bestFor}
              </p>
              <h2 className="mt-3 font-display text-3xl">{pkg.name}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                {pkg.summary}
              </p>
              <p className="mt-6 text-4xl font-semibold">
                {formatMoney(pkg.price)}
              </p>
              <p className="mt-2 text-sm text-ink/55">
                {pkg.concepts} concepts · {pkg.revisions} revision rounds ·{" "}
                {pkg.timeline}
              </p>
              <div className="mt-6 grid gap-3">
                {pkg.deliverables.map((item) => (
                  <p key={item} className="flex gap-2 text-sm text-ink/70">
                    <Check size={17} className="mt-0.5 shrink-0 text-fern" />
                    {item}
                  </p>
                ))}
              </div>
              <Link href={`/order/${pkg.id}`} className="package-start mt-8">
                Choose package
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="a little something extra" title="Make it your own.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {extras.map((extra) => (
            <Card key={extra.id} className="p-5">
              <h2 className="font-semibold">{extra.name}</h2>
              <p className="mt-2 text-2xl font-semibold">
                {formatMoney(extra.price)}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                {extra.description}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-denim">
                {extra.deliveryImpact}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}

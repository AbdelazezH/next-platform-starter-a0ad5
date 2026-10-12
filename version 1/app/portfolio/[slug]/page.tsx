import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { projects } from "@/lib/content";
import { ProjectArtwork } from "@/components/ProjectArtwork";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main>
      <Section>
        <Link
          href="/portfolio"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ink/65 hover:text-ink"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
              {project.industry} · {project.service}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              {project.summary}
            </p>
          </div>
          <div
            className={`portfolio-art-wrap case-study-art portfolio-art-${project.slug}`}
          >
            <div className="portfolio-art taped-art">
              <ProjectArtwork slug={project.slug} />
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-xl font-semibold">Brief</h2>
            <p className="mt-3 leading-7 text-ink/65">{project.brief}</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold">Creative direction</h2>
            <p className="mt-3 leading-7 text-ink/65">{project.direction}</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold">Delivered assets</h2>
            <div className="mt-4 grid gap-2">
              {project.assets.map((asset) => (
                <p
                  key={asset}
                  className="flex items-center gap-2 text-sm text-ink/70"
                >
                  <Download size={15} className="text-denim" />
                  {asset}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}

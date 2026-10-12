"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { Card } from "./ui";
import { ProjectArtwork } from "./ProjectArtwork";

export function PortfolioFilter() {
  const [industry, setIndustry] = useState("All");
  const [service, setService] = useState("All");
  const industries = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.industry))),
  ];
  const services = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.service))),
  ];
  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (industry === "All" || project.industry === industry) &&
          (service === "All" || project.service === service),
      ),
    [industry, service],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        <select
          className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          aria-label="Filter by industry"
        >
          {industries.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm"
          value={service}
          onChange={(event) => setService(event.target.value)}
          aria-label="Filter by service"
        >
          {services.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group"
          >
            <Card className="portfolio-card transition hover:-translate-y-1">
              <div
                className={`portfolio-art-wrap portfolio-art-${project.slug}`}
              >
                <div className="portfolio-art taped-art">
                  <ProjectArtwork slug={project.slug} />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coral">
                  {project.industry} · {project.service}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <h2 className="font-display text-3xl">{project.title}</h2>
                  <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-3 leading-7 text-ink/65">{project.summary}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <Card className="p-8 text-center text-ink/60">
          No projects match those filters yet.
        </Card>
      )}
    </div>
  );
}

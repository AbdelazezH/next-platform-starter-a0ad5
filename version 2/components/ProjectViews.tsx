"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Download, MessageSquare, PackageOpen, Plus, RotateCcw, Send, ShieldCheck } from "lucide-react";
import { formatMoney } from "@/lib/content";
import { getProjects, makeConcept, makeDeliverable, saveProjects, statuses, upsertProject } from "@/lib/demo-store";
import type { ProjectStatus, StudioProject } from "@/lib/types";
import { Card, Field, inputClass } from "./ui";

function useProjects() {
  const [projects, setProjects] = useState<StudioProject[]>([]);
  useEffect(() => setProjects(getProjects()), []);
  const update = (next: StudioProject[]) => {
    saveProjects(next);
    setProjects(next);
  };
  return { projects, update };
}

export function PortalDashboard() {
  const { projects } = useProjects();

  if (!projects.length) {
    return (
      <Card className="p-8 text-center">
        <PackageOpen className="mx-auto text-denim" size={32} />
        <h2 className="mt-4 text-2xl font-semibold">No projects yet</h2>
        <p className="mt-2 text-ink/60">Start with a package to create a client workspace.</p>
        <Link href="/packages" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bone">View packages</Link>
      </Card>
    );
  }

  return (
    <div className="grid gap-5">
      {projects.map((project) => (
        <Link key={project.id} href={`/portal/projects/${project.id}`} className="group">
          <Card className="p-5 transition hover:-translate-y-1 hover:shadow-soft">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold text-coral">{project.package.name}</p>
                <h2 className="mt-1 text-2xl font-semibold">{project.brief.brandName || project.company || "Untitled brand project"}</h2>
                <p className="mt-2 text-sm text-ink/60">Next action: {nextAction(project.status)}</p>
              </div>
              <div className="grid gap-1 text-sm md:text-right">
                <span className="font-semibold">{project.status}</span>
                <span className="text-ink/55">Payment: {project.paymentStatus}</span>
                <span className="text-ink/55">ETA: {project.estimatedDelivery}</span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function ClientProject({ projectId }: { projectId: string }) {
  const [project, setProject] = useState<StudioProject | null>(null);
  const [feedback, setFeedback] = useState("");
  const [selectedConcept, setSelectedConcept] = useState("");

  useEffect(() => {
    setProject(getProjects().find((item) => item.id === projectId) ?? null);
  }, [projectId]);

  function persist(next: StudioProject) {
    upsertProject(next);
    setProject(next);
  }

  if (!project) {
    return <Card className="p-8">Project not found. Create one through the package flow first.</Card>;
  }

  const remainingRevisions = Math.max(0, project.revisionAllowance - project.revisionsUsed);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="grid gap-6">
        <Card className="p-6">
          <p className="text-sm font-semibold text-coral">{project.package.name}</p>
          <h1 className="mt-2 font-display text-4xl">{project.brief.brandName || "Untitled brand project"}</h1>
          <div className="mt-5 grid gap-3 text-sm text-ink/65 sm:grid-cols-3">
            <p>Status: <strong className="text-ink">{project.status}</strong></p>
            <p>Payment: <strong className="text-ink">{project.paymentStatus}</strong></p>
            <p>ETA: <strong className="text-ink">{project.estimatedDelivery}</strong></p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold">Submitted brief</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Brand", project.brief.brandName],
              ["Tagline", project.brief.tagline],
              ["Industry", project.brief.industry],
              ["Audience", project.brief.audience],
              ["Personality", project.brief.personality],
              ["Preferred styles", project.brief.styles.join(", ") || "Not specified"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md bg-bone p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">{label}</p>
                <p className="mt-2 text-sm leading-6 text-ink/75">{value || "Not provided"}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Concept review</h2>
              <p className="mt-1 text-sm text-ink/55">{remainingRevisions} revision rounds remaining</p>
            </div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.concepts.map((concept) => (
              <button
                key={concept.id}
                type="button"
                onClick={() => setSelectedConcept(concept.id)}
                className={`overflow-hidden rounded-lg border bg-white text-left transition ${selectedConcept === concept.id ? "border-denim ring-2 ring-denim/25" : "border-ink/10"}`}
              >
                <div className="relative aspect-[16/10]">
                  <Image src="/brand/studio-board.png" alt="" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{concept.title} · v{concept.version}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{concept.direction}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-coral">{concept.status}</p>
                </div>
              </button>
            ))}
            {!project.concepts.length && <div className="rounded-lg border border-dashed border-ink/20 p-8 text-center text-ink/55 md:col-span-2">No concepts uploaded yet.</div>}
          </div>
          <div className="mt-5 grid gap-3">
            <Field label="Consolidated feedback">
              <textarea className={inputClass} rows={4} value={feedback} onChange={(event) => setFeedback(event.target.value)} placeholder="Select the strongest direction and give one clear feedback note." />
            </Field>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={!selectedConcept || !feedback || remainingRevisions === 0}
                onClick={() => {
                  const next: StudioProject = {
                    ...project,
                    status: "Revisions in progress",
                    revisionsUsed: project.revisionsUsed + 1,
                    concepts: project.concepts.map((concept) =>
                      concept.id === selectedConcept ? { ...concept, status: "Revision requested", feedback } : concept
                    ),
                    messages: [...project.messages, { id: `msg-${Date.now()}`, author: project.clientName, visibility: "Client", body: feedback, createdAt: new Date().toISOString() }]
                  };
                  setFeedback("");
                  persist(next);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bone disabled:opacity-40"
              >
                <RotateCcw size={16} /> Request revision
              </button>
              <button
                type="button"
                disabled={!selectedConcept}
                onClick={() => {
                  const confirmed = window.confirm("Confirm final approval for this concept? This locks the direction for final delivery.");
                  if (!confirmed) return;
                  persist({
                    ...project,
                    status: "Finalizing",
                    concepts: project.concepts.map((concept) => concept.id === selectedConcept ? { ...concept, status: "Approved" } : concept)
                  });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold disabled:opacity-40"
              >
                <ShieldCheck size={16} /> Approve selected direction
              </button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold">Final deliverables</h2>
          <div className="mt-4 grid gap-3">
            {project.deliverables.map((deliverable) => (
              <div key={deliverable.id} className="flex flex-col justify-between gap-3 rounded-md border border-ink/10 bg-white p-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold">{deliverable.title}</p>
                  <p className="text-sm text-ink/55">{deliverable.fileType}</p>
                </div>
                <button type="button" onClick={() => downloadText(`${deliverable.title}.${deliverable.fileType.toLowerCase()}`, "Demo deliverable file")} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bone">
                  <Download size={16} /> Download
                </button>
              </div>
            ))}
            {!project.deliverables.length && <p className="rounded-md border border-dashed border-ink/20 p-5 text-center text-ink/55">Final files will appear here after approval.</p>}
          </div>
          <button type="button" disabled={!project.deliverables.length} onClick={() => downloadText(`${project.id}-final-assets.zip`, "Demo ZIP containing final approved assets")} className="mt-5 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold disabled:opacity-40">
            Download final ZIP
          </button>
        </Card>
      </div>

      <aside className="h-fit rounded-lg border border-ink/10 bg-white/80 p-5 shadow-sm lg:sticky lg:top-24">
        <h2 className="text-xl font-semibold">Order summary</h2>
        <div className="mt-4 grid gap-2 text-sm text-ink/65">
          <p>Order: {project.orderId}</p>
          <p>Invoice: {project.invoiceNumber}</p>
          <p>Total: {formatMoney(project.total)}</p>
          <p>Designer: {project.designer}</p>
        </div>
        <div className="mt-5 border-t border-ink/10 pt-5">
          <h3 className="font-semibold">Messages</h3>
          <div className="mt-3 grid gap-3">
            {project.messages.filter((message) => message.visibility === "Client").map((message) => (
              <div key={message.id} className="rounded-md bg-bone p-3 text-sm">
                <p className="font-semibold">{message.author}</p>
                <p className="mt-1 leading-6 text-ink/65">{message.body}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export function AdminWorkspace({ designerMode = false }: { designerMode?: boolean }) {
  const { projects, update } = useProjects();
  const [conceptTitle, setConceptTitle] = useState("Concept presentation");
  const [conceptDirection, setConceptDirection] = useState("A refined direction with strong type, flexible mark usage, and launch-ready assets.");
  const [internalNote, setInternalNote] = useState("");
  const activeProjects = useMemo(() => projects.filter((project) => designerMode ? project.designer !== "Unassigned" : true), [designerMode, projects]);

  function patchProject(id: string, patch: Partial<StudioProject>) {
    update(projects.map((project) => project.id === id ? { ...project, ...patch } : project));
  }

  if (!projects.length) {
    return <Card className="p-8 text-center">No orders yet. Complete a demo checkout to populate this workspace.</Card>;
  }

  return (
    <div className="grid gap-6">
      {!designerMode && (
        <Card className="p-6">
          <h2 className="text-2xl font-semibold">Package and content controls</h2>
          <p className="mt-2 text-sm leading-6 text-ink/60">
            Demo mode keeps editable services, prices, timelines, portfolio projects, FAQs, and website copy in local records. Production should move these controls to Supabase tables with Admin-only policies.
          </p>
        </Card>
      )}

      {activeProjects.map((project) => (
        <Card key={project.id} className="p-6">
          <div className="flex flex-col justify-between gap-5 lg:flex-row">
            <div>
              <p className="text-sm font-semibold text-coral">{project.package.name} · {project.paymentStatus}</p>
              <h2 className="mt-2 text-2xl font-semibold">{project.brief.brandName || project.company || project.clientName}</h2>
              <p className="mt-2 text-sm text-ink/60">{project.clientName} · {project.clientEmail}</p>
              <p className="mt-2 text-sm text-ink/60">Deadline: {project.estimatedDelivery}</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[420px]">
              <select className={inputClass} value={project.status} onChange={(event) => patchProject(project.id, { status: event.target.value as ProjectStatus })}>
                {statuses.map((status) => <option key={status}>{status}</option>)}
              </select>
              {!designerMode && (
                <select className={inputClass} value={project.designer} onChange={(event) => patchProject(project.id, { designer: event.target.value })}>
                  {["Unassigned", "Avery", "Noor", "Sam"].map((designer) => <option key={designer}>{designer}</option>)}
                </select>
              )}
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-lg bg-bone p-5">
              <h3 className="font-semibold">Brief</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{project.brief.description || "No description provided."}</p>
              <p className="mt-3 text-sm leading-6 text-ink/65">Audience: {project.brief.audience || "Not provided"}</p>
            </div>
            <div className="grid gap-3">
              <Field label="Concept title"><input className={inputClass} value={conceptTitle} onChange={(event) => setConceptTitle(event.target.value)} /></Field>
              <Field label="Direction note"><textarea className={inputClass} rows={3} value={conceptDirection} onChange={(event) => setConceptDirection(event.target.value)} /></Field>
              <button
                type="button"
                onClick={() => patchProject(project.id, { status: "Awaiting client feedback", concepts: [...project.concepts, makeConcept(conceptTitle, conceptDirection)] })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bone"
              >
                <Plus size={16} /> Upload concept version
              </button>
              <button
                type="button"
                onClick={() => patchProject(project.id, { status: "Completed", deliverables: [...project.deliverables, makeDeliverable("Final approved asset pack", "ZIP")] })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold"
              >
                <Download size={16} /> Upload final deliverable
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            <Field label="Internal team note">
              <textarea className={inputClass} rows={2} value={internalNote} onChange={(event) => setInternalNote(event.target.value)} placeholder="Hidden from client" />
            </Field>
            <button
              type="button"
              onClick={() => {
                if (!internalNote) return;
                patchProject(project.id, {
                  messages: [...project.messages, { id: `msg-${Date.now()}`, author: designerMode ? "Designer" : "Admin", visibility: "Internal", body: internalNote, createdAt: new Date().toISOString() }]
                });
                setInternalNote("");
              }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold"
            >
              <MessageSquare size={16} /> Save internal note
            </button>
          </div>

          {!designerMode && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-ink/10 pt-5">
              <button type="button" onClick={() => patchProject(project.id, { paymentStatus: "Refund pending" })} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold">
                Mark refund review
              </button>
              <button type="button" onClick={() => patchProject(project.id, { paymentStatus: "Refunded" })} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold">
                Process demo refund
              </button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

function nextAction(status: string) {
  const actions: Record<string, string> = {
    "Awaiting brief": "Complete your brief",
    "Ready to start": "Studio review",
    "In progress": "Wait for first concepts",
    "Awaiting client feedback": "Review concepts",
    "Revisions in progress": "Designer is revising",
    Finalizing: "Await final files",
    Completed: "Download deliverables"
  };
  return actions[status] ?? "Open workspace";
}

function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

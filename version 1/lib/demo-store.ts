"use client";

import { extras, packages } from "./content";
import type { Brief, Concept, Deliverable, Extra, ProjectStatus, StudioPackage, StudioProject } from "./types";

const PROJECTS_KEY = "studio-demo-projects";
const CONTENT_KEY = "studio-demo-content";

const blankBrief: Brief = {
  brandName: "",
  tagline: "",
  description: "",
  industry: "",
  audience: "",
  personality: "",
  impression: "",
  styles: [],
  colors: "",
  typography: "",
  competitors: "",
  inspiration: "",
  referenceUploads: [],
  existingAssets: "",
  requirements: ""
};

export function getEditableContent() {
  if (typeof window === "undefined") return { packages, extras };
  const saved = window.localStorage.getItem(CONTENT_KEY);
  if (!saved) return { packages, extras };
  return JSON.parse(saved) as { packages: StudioPackage[]; extras: Extra[] };
}

export function saveEditableContent(content: { packages: StudioPackage[]; extras: Extra[] }) {
  window.localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
}

export function getProjects(): StudioProject[] {
  if (typeof window === "undefined") return [];
  const saved = window.localStorage.getItem(PROJECTS_KEY);
  return saved ? (JSON.parse(saved) as StudioProject[]) : [];
}

export function saveProjects(projectsToSave: StudioProject[]) {
  window.localStorage.setItem(PROJECTS_KEY, JSON.stringify(projectsToSave));
}

export function upsertProject(project: StudioProject) {
  const current = getProjects();
  const next = current.some((item) => item.id === project.id)
    ? current.map((item) => (item.id === project.id ? project : item))
    : [project, ...current];
  saveProjects(next);
}

export function createProjectFromOrder(input: {
  clientName: string;
  clientEmail: string;
  company?: string;
  selectedPackage: StudioPackage;
  selectedExtras: Extra[];
  brief: Brief;
  total: number;
}) {
  const now = new Date();
  const delivery = new Date(now);
  delivery.setDate(now.getDate() + input.selectedPackage.deliveryDays);

  const project: StudioProject = {
    id: `prj-${Date.now()}`,
    orderId: `ord-${Date.now()}`,
    clientName: input.clientName,
    clientEmail: input.clientEmail,
    company: input.company,
    package: input.selectedPackage,
    extras: input.selectedExtras,
    total: input.total,
    paymentStatus: "Paid",
    status: "Ready to start",
    designer: "Unassigned",
    estimatedDelivery: delivery.toISOString().slice(0, 10),
    brief: input.brief,
    concepts: [],
    deliverables: [],
    messages: [
      {
        id: `msg-${Date.now()}`,
        author: "[Studio Name]",
        visibility: "Client",
        body: "Payment received and brief saved. Your project is ready for studio review.",
        createdAt: now.toISOString()
      }
    ],
    revisionAllowance: input.selectedPackage.revisions,
    revisionsUsed: 0,
    invoiceNumber: `INV-${now.getFullYear()}-${String(Date.now()).slice(-5)}`
  };
  upsertProject(project);
  return project;
}

export function makeConcept(title: string, direction: string, version = 1): Concept {
  return {
    id: `con-${Date.now()}`,
    title,
    direction,
    version,
    createdAt: new Date().toISOString(),
    preview: "studio-board.png",
    status: "New"
  };
}

export function makeDeliverable(title: string, fileType: string): Deliverable {
  return {
    id: `del-${Date.now()}`,
    title,
    fileType,
    createdAt: new Date().toISOString(),
    approved: false
  };
}

export function buildBlankBrief(overrides: Partial<Brief> = {}) {
  return { ...blankBrief, ...overrides };
}

export const statuses: ProjectStatus[] = [
  "Awaiting brief",
  "Ready to start",
  "In progress",
  "Awaiting client feedback",
  "Revisions in progress",
  "Finalizing",
  "Completed"
];

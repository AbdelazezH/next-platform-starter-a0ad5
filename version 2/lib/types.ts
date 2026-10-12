export type PackageId = "logo-essentials" | "brand-identity" | "complete-brand-launch";

export type StudioPackage = {
  id: PackageId;
  name: string;
  price: number;
  summary: string;
  concepts: number;
  revisions: number;
  timeline: string;
  deliveryDays: number;
  deliverables: string[];
  bestFor: string;
};

export type Extra = {
  id: string;
  name: string;
  price: number;
  description: string;
  deliveryImpact: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  industry: string;
  service: string;
  summary: string;
  brief: string;
  direction: string;
  assets: string[];
  palette: string[];
};

export type ProjectStatus =
  | "Awaiting brief"
  | "Ready to start"
  | "In progress"
  | "Awaiting client feedback"
  | "Revisions in progress"
  | "Finalizing"
  | "Completed";

export type Brief = {
  brandName: string;
  tagline: string;
  description: string;
  industry: string;
  audience: string;
  personality: string;
  impression: string;
  styles: string[];
  colors: string;
  typography: string;
  competitors: string;
  inspiration: string;
  referenceUploads: string[];
  existingAssets: string;
  requirements: string;
};

export type Concept = {
  id: string;
  title: string;
  direction: string;
  version: number;
  createdAt: string;
  preview: string;
  status: "New" | "Selected" | "Revision requested" | "Approved";
  feedback?: string;
};

export type Deliverable = {
  id: string;
  title: string;
  fileType: string;
  createdAt: string;
  approved: boolean;
};

export type StudioProject = {
  id: string;
  orderId: string;
  clientName: string;
  clientEmail: string;
  company?: string;
  package: StudioPackage;
  extras: Extra[];
  total: number;
  paymentStatus: "Unpaid" | "Paid" | "Refund pending" | "Refunded";
  status: ProjectStatus;
  designer: string;
  estimatedDelivery: string;
  brief: Brief;
  concepts: Concept[];
  deliverables: Deliverable[];
  messages: { id: string; author: string; visibility: "Client" | "Internal"; body: string; createdAt: string }[];
  revisionAllowance: number;
  revisionsUsed: number;
  invoiceNumber: string;
};

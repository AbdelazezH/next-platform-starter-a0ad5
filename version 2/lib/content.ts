import type { Extra, PortfolioProject, StudioPackage } from "./types";

export const studio = {
  name: "[Studio Name]",
  tagline: "Fixed-price branding for teams that need momentum, clarity, and files they can actually use.",
  email: "hello@studio-name.example",
  bookingLabel: "Book a consultation"
};

export const packages: StudioPackage[] = [
  {
    id: "logo-essentials",
    name: "Logo Essentials",
    price: 1200,
    summary: "A focused logo direction for new ideas, pilots, and lean launches.",
    concepts: 2,
    revisions: 2,
    timeline: "7 business days",
    deliveryDays: 7,
    bestFor: "Founders validating a new offer",
    deliverables: ["Primary logo", "Alternate mark", "Color palette", "Basic usage sheet", "PNG, SVG, and PDF exports"]
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    price: 2800,
    summary: "A complete identity system with logo, type, color, and launch-ready assets.",
    concepts: 3,
    revisions: 3,
    timeline: "14 business days",
    deliveryDays: 14,
    bestFor: "Startups and service businesses preparing to launch",
    deliverables: ["Logo system", "Typography direction", "Color system", "Mini brand guidelines", "Social avatar and cover", "Export pack"]
  },
  {
    id: "complete-brand-launch",
    name: "Complete Brand Launch",
    price: 5200,
    summary: "Identity, campaign assets, and practical launch collateral in one managed project.",
    concepts: 4,
    revisions: 4,
    timeline: "21 business days",
    deliveryDays: 21,
    bestFor: "Teams launching a full brand presence",
    deliverables: ["Full identity system", "Brand guidelines", "Stationery set", "Social launch kit", "Pitch/deck cover system", "Final ZIP and invoice"]
  }
];

export const extras: Extra[] = [
  { id: "additional-concepts", name: "Additional concept", price: 450, description: "One extra creative direction in the first presentation.", deliveryImpact: "+2 days" },
  { id: "social-assets", name: "Social media asset set", price: 650, description: "Profile, cover, and five post templates.", deliveryImpact: "+3 days" },
  { id: "stationery", name: "Stationery set", price: 500, description: "Business card, letterhead, and email signature.", deliveryImpact: "+2 days" },
  { id: "expedited", name: "Expedited delivery", price: 900, description: "Prioritized schedule where availability allows.", deliveryImpact: "-3 days" }
];

export const projects: PortfolioProject[] = [
  {
    slug: "northline-provisions",
    title: "Northline Provisions",
    industry: "Food & Beverage",
    service: "Brand Identity",
    summary: "A warm identity for a small-batch pantry brand built around confident shelf presence.",
    brief: "Create a premium but approachable identity for a preserved foods line entering boutique grocers.",
    direction: "Editorial typography, high-contrast labels, and a practical color system for seasonal flavors.",
    assets: ["Logo suite", "Packaging label system", "Color palette", "Retail shelf mockups"],
    palette: ["#171816", "#e56f58", "#f7f3ea", "#98aa39"]
  },
  {
    slug: "kinetic-labs",
    title: "Kinetic Labs",
    industry: "Technology",
    service: "Logo Essentials",
    summary: "A crisp mark and compact visual system for an analytics product in private beta.",
    brief: "Design a flexible logo that feels technical without leaning on generic data imagery.",
    direction: "Geometric forms, a restrained blue palette, and a symbol that works at app-icon scale.",
    assets: ["Primary logo", "Icon", "Type pairing", "Product splash screen"],
    palette: ["#171816", "#324c63", "#fffaf0", "#b8c8d4"]
  },
  {
    slug: "amble-house",
    title: "Amble House",
    industry: "Hospitality",
    service: "Complete Brand Launch",
    summary: "A calm launch system for a design-led guest house and retreat space.",
    brief: "Build a complete identity and collateral kit for a slow-travel hospitality concept.",
    direction: "Quiet luxury, tactile print details, and modular assets for booking and social channels.",
    assets: ["Brand guidelines", "Stationery", "Social launch kit", "Guest card system"],
    palette: ["#2e332c", "#d8cbb7", "#fffaf0", "#cf806a"]
  },
  {
    slug: "tidework-studio",
    title: "Tidework Studio",
    industry: "Creative Services",
    service: "Brand Identity",
    summary: "A confident repositioning for a production studio moving into retained client work.",
    brief: "Shift perception from freelance production to a reliable creative partner.",
    direction: "Large typography, modular layout devices, and a flexible presentation template.",
    assets: ["Logo refresh", "Pitch cover", "Social templates", "Guidelines"],
    palette: ["#171816", "#f7f3ea", "#e56f58", "#324c63"]
  }
];

export const testimonials = [
  {
    quote: "Sample testimonial: the process made feedback easy to organize, and the final files were clearly labeled.",
    name: "Demo client",
    role: "Founder, sample wellness brand"
  },
  {
    quote: "Sample testimonial: package pricing helped us understand scope before we booked.",
    name: "Demo client",
    role: "Operator, sample hospitality project"
  }
];

export const faqs = [
  { q: "Can package content be edited?", a: "Yes. Packages, extras, timelines, FAQs, and portfolio content are modeled as editable records for admin management." },
  { q: "When does the delivery timeline start?", a: "The schedule starts only after payment is verified and the required brief is complete." },
  { q: "Can we request multiple revision rounds?", a: "Each package includes a clear revision allowance. Extra rounds can be quoted or added by the admin team." },
  { q: "Is this connected to Stripe and Supabase?", a: "This build includes demo mode and production-ready route boundaries. Credentials are required for live auth, storage, and payments." }
];

export const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

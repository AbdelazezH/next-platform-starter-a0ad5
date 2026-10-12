import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`studio-section mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow && <p className="section-note">{eyebrow}</p>}
          {title && (
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export function CTAButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
}) {
  const styles =
    variant === "dark"
      ? "bg-ink text-bone hover:bg-denim"
      : "border border-ink/15 bg-white/80 text-ink hover:bg-white";
  return (
    <Link
      href={href}
      className={`studio-button inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children} <ArrowRight size={16} />
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`studio-card border border-ink/20 bg-white/90 ${className}`}
    >
      {children}
    </div>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      <span>{label}</span>
      {children}
      {hint && (
        <span className="text-xs font-normal leading-5 text-ink/55">
          {hint}
        </span>
      )}
    </label>
  );
}

export const inputClass =
  "w-full rounded-md border border-ink/15 bg-white px-3 py-2 text-sm text-ink shadow-sm transition placeholder:text-ink/35 focus:border-denim focus:outline-none focus:ring-2 focus:ring-denim/20";

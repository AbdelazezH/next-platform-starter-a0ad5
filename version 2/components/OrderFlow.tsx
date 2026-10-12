"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Save, Upload } from "lucide-react";
import { extras, formatMoney, packages } from "@/lib/content";
import { buildBlankBrief, createProjectFromOrder } from "@/lib/demo-store";
import type { Brief, PackageId } from "@/lib/types";
import { Card, Field, inputClass } from "./ui";

const steps = ["Contact", "Customize", "Brief", "Style", "References", "Review", "Pay"];

export function OrderFlow({ packageId }: { packageId: PackageId }) {
  const router = useRouter();
  const selectedPackage = packages.find((item) => item.id === packageId) ?? packages[0];
  const [step, setStep] = useState(0);
  const [contact, setContact] = useState({ name: "", email: "", company: "" });
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [brief, setBrief] = useState<Brief>(() => buildBlankBrief());
  const chosenExtras = extras.filter((extra) => selectedExtras.includes(extra.id));
  const total = useMemo(() => selectedPackage.price + chosenExtras.reduce((sum, extra) => sum + extra.price, 0), [chosenExtras, selectedPackage.price]);

  function updateBrief<K extends keyof Brief>(key: K, value: Brief[K]) {
    setBrief((current) => ({ ...current, [key]: value }));
  }

  function saveDraft() {
    window.localStorage.setItem(`studio-draft-${packageId}`, JSON.stringify({ contact, selectedExtras, brief }));
  }

  function finishPayment() {
    const project = createProjectFromOrder({
      clientName: contact.name || "Demo client",
      clientEmail: contact.email || "client@example.com",
      company: contact.company,
      selectedPackage,
      selectedExtras: chosenExtras,
      brief,
      total
    });
    router.push(`/checkout/success?project=${project.id}`);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <Card className="p-4 sm:p-6">
        <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto">
          {steps.map((label, index) => (
            <button
              key={label}
              type="button"
              onClick={() => setStep(index)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${index === step ? "bg-ink text-bone" : "border border-ink/10 bg-white text-ink/60"}`}
            >
              {index + 1}. {label}
            </button>
          ))}
        </div>

        {step === 0 && (
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Where should we send your project link?</h2>
            <Field label="Name"><input className={inputClass} value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} placeholder="Maya Chen" /></Field>
            <Field label="Email"><input className={inputClass} type="email" value={contact.email} onChange={(event) => setContact({ ...contact, email: event.target.value })} placeholder="maya@example.com" /></Field>
            <Field label="Company name, optional"><input className={inputClass} value={contact.company} onChange={(event) => setContact({ ...contact, company: event.target.value })} placeholder="Northline Provisions" /></Field>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold">Customize your package</h2>
            <div className="mt-5 grid gap-3">
              {extras.map((extra) => (
                <label key={extra.id} className="flex cursor-pointer gap-3 rounded-lg border border-ink/10 bg-bone p-4">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(extra.id)}
                    onChange={(event) =>
                      setSelectedExtras((current) => event.target.checked ? [...current, extra.id] : current.filter((id) => id !== extra.id))
                    }
                  />
                  <span>
                    <span className="block font-semibold">{extra.name} · {formatMoney(extra.price)}</span>
                    <span className="mt-1 block text-sm text-ink/60">{extra.description} {extra.deliveryImpact}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Tell us about the brand</h2>
            <Field label="Brand name"><input className={inputClass} value={brief.brandName} onChange={(event) => updateBrief("brandName", event.target.value)} placeholder="Amble House" /></Field>
            <Field label="Tagline"><input className={inputClass} value={brief.tagline} onChange={(event) => updateBrief("tagline", event.target.value)} placeholder="A slower way to stay" /></Field>
            <Field label="Business description" hint="What do you sell, who do you serve, and what makes it distinct?">
              <textarea className={inputClass} rows={4} value={brief.description} onChange={(event) => updateBrief("description", event.target.value)} />
            </Field>
            <Field label="Industry"><input className={inputClass} value={brief.industry} onChange={(event) => updateBrief("industry", event.target.value)} placeholder="Hospitality" /></Field>
            <Field label="Target audience"><textarea className={inputClass} rows={3} value={brief.audience} onChange={(event) => updateBrief("audience", event.target.value)} /></Field>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Shape the creative direction</h2>
            <Field label="Brand personality"><textarea className={inputClass} rows={3} value={brief.personality} onChange={(event) => updateBrief("personality", event.target.value)} placeholder="Calm, editorial, confident..." /></Field>
            <Field label="Desired impression"><textarea className={inputClass} rows={3} value={brief.impression} onChange={(event) => updateBrief("impression", event.target.value)} placeholder="What should people feel when they first see it?" /></Field>
            <Field label="Preferred logo styles">
              <div className="flex flex-wrap gap-2">
                {["Wordmark", "Symbol", "Badge", "Minimal", "Expressive", "Editorial"].map((style) => (
                  <button
                    type="button"
                    key={style}
                    onClick={() => updateBrief("styles", brief.styles.includes(style) ? brief.styles.filter((item) => item !== style) : [...brief.styles, style])}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${brief.styles.includes(style) ? "bg-denim text-white" : "border border-ink/15 bg-white text-ink/65"}`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Colors"><input className={inputClass} value={brief.colors} onChange={(event) => updateBrief("colors", event.target.value)} placeholder="Muted blues, warm neutrals, avoid neon" /></Field>
            <Field label="Typography"><input className={inputClass} value={brief.typography} onChange={(event) => updateBrief("typography", event.target.value)} placeholder="Serif, modern sans, handwritten, etc." /></Field>
          </div>
        )}

        {step === 4 && (
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">References and requirements</h2>
            <Field label="Competitors"><textarea className={inputClass} rows={3} value={brief.competitors} onChange={(event) => updateBrief("competitors", event.target.value)} /></Field>
            <Field label="Inspiration links"><textarea className={inputClass} rows={3} value={brief.inspiration} onChange={(event) => updateBrief("inspiration", event.target.value)} placeholder="One link per line" /></Field>
            <Field label="Reference uploads" hint="Demo mode stores file names only. Production should upload to private Supabase storage.">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-ink/25 bg-bone p-5 text-sm text-ink/65">
                <Upload size={18} />
                <span>{brief.referenceUploads.length ? brief.referenceUploads.join(", ") : "Choose reference files"}</span>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(event) => updateBrief("referenceUploads", Array.from(event.target.files ?? []).map((file) => file.name))}
                />
              </label>
            </Field>
            <Field label="Existing brand assets"><textarea className={inputClass} rows={3} value={brief.existingAssets} onChange={(event) => updateBrief("existingAssets", event.target.value)} /></Field>
            <Field label="Additional requirements"><textarea className={inputClass} rows={3} value={brief.requirements} onChange={(event) => updateBrief("requirements", event.target.value)} /></Field>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-2xl font-semibold">Review your order</h2>
            <div className="mt-5 grid gap-4">
              <ReviewRow label="Package" value={selectedPackage.name} />
              <ReviewRow label="Concepts" value={String(selectedPackage.concepts)} />
              <ReviewRow label="Revision allowance" value={`${selectedPackage.revisions} rounds`} />
              <ReviewRow label="Timeline" value={selectedPackage.timeline} />
              <ReviewRow label="Extras" value={chosenExtras.length ? chosenExtras.map((extra) => extra.name).join(", ") : "None"} />
              <ReviewRow label="Delivery condition" value="Payment and required brief must both be complete before the schedule starts." />
              <ReviewRow label="Total" value={formatMoney(total)} strong />
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="rounded-lg bg-bone p-6">
            <h2 className="text-2xl font-semibold">Demo payment</h2>
            <p className="mt-3 leading-7 text-ink/65">
              Stripe credentials are not required for this local demo. In production, this step should create a Checkout Session and wait for the verified webhook before marking payment as paid.
            </p>
            <button type="button" onClick={finishPayment} className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bone transition hover:bg-denim">
              <CreditCard size={16} /> Complete test payment
            </button>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5">
          <button type="button" onClick={saveDraft} className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold">
            <Save size={16} /> Save brief
          </button>
          <div className="flex gap-2">
            <button type="button" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold disabled:opacity-40">
              Back
            </button>
            <button type="button" disabled={step === steps.length - 1} onClick={() => setStep((current) => Math.min(steps.length - 1, current + 1))} className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bone disabled:opacity-40">
              Continue
            </button>
          </div>
        </div>
      </Card>

      <aside className="h-fit rounded-lg border border-ink/10 bg-white/80 p-5 shadow-sm lg:sticky lg:top-24">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">Selected package</p>
        <h2 className="mt-3 font-display text-3xl">{selectedPackage.name}</h2>
        <p className="mt-3 text-sm leading-6 text-ink/65">{selectedPackage.summary}</p>
        <div className="mt-5 grid gap-2 text-sm text-ink/65">
          <p>{selectedPackage.concepts} concepts</p>
          <p>{selectedPackage.revisions} revision rounds</p>
          <p>{selectedPackage.timeline}</p>
        </div>
        <div className="mt-5 border-t border-ink/10 pt-5">
          <p className="text-sm text-ink/55">Updated total</p>
          <p className="text-4xl font-semibold">{formatMoney(total)}</p>
        </div>
      </aside>
    </div>
  );
}

function ReviewRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex flex-col justify-between gap-2 rounded-md border border-ink/10 bg-white p-4 sm:flex-row">
      <span className="text-sm text-ink/55">{label}</span>
      <span className={strong ? "text-xl font-semibold" : "font-medium"}>{value}</span>
    </div>
  );
}

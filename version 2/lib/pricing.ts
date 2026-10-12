import { extras, packages } from "./content";

export function calculateOrder(packageId: string, extraIds: string[]) {
  const selectedPackage = packages.find((item) => item.id === packageId);
  if (!selectedPackage) {
    throw new Error("Unknown package");
  }

  const selectedExtras = extras.filter((extra) => extraIds.includes(extra.id));
  const total = selectedPackage.price + selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

  return {
    package: selectedPackage,
    extras: selectedExtras,
    subtotal: selectedPackage.price,
    total,
    revisionAllowance: selectedPackage.revisions,
    deliveryConditions: "Timeline starts after verified payment and completed required brief."
  };
}

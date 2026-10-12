import Link from "next/link";
import { Asterisk } from "lucide-react";
import { studio } from "@/lib/content";

export function Footer() {
  return (
    <footer className="studio-footer">
      <div className="footer-top">
        <Link href="/" className="footer-wordmark">
          {studio.name}
        </Link>
        <p className="handwritten">
          made with a little extra care.
          <Asterisk size={26} aria-hidden="true" />
        </p>
      </div>
      <div className="footer-bottom">
        <p>Independent studio / Fixed-price branding</p>
        <div className="footer-links">
          <Link href="/packages">Packages</Link>
          <Link href="/portfolio">Work</Link>
          <Link href="/how-it-works">Process</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/refund">Refunds</Link>
          <Link href="/admin">Admin demo</Link>
        </div>
      </div>
    </footer>
  );
}

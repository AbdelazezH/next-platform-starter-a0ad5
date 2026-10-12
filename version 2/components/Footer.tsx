import Link from "next/link";
import { Aperture, ArrowUpRight } from "lucide-react";
import { studio } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link href="/" className="site-brand">
          <Aperture size={27} />
          <span>{studio.name}</span>
        </Link>
        <p>
          Independent minds.
          <br />
          Distinctive brands.
        </p>
        <Link href="/contact" className="footer-contact">
          Say hello
          <ArrowUpRight size={19} />
        </Link>
      </div>
      <div className="footer-bottom">
        <p>Fixed-price branding / Demo studio</p>
        <div>
          {[
            ["Packages", "/packages"],
            ["Portfolio", "/portfolio"],
            ["Client portal", "/portal"],
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["Refunds", "/refund"],
            ["Admin demo", "/admin"],
          ].map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

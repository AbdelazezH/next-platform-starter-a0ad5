"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  Aperture,
  ChevronDown,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { studio } from "@/lib/content";

const links = [
  ["Home", "/"],
  ["Services", "/packages"],
  ["About us", "/about"],
  ["Our work", "/portfolio"],
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={`site-header ${pathname === "/" ? "home-header" : ""}`}>
      <nav className="site-nav" aria-label="Main navigation">
        <Link
          href="/"
          className="site-brand"
          onClick={() => setMenuOpen(false)}
        >
          <Aperture size={27} strokeWidth={2.4} />
          <span>{studio.name}</span>
        </Link>
        <div className="site-nav-links">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <details className="more-menu">
            <summary>
              More links
              <ChevronDown size={11} />
            </summary>
            <div>
              <Link href="/how-it-works">
                How it works
                <ArrowUpRight size={14} />
              </Link>
              <Link href="/contact">
                Contact
                <ArrowUpRight size={14} />
              </Link>
              <Link href="/portal">
                Client portal
                <LayoutDashboard size={14} />
              </Link>
            </div>
          </details>
        </div>
        <div className="site-nav-actions">
          <Link href="/packages" className="nav-start">
            Start a project
            <ArrowUpRight size={13} />
          </Link>
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            title={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          {[
            ...links,
            ["How it works", "/how-it-works"],
            ["Contact", "/contact"],
            ["Client portal", "/portal"],
          ].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={15} />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  Asterisk,
  Diamond,
  Grid2X2,
  Heart,
  LayoutDashboard,
  Menu,
  Package,
  Star,
  UserRound,
  X,
} from "lucide-react";
import { studio } from "@/lib/content";

const links = [
  { label: "Home", href: "/", icon: Star },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Case studies", href: "/portfolio", icon: Grid2X2 },
  { label: "Packages", href: "/packages", icon: Diamond },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="studio-header">
      <nav className="studio-nav" aria-label="Main navigation">
        <Link
          href="/"
          className="nav-emblem"
          aria-label={`${studio.name} home`}
          title={studio.name}
          onClick={() => setOpen(false)}
        >
          <Asterisk size={21} strokeWidth={3} />
        </Link>
        <div className="desktop-links">
          {links.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
            >
              <Icon
                size={12}
                fill={
                  href === "/" || href === "/packages" ? "currentColor" : "none"
                }
              />
              {label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link
            href="/packages"
            className="nav-round yellow"
            aria-label="View packages"
            title="View packages"
          >
            <Package size={15} />
          </Link>
          <Link
            href="/portfolio"
            className="nav-round pink"
            aria-label="Explore our work"
            title="Explore our work"
          >
            <Asterisk size={17} />
          </Link>
          <Link
            href="/portal"
            className="nav-round green"
            aria-label="Client portal"
            title="Client portal"
          >
            <LayoutDashboard size={14} />
          </Link>
          <Link href="/contact" className="nav-contact">
            <Heart size={11} fill="currentColor" /> Contact{" "}
            <ArrowUpRight className="contact-arrow" size={12} />
          </Link>
          <button
            className="nav-menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            title={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-navigation" id="mobile-navigation">
          {links.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={pathname === href ? "active" : ""}
            >
              <Icon size={16} />
              {label}
              <ArrowUpRight size={14} />
            </Link>
          ))}
          <Link href="/how-it-works" onClick={() => setOpen(false)}>
            How it works
            <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}

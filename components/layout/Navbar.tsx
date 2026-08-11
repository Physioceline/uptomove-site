"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";

const formationsLinks = [
  {
    href: "/formations/sedentaires",
    label: "Formations Sédentaires",
    desc: "Postes bureau & travail sur écran",
    icon: "🖥️",
  },
  {
    href: "/formations/manutention",
    label: "Formations Manutention",
    desc: "Terrain, port de charges & station debout",
    icon: "🏭",
  },
];

const navLinks = [
  { href: "/clients", label: "Clients" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formationsOpen, setFormationsOpen] = useState(false);
  const [mobileFormationsOpen, setMobileFormationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFormationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkClass = cn(
    "px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200",
    "text-navy hover:bg-navy/8 hover:text-navy"
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_-4px_rgba(30,41,82,0.12)]"
          : "bg-transparent"
      )}
      role="banner"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-[88px] md:h-[100px]">

          {/* ── Logo (plus grand) ── */}
          <Link
            href="/"
            aria-label="UP TO MOVE — Accueil"
            className="flex items-center shrink-0"
          >
            <Image
              src="/logo-uptomove.png"
              alt="UP TO MOVE"
              width={260}
              height={72}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Navigation principale"
          >
            {/* Dropdown Formations */}
            <div ref={dropdownRef} className="relative">
              <button
                className={cn(linkClass, "flex items-center gap-1")}
                onClick={() => setFormationsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={formationsOpen}
              >
                Formations
                <ChevronDown
                  size={15}
                  className={cn("transition-transform duration-200", formationsOpen && "rotate-180")}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_8px_32px_-8px_rgba(30,41,82,0.18)] border border-navy-100 overflow-hidden transition-all duration-200 origin-top",
                  formationsOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                )}
                role="menu"
              >
                {formationsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    className="flex items-start gap-3 px-4 py-4 hover:bg-cream transition-colors border-b border-navy-100 last:border-0"
                    onClick={() => setFormationsOpen(false)}
                  >
                    <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{link.icon}</span>
                    <div>
                      <p className="text-navy font-semibold text-sm">{link.label}</p>
                      <p className="text-navy/50 text-xs mt-0.5">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other links */}
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA desktop ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/calculateur" variant="secondary" size="sm">
              Calculateur coût TMS
            </Button>
            <Button href="/contact" variant="primary" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors text-navy hover:bg-navy/8"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-0 top-[76px] bg-navy z-40 transition-all duration-300 overflow-y-auto",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col p-6 gap-1" aria-label="Navigation mobile">

          {/* Formations accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between text-white text-lg font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setMobileFormationsOpen((v) => !v)}
              aria-expanded={mobileFormationsOpen}
            >
              <span>Formations</span>
              <ChevronDown
                size={18}
                className={cn("transition-transform duration-200", mobileFormationsOpen && "rotate-180")}
              />
            </button>
            {mobileFormationsOpen && (
              <div className="ml-4 mt-1 space-y-1">
                {formationsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 text-white/80 text-base font-medium py-2.5 px-4 rounded-xl hover:bg-white/10 transition-colors"
                    onClick={() => { setMobileOpen(false); setMobileFormationsOpen(false); }}
                  >
                    <span className="text-lg" aria-hidden="true">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-lg font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Demander un devis gratuit
            </Button>
          </div>
          <p className="text-white/60 text-sm text-center mt-4">
            📞 06 31 19 77 69
          </p>
        </nav>
      </div>
    </header>
  );
}

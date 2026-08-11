import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  formations: [
    { href: "/formations/sedentaires", label: "Formations Sédentaires" },
    { href: "/formations/manutention", label: "Formations Manutention" },
    { href: "/calculateur", label: "Calculateur TMS" },
  ],
  entreprise: [
    { href: "/a-propos", label: "À propos" },
    { href: "/clients", label: "Nos clients" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      {/* Top CTA band */}
      <div className="bg-gradient-to-r from-orange to-yellow">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-navy font-heading text-xl md:text-2xl font-bold">
              Prêt à protéger vos équipes ?
            </p>
            <p className="text-navy/80 text-sm mt-1">
              Devis gratuit sous 48h · Partout en France
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-navy-700 transition-colors whitespace-nowrap shadow-md"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="UP TO MOVE — Accueil">
              <Image
                src="/logo-uptomove.png"
                alt="UP TO MOVE"
                width={130}
                height={36}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm mt-4 leading-relaxed max-w-xs">
              Kinésithérapeutes en entreprise. Prévention des TMS, formations
              certifiées Qualiopi. Partout en France.
            </p>
            <div className="mt-5 space-y-1">
              <a
                href="tel:0631197769"
                className="flex items-center gap-2 text-white/80 hover:text-yellow transition-colors text-sm font-medium"
              >
                <span>📞</span> 06 31 19 77 69
              </a>
              <a
                href="mailto:physio.celine@gmail.com"
                className="flex items-center gap-2 text-white/80 hover:text-yellow transition-colors text-sm"
              >
                <span>✉️</span> physio.celine@gmail.com
              </a>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Formations
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.formations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Entreprise
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certification */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Certification
            </h3>
            <div className="bg-white/10 rounded-xl p-4 text-sm text-white/80 leading-relaxed">
              <span className="text-yellow font-bold text-base block mb-1">
                ✓ Certifié Qualiopi
              </span>
              Actions de formation<br />
              (L.6313-1 - 1°)
            </div>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              Nos formations s&apos;inscrivent dans votre obligation légale de
              prévention (Art. L.4121-1 du Code du travail).
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} UP TO MOVE — Tous droits réservés</p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

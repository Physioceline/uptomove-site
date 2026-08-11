import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et informations légales du site UP TO MOVE.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#1E2952] pt-[100px] pb-12">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h1 className="font-heading text-white text-3xl font-bold">Mentions légales</h1>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="max-w-[800px] mx-auto px-5 md:px-8 prose prose-navy">
            <h2 className="font-heading text-navy text-xl font-bold mb-3">Éditeur du site</h2>
            <p className="text-navy/70 text-sm leading-relaxed mb-6">
              <strong>UP TO MOVE</strong><br />
              Céline Schneider — Kinésithérapeute D.E.<br />
              Email : physio.celine@gmail.com<br />
              Téléphone : 06 31 19 77 69
            </p>

            <h2 className="font-heading text-navy text-xl font-bold mb-3">Certification Qualiopi</h2>
            <p className="text-navy/70 text-sm leading-relaxed mb-6">
              La certification qualité a été délivrée au titre de la catégorie d&apos;action suivante :
              Actions de formation (L.6313-1 - 1°).
            </p>

            <h2 className="font-heading text-navy text-xl font-bold mb-3">Hébergement</h2>
            <p className="text-navy/70 text-sm leading-relaxed mb-6">
              Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
            </p>

            <h2 className="font-heading text-navy text-xl font-bold mb-3">Propriété intellectuelle</h2>
            <p className="text-navy/70 text-sm leading-relaxed mb-6">
              L&apos;ensemble des contenus de ce site (textes, images, graphismes, logo, icônes) est la propriété
              exclusive d&apos;UP TO MOVE, sauf mention contraire. Toute reproduction, distribution ou modification
              est interdite sans autorisation préalable.
            </p>

            <h2 className="font-heading text-navy text-xl font-bold mb-3">Données personnelles — RGPD</h2>
            <p className="text-navy/70 text-sm leading-relaxed mb-6">
              Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.
              Elles ne sont jamais cédées à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification et de suppression. Pour exercer ces droits : physio.celine@gmail.com.
            </p>

            <h2 className="font-heading text-navy text-xl font-bold mb-3">Cookies</h2>
            <p className="text-navy/70 text-sm leading-relaxed">
              Ce site peut utiliser des cookies analytiques pour mesurer l&apos;audience. Vous pouvez les désactiver
              dans les paramètres de votre navigateur.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

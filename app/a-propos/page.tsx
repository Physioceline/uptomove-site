import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "À propos — UP TO MOVE, kinésithérapeutes en entreprise",
  description:
    "UP TO MOVE est fondée par Céline Schneider, kinésithérapeute spécialisée en prévention TMS en entreprise. Découvrez notre histoire et notre approche.",
};

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#1E2952] pt-[100px] pb-16" aria-labelledby="apropos-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Badge variant="teal" className="mb-4">À propos</Badge>
            <h1
              id="apropos-title"
              className="font-heading text-white text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight max-w-2xl mb-5"
            >
              Des kinésithérapeutes au service de la prévention en entreprise.
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              UP TO MOVE est née d&apos;un constat simple : la santé au travail mérite
              des professionnels de santé réels, pas des formations génériques.
            </p>
          </div>
        </section>

        {/* Histoire */}
        <section className="bg-white py-[clamp(4rem,8vw,7rem)]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="orange" className="mb-4">Fondatrice</Badge>
                <h2 className="font-heading text-navy text-2xl md:text-3xl leading-tight mb-4">
                  Céline Schneider — Kinésithérapeute D.E.
                </h2>
                <p className="text-navy/65 leading-relaxed mb-4">
                  Kinésithérapeute diplômée d&apos;État, Céline Schneider a fondé UP TO MOVE
                  après avoir observé l&apos;écart entre ce dont les entreprises avaient besoin
                  et ce que proposaient les formateurs généralistes.
                </p>
                <p className="text-navy/65 leading-relaxed mb-4">
                  Son constat : les TMS sont la première cause de maladie professionnelle en France,
                  et pourtant les formations proposées sont souvent confiées à des coachs
                  bien-être qui ne connaissent ni l&apos;anatomie, ni les mécanismes lésionnels.
                </p>
                <p className="text-navy/65 leading-relaxed mb-6">
                  UP TO MOVE apporte la rigueur clinique du kinésithérapeute directement sur
                  le terrain — dans les bureaux, les entrepôts, les usines — pour des résultats
                  mesurables et une conformité réglementaire garantie.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-cream rounded-xl px-4 py-2 text-sm text-navy font-medium">
                    📞 06 31 19 77 69
                  </div>
                  <div className="bg-cream rounded-xl px-4 py-2 text-sm text-navy font-medium">
                    ✉️ physio.celine@gmail.com
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "🩺", title: "Expertise clinique", text: "Kinésithérapeute diplômée d'État — formation académique en anatomie, physiologie, pathologies musculo-squelettiques." },
                  { icon: "🏢", title: "Terrain & entreprise", text: "Interventions dans tous secteurs : bureaux, industrie, santé, commerce, BTP. Adaptation permanente aux conditions réelles." },
                  { icon: "📋", title: "Conformité réglementaire", text: "Certifiée Qualiopi. Maîtrise du cadre légal : Art. L.4121-1, DUERP, PAPRIPACT, Passeport Prévention." },
                  { icon: "📊", title: "Résultats mesurables", text: "Approche documentée : −30% de douleurs déclarées après la première session. Bilans post-formation systématiques." },
                ].map((item) => (
                  <Card key={item.title} hover className="flex gap-4 p-5">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="navy" className="mb-4">Nos valeurs</Badge>
              <h2 className="font-heading text-navy text-2xl md:text-3xl leading-tight">
                Ce qui guide chaque intervention
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Rigueur clinique", color: "teal" as const, text: "Chaque formation repose sur des données probantes. Pas de promesses sans fondement scientifique. L'anatomie et la biomécanique guident toutes nos recommandations." },
                { title: "Adaptation terrain", color: "orange" as const, text: "Pas de formations standardisées. Nous analysons les vrais gestes, les vraies contraintes, les vrais postes — et nous adaptons chaque intervention en conséquence." },
                { title: "Résultats prouvés", color: "yellow" as const, text: "Nous mesurons l'efficacité de chaque formation. Bilans post-formation, suivi des indicateurs TMS, reporting pour votre DUERP et vos instances RH." },
              ].map((v) => (
                <Card key={v.title} accent={v.color} hover className="p-6 text-center">
                  <h3 className="font-heading text-navy font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-navy/65 text-sm leading-relaxed">{v.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 md:py-20" aria-labelledby="cta-apropos-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 id="cta-apropos-title" className="font-heading text-white text-2xl md:text-3xl mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-white/65 max-w-md mx-auto mb-8">
              Un premier échange de 20 minutes pour comprendre vos enjeux et vous proposer
              le programme le plus adapté.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Prendre contact →
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

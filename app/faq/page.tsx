import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur les formations TMS",
  description:
    "Réponses aux questions fréquentes sur les formations TMS d'UP TO MOVE : tarifs, logistique, certification Qualiopi, Passeport Prévention.",
};

const faqs = [
  {
    q: "Combien coûte une formation ?",
    a: "Nos tarifs sont personnalisés en fonction du nombre de participants, du format choisi et de votre localisation. Contactez-nous pour un devis gratuit sous 48h. Nos formations sont finançables via votre OPCO grâce à la certification Qualiopi.",
  },
  {
    q: "Êtes-vous certifiés Qualiopi ?",
    a: "Oui. La certification qualité Qualiopi nous a été délivrée au titre des Actions de formation (L.6313-1 - 1°). Cela signifie que vos formations sont éligibles au financement OPCO et s'inscrivent dans votre obligation légale de formation professionnelle.",
  },
  {
    q: "Qu'est-ce que le Passeport Prévention et comment fonctionne-t-il ?",
    a: "Le Passeport Prévention est le registre numérique officiel qui recense toutes les formations à la sécurité et à la prévention suivies par chaque salarié. À l'issue de chaque formation UP TO MOVE, nous délivrons un certificat directement intégrable dans ce registre — une obligation qui deviendra pleinement effective en 2026.",
  },
  {
    q: "Dans quels délais pouvez-vous intervenir ?",
    a: "Notre délai d'accès standard est de 4 semaines. En cas d'urgence ou de situation particulière, contactez-nous pour étudier ensemble les possibilités.",
  },
  {
    q: "Intervenez-vous partout en France ?",
    a: "Oui, nous intervenons sur tout le territoire français, en présentiel dans vos locaux ou à distance en visioconférence. Les déplacements sont inclus dans le devis.",
  },
  {
    q: "Quelle est la différence entre vos formations et celles d'un formateur généraliste ?",
    a: "Nos formateurs sont des kinésithérapeutes diplômés d'État — pas des coachs bien-être ou des formateurs généralistes. Ils connaissent l'anatomie, les mécanismes lésionnels et savent adapter les gestes aux pathologies réelles de vos salariés. Nous analysons aussi le poste de travail réel, ce que les formateurs classiques font rarement.",
  },
  {
    q: "Comment vos formations s'intègrent-elles dans le DUERP ?",
    a: "Nos formations et les analyses de postes que nous réalisons fournissent des données documentées directement utilisables pour alimenter votre Document Unique d'Évaluation des Risques Professionnels. Nous pouvons vous remettre un rapport d'intervention synthétique à cet effet.",
  },
  {
    q: "Que se passe-t-il si un de nos salariés est en situation de handicap ?",
    a: "Contactez-nous en amont de toute inscription. Nous étudierons ensemble les adaptations nécessaires pour que la formation soit accessible à tous.",
  },
  {
    q: "Proposez-vous des formations à distance ?",
    a: "Oui, la plupart de nos formations sont disponibles en format distanciel (visioconférence). Certains formats comme l'Analyse Individuelle de Poste nécessitent toutefois une présence physique pour être efficaces.",
  },
  {
    q: "Comment mesure-t-on les résultats de vos formations ?",
    a: "Nous réalisons un bilan post-formation systématique incluant : satisfaction des participants, évaluation des acquis, indicateurs de douleurs avant/après. En moyenne, nos formations réduisent de 30% les douleurs déclarées par les salariés dès la première session.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#1E2952] pt-[100px] pb-16" aria-labelledby="faq-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Badge variant="yellow" className="mb-4">FAQ</Badge>
            <h1
              id="faq-title"
              className="font-heading text-white text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4"
            >
              Questions fréquentes
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Tout ce que vous devez savoir avant de nous contacter.
            </p>
          </div>
        </section>

        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]">
          <div className="max-w-[800px] mx-auto px-5 md:px-8 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-[1.25rem] shadow-[var(--shadow-card)] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-navy hover:text-orange transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-orange shrink-0 text-xl font-light group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 text-navy/65 text-sm leading-relaxed border-t border-navy-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="max-w-[800px] mx-auto px-5 md:px-8 mt-12 text-center">
            <p className="text-navy/60 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
            <Button href="/contact" variant="primary" size="md">
              Nous contacter directement
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

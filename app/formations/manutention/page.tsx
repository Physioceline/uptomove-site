import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Clock, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Formations Manutention — Prévention TMS Postes Terrain",
  description:
    "Formations TMS pour postes de manutention et travail physique. Gestes et postures, échauffement, économies gestuelles. Animées par des kinésithérapeutes. Qualiopi.",
};

const formations = [
  {
    title: "Conférence Sensibilisation TMS",
    duration: "30 min",
    participants: "30+ personnes",
    repartition: "100% Théorie",
    color: "teal" as const,
    description:
      "Sensibilisation à la démarche de prévention des TMS adaptée à tous secteurs d'activité : bureautique et manutention.",
    objectifs: [
      "Comprendre les enjeux liés à la prévention des TMS",
      "Prévenir le risque de TMS liés aux facteurs matériels",
      "Adapter son environnement pour préserver santé et efficacité",
      "Intégrer le mouvement dans son quotidien professionnel",
    ],
    contenu: [
      "Poste de travail et enjeux de prévention des TMS",
      "Explorer son corps au travail",
      "Anatomie fonctionnelle appliquée",
      "Stratégies de prévention pratiques",
    ],
    logistique: "Présentiel (vos locaux) · Séminaires, semaine QVT",
    support: null,
  },
  {
    title: "Économies Gestuelles & Posturales « Manutention »",
    duration: "1h",
    participants: "10 à 20 personnes",
    repartition: "50% Pratique | 50% Théorie",
    color: "orange" as const,
    description:
      "Atelier pour donner les clés de prévention des bons gestes posturaux spécifiques à la manutention manuelle et aux postes en station debout.",
    objectifs: [
      "Comprendre l'impact de la manutention sur le corps",
      "Prendre conscience de ses propres habitudes corporelles",
      "Développer des réflexes de mouvement et d'auto-régulation",
      "Adapter son environnement de travail pour préserver sa santé",
    ],
    contenu: [
      "Les impacts physiques de la manutention manuelle",
      "Test individuel de mobilité et TMS",
      "Techniques d'économie d'effort et de protection articulaire",
      "Postures sécurisées pour le port de charges",
    ],
    logistique: "Intra-entreprise ou en distanciel",
    support: "Chaque participant reçoit « le guide de la mobilité générale »",
  },
  {
    title: "Analyse Individuelle de Poste",
    duration: "30 min / poste",
    participants: "Analyse individuelle",
    repartition: "100% Pratique",
    color: "yellow" as const,
    description:
      "Analyse individuelle de poste de manutention visant à prévenir les TMS. Observation des gestes réels et recommandations personnalisées.",
    objectifs: [
      "Identifier les facteurs de risque TMS spécifiques au poste",
      "Analyser les postures et gestes répétitifs en situation réelle",
      "Proposer des recommandations adaptées au poste",
    ],
    contenu: [
      "Bilan individuel avec recueil des ressentis et douleurs",
      "Observation du poste en conditions réelles",
      "Analyse des gestes de manutention",
      "Recommandations personnalisées et rapport",
    ],
    logistique: "Intra-entreprise · Sur le poste réel",
    support: null,
  },
  {
    title: "Échauffement",
    duration: "1h",
    participants: "10 à 20 personnes",
    repartition: "80% Pratique | 20% Théorie",
    color: "teal" as const,
    description:
      "Programme d'échauffement adapté aux métiers de la manutention pour préparer le corps à l'effort et prévenir les blessures dès la prise de poste.",
    objectifs: [
      "Comprendre l'intérêt de l'échauffement en contexte professionnel",
      "Apprendre les séquences d'échauffement adaptées au poste",
      "Développer une routine quotidienne autonome",
    ],
    contenu: [
      "Pourquoi s'échauffer avant la manutention",
      "Séquences articulaires ciblées sur les zones à risque",
      "Exercices d'activation musculaire adaptés au poste",
      "Protocole quotidien autonome (5-10 min)",
    ],
    logistique: "Intra-entreprise · Démarrage de poste",
    support: "Guide d'échauffement à afficher en salle de pause",
  },
  {
    title: "Atelier Auto-Massage",
    duration: "1h",
    participants: "10 à 20 personnes",
    repartition: "75% Pratique | 25% Théorie",
    color: "orange" as const,
    description:
      "Outils pratiques d'auto-massage pour gérer les douleurs liées aux contraintes physiques de la manutention.",
    objectifs: [
      "Comprendre les bienfaits de l'auto-massage pour les douleurs physiques",
      "Apprendre des techniques simples d'auto-massage adaptées aux métiers du terrain",
      "Développer une routine de récupération efficace",
    ],
    contenu: [
      "Introduction à l'auto-massage (15 min)",
      "Techniques ciblées zones lombaires, épaules, poignets",
      "Pratique guidée par le kinésithérapeute",
      "Protocole de récupération post-poste",
    ],
    logistique: "Intra-entreprise",
    support: "Chaque participant reçoit « le guide de l'auto-massage »",
  },
  {
    title: "Gestion des Situations à Stress",
    duration: "1h",
    participants: "10 à 20 personnes",
    repartition: "75% Pratique | 25% Théorie",
    color: "yellow" as const,
    description:
      "Outils pratiques pour gérer le stress physique et psychologique lié aux métiers de la manutention.",
    objectifs: [
      "Comprendre les risques du stress sur la santé",
      "Apprendre des techniques de gestion du stress adaptées au terrain",
      "Renforcer la conscience de ses réactions face à la pression",
    ],
    contenu: [
      "Les bases du stress en contexte de travail physique intensif",
      "Techniques de respiration et de récupération rapide",
      "Gestion de la fatigue physique et mentale",
      "Outils à intégrer dans les pauses",
    ],
    logistique: "Intra-entreprise",
    support: "Chaque participant reçoit « le guide de la respiration et visualisation »",
  },
];

export default function FormationsManutentionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative bg-[#1E2952] pt-[100px] pb-16 md:pb-24 overflow-hidden"
          aria-labelledby="manut-title"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/download-web.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-[1] bg-navy/70" aria-hidden="true" />
          <div className="relative z-[2] max-w-[1200px] mx-auto px-5 md:px-8">
            <Badge variant="orange" className="mb-5">Formations Manutention</Badge>
            <h1
              id="manut-title"
              className="font-heading text-white text-[clamp(2rem,4.5vw,3.5rem)] leading-tight tracking-tight max-w-3xl mb-5"
            >
              Prévenir les douleurs, préserver la performance !
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
              Les métiers de la manutention sollicitent fortement le corps au quotidien : gestes
              répétitifs, ports de charges, postures contraignantes. Nos formations accompagnent
              les salariés dans l&apos;apprentissage des bons gestes pour préserver leur santé.
            </p>
            <div className="flex flex-wrap gap-5 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Clock size={15} /> Formats 30 min à 1h</span>
              <span className="flex items-center gap-2"><Users size={15} /> 10 à 30+ personnes</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Sur votre site, sur le poste réel</span>
            </div>
          </div>
        </section>

        {/* Formations */}
        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 space-y-8">
            {formations.map((f) => (
              <Card key={f.title} accent={f.color} className="p-0 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant={f.color}>{f.duration}</Badge>
                        <span className="text-navy/50 text-xs">{f.participants}</span>
                        <span className="text-navy/50 text-xs">· {f.repartition}</span>
                      </div>
                      <h2 className="font-heading text-navy text-xl md:text-2xl font-bold mb-3">
                        {f.title}
                      </h2>
                      <p className="text-navy/65 leading-relaxed mb-5">{f.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <h3 className="text-navy font-semibold text-sm uppercase tracking-wide mb-2">Objectifs</h3>
                          <ul className="space-y-1.5">
                            {f.objectifs.map((o) => (
                              <li key={o} className="flex items-start gap-2 text-sm text-navy/70">
                                <CheckCircle2 size={14} className="text-teal shrink-0 mt-0.5" />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-navy font-semibold text-sm uppercase tracking-wide mb-2">Contenu</h3>
                          <ul className="space-y-1.5">
                            {f.contenu.map((c) => (
                              <li key={c} className="flex items-start gap-2 text-sm text-navy/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0 mt-1.5" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-64 shrink-0 bg-navy-50 rounded-xl p-5 space-y-3">
                      <div>
                        <p className="text-navy/50 text-xs uppercase tracking-wide mb-1">Modalités</p>
                        <p className="text-navy text-sm font-medium">{f.logistique}</p>
                      </div>
                      <div>
                        <p className="text-navy/50 text-xs uppercase tracking-wide mb-1">Formateur</p>
                        <p className="text-navy text-sm font-medium">Kinésithérapeute D.E.</p>
                      </div>
                      <div>
                        <p className="text-navy/50 text-xs uppercase tracking-wide mb-1">Prérequis</p>
                        <p className="text-navy text-sm">Aucun</p>
                      </div>
                      <div>
                        <p className="text-navy/50 text-xs uppercase tracking-wide mb-1">Délais d&apos;accès</p>
                        <p className="text-navy text-sm">4 semaines</p>
                      </div>
                      {f.support && (
                        <div className="pt-2 border-t border-navy-100">
                          <p className="text-navy/50 text-xs uppercase tracking-wide mb-1">Support fourni</p>
                          <p className="text-navy text-sm">{f.support}</p>
                        </div>
                      )}
                      <Button href="/contact" variant="primary" size="sm" className="w-full mt-2">
                        Demander un devis
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-12 border-t border-navy-100">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <p className="text-navy/60 text-sm">
              <strong className="text-navy">Tarif :</strong> nous contacter pour un devis personnalisé ·{" "}
              <strong className="text-navy">Handicap :</strong> nous contacter en amont ·{" "}
              <strong className="text-navy">Certification :</strong> Qualiopi (L.6313-1 - 1°)
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange to-yellow py-16 md:py-20" aria-labelledby="cta-man-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 id="cta-man-title" className="font-heading text-navy text-2xl md:text-3xl mb-3">
              Vos équipes travaillent sur écran ?
            </h2>
            <p className="text-navy/70 mb-8 max-w-md mx-auto">
              Découvrez notre catalogue de formations pour postes sédentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/formations/sedentaires" variant="white" size="lg">
                Formations Sédentaires →
              </Button>
              <Button href="/contact" size="lg" className="bg-navy text-white hover:bg-navy-700">
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Clock, Users, MapPin, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Formations Sédentaires — Prévention TMS Postes Bureau",
  description:
    "Formations TMS pour postes sédentaires et travail sur écran. Animées par des kinésithérapeutes en 1h dans vos locaux. Qualiopi certifié.",
};

const formations = [
  {
    title: "Conférence Sensibilisation TMS",
    duration: "30 min",
    participants: "30+ personnes",
    repartition: "100% Théorie",
    color: "teal" as const,
    description:
      "Sensibilisation à la démarche de prévention des TMS adaptée à toutes fonctions et à tout secteur d'activité.",
    objectifs: [
      "Comprendre les enjeux liés à la prévention des TMS",
      "Prévenir le risque de TMS liés aux facteurs matériels",
      "Adapter son environnement pour préserver santé et efficacité",
      "Intégrer le mouvement dans son quotidien professionnel",
    ],
    contenu: [
      "Poste de travail et enjeux de prévention des TMS",
      "Explorer son corps au travail",
      "Anatomie fonctionnelle appliquée au poste",
      "Stratégies de prévention pratiques",
    ],
    logistique: "Présentiel (vos locaux) · Lors d'événements corporate : séminaires, semaine QVT",
    support: null,
  },
  {
    title: "Économies Gestuelles & Posturales « Sédentaire »",
    duration: "1h",
    participants: "10 à 20 personnes",
    repartition: "50% Pratique | 50% Théorie",
    color: "orange" as const,
    description:
      "Atelier pour donner les clés de prévention des gestes posturaux adaptés à un poste sédentaire et lors d'un travail sur écran.",
    objectifs: [
      "Comprendre l'impact du travail sédentaire sur le corps et l'esprit",
      "Prendre conscience de ses propres habitudes corporelles",
      "Développer des réflexes de mouvement et d'autorégulation",
      "Adapter son environnement de travail pour préserver sa santé",
    ],
    contenu: [
      "Les impacts physiques, mentaux et organisationnels du poste sédentaire",
      "Test individuel de mobilité et positionnement sur les TMS",
      "Explorer son corps au travail",
      "Gestes et postures adaptés au poste sédentaire",
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
      "Analyse individuelle de poste visant à prévenir les TMS. Programme de 30 minutes maximum incluant des objectifs clairs et des étapes spécifiques.",
    objectifs: [
      "Identifier les facteurs de risque TMS spécifiques au poste",
      "Analyser les postures, gestes répétitifs et l'environnement de travail",
      "Proposer des recommandations adaptées pour améliorer l'ergonomie",
    ],
    contenu: [
      "Bilan individuel avec recueil des ressentis et douleurs",
      "Observation et analyse du poste (inclinaison dos, position bras, cou)",
      "Recommandations personnalisées",
      "Rapport d'audit interne",
    ],
    logistique: "Intra-entreprise · Audit interne des postes sédentaires",
    support: null,
  },
  {
    title: "Atelier Auto-Massage",
    duration: "1h",
    participants: "10 à 20 personnes",
    repartition: "75% Pratique | 25% Théorie",
    color: "teal" as const,
    description:
      "Outils pratiques pour gérer l'apparition de TMS, avec un focus particulier sur l'auto-massage comme méthode accessible et efficace.",
    objectifs: [
      "Comprendre les bienfaits de l'auto-massage pour les douleurs physiques",
      "Apprendre des techniques simples d'auto-massage",
      "Découvrir des méthodes pour une relaxation individuelle efficace",
    ],
    contenu: [
      "Introduction à l'auto-massage (15 min) : définition, origines, principes",
      "Effets physiologiques et émotionnels",
      "Techniques pratiques guidées par le kinésithérapeute",
      "Protocole de séance personnelle quotidienne",
    ],
    logistique: "Intra-entreprise",
    support: "Chaque participant reçoit « le guide de l'auto-massage »",
  },
  {
    title: "Gestion des Situations à Stress",
    duration: "1h",
    participants: "10 à 20 personnes",
    repartition: "75% Pratique | 25% Théorie",
    color: "orange" as const,
    description:
      "Outils pratiques pour gérer le stress au quotidien, avec un focus sur la respiration comme méthode accessible et efficace.",
    objectifs: [
      "Comprendre les risques du stress sur la santé",
      "Apprendre des techniques simples de gestion du stress",
      "Renforcer la conscience de ses réactions face au stress",
    ],
    contenu: [
      "Les bases du stress (20 min) : types, bienfaits ou méfaits",
      "Techniques de respiration et de gestion des émotions",
      "Pratique guidée des exercices de relaxation",
      "Outils à intégrer dans son quotidien professionnel",
    ],
    logistique: "Intra-entreprise",
    support: "Chaque participant reçoit « le guide de la respiration et visualisation »",
  },
  {
    title: "Prévention Fatigue Visuelle",
    duration: "45 min",
    participants: "10 à 20 personnes",
    repartition: "75% Pratique | 25% Théorie",
    color: "yellow" as const,
    description:
      "Outils pratiques pour comprendre et gérer au quotidien la fatigue visuelle liée au travail sur écran.",
    objectifs: [
      "Comprendre les risques de la fatigue visuelle sur la santé",
      "Apprendre les techniques simples pour réduire la fatigue visuelle",
      "Découvrir des méthodes pour maintenir le confort des yeux",
    ],
    contenu: [
      "Introduction à la fatigue visuelle et ses causes",
      "Effets du travail prolongé sur écran",
      "Bases de la prévention : réglages, distances, pauses visuelles",
      "Exercices oculaires pratiques",
    ],
    logistique: "Intra-entreprise",
    support: "Chaque participant reçoit « le guide de la prévention de la fatigue visuelle »",
  },
];

export default function FormationsSedentairesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#1E2952] pt-[100px] pb-16 md:pb-24" aria-labelledby="page-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Badge variant="teal" className="mb-5">Formations Sédentaires</Badge>
            <h1
              id="page-title"
              className="font-heading text-white text-[clamp(2rem,4.5vw,3.5rem)] leading-tight tracking-tight max-w-3xl mb-5"
            >
              Améliorer la santé et la sécurité au travail — postes sédentaires
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
              Dans un contexte professionnel de plus en plus sédentaire, il est essentiel
              d'agir avant que les douleurs ne s'installent. Nos formations offrent des solutions
              concrètes et adaptées pour prévenir les TMS liés au travail de bureau.
            </p>
            <div className="flex flex-wrap gap-5 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Clock size={15} /> Formats 30 min à 1h</span>
              <span className="flex items-center gap-2"><Users size={15} /> 10 à 30+ personnes</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Dans vos locaux ou à distance</span>
              <span className="flex items-center gap-2"><BookOpen size={15} /> Supports inclus</span>
            </div>
          </div>
        </section>

        {/* Formations list */}
        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]" aria-label="Liste des formations sédentaires">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 space-y-8">
            {formations.map((f, i) => (
              <Card key={f.title} accent={f.color} className="p-0 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Left */}
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
                          <h3 className="text-navy font-semibold text-sm uppercase tracking-wide mb-2">
                            Objectifs
                          </h3>
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
                          <h3 className="text-navy font-semibold text-sm uppercase tracking-wide mb-2">
                            Contenu
                          </h3>
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

                    {/* Right info box */}
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
                        <p className="text-navy/50 text-xs uppercase tracking-wide mb-1">Délais d'accès</p>
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

        {/* Conditions communes */}
        <section className="bg-white py-12 border-t border-navy-100">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <p className="text-navy/60 text-sm">
              <strong className="text-navy">Tarif :</strong> nous contacter pour un devis personnalisé ·{" "}
              <strong className="text-navy">Handicap :</strong> nous contacter en amont ·{" "}
              <strong className="text-navy">Certification :</strong> Qualiopi (L.6313-1 - 1°)
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-navy to-navy-700 py-16 md:py-20" aria-labelledby="cta-sed-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 id="cta-sed-title" className="font-heading text-white text-2xl md:text-3xl mb-3">
              Découvrir nos formations manutention
            </h2>
            <p className="text-white/65 mb-8 max-w-md mx-auto">
              Vos équipes travaillent sur terrain ou en manutention ? Nous avons un catalogue dédié.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/formations/manutention" variant="secondary" size="lg">
                Formations Manutention →
              </Button>
              <Button href="/contact" variant="white" size="lg">
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

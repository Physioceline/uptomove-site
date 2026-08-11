import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Clock,
  Users,
  MapPin,
  Award,
  TrendingDown,
  Shield,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "UP TO MOVE — Prévention TMS par des kinésithérapeutes en entreprise",
  description:
    "UP TO MOVE forme vos salariés à la prévention des Troubles Musculo-Squelettiques en 1 heure, dans vos locaux, par des kinésithérapeutes diplômés d'État. Qualiopi certifié.",
};

/* ─── Data ─────────────────────────────────────────────── */

const stats = [
  {
    value: "87%",
    label: "des maladies professionnelles reconnues sont des TMS",
    source: "Assurance Maladie / INRS",
    color: "text-orange",
  },
  {
    value: "2,2 Md€",
    label: "de coût annuel pour les entreprises françaises",
    source: "INRS",
    color: "text-yellow",
  },
  {
    value: "80%",
    label: "des TMS sont évitables grâce à une formation adaptée",
    source: "INRS / Assurance Maladie",
    color: "text-teal",
  },
];

const differentiators = [
  {
    icon: "🩺",
    title: "Expertise clinique réelle",
    text: "Nos formateurs sont kinésithérapeutes diplômés d'État. Ils connaissent l'anatomie, les pathologies et les mécanismes des TMS.",
  },
  {
    icon: "🏢",
    title: "Intervention sur le poste réel",
    text: "Nous venons dans vos locaux analyser les vrais gestes et les vraies contraintes — bureau, entrepôt, terrain, soin.",
  },
  {
    icon: "⚡",
    title: "1 heure. Résultats mesurables.",
    text: "Nos formations durent 1h maximum, sans coupure de productivité. Effets documentés : −30% de douleurs déclarées dès la 1ère session.",
  },
  {
    icon: "📋",
    title: "Conformité réglementaire incluse",
    text: "Certifiés Qualiopi, nos formations s'inscrivent dans votre obligation légale (Art. L.4121-1) et alimentent votre DUERP.",
  },
];

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Échange de découverte",
    text: "Premier contact pour comprendre vos enjeux, sans engagement.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Diagnostic & programme",
    text: "Analyse de vos besoins, choix des formations adaptées, devis personnalisé.",
  },
  {
    num: "03",
    icon: Users,
    title: "Intervention dans vos locaux",
    text: "Formation animée par un kinésithérapeute, 1h, sur site ou à distance.",
  },
  {
    num: "04",
    icon: Award,
    title: "Certificat & suivi",
    text: "Délivrance du certificat Passeport Prévention et bilan post-formation.",
  },
];

const situations = [
  {
    icon: "🏭",
    title: "Douleurs au dos ou aux épaules",
    text: "Nous intervenons directement sur site pour former vos équipes aux économies gestuelles en 1h.",
  },
  {
    icon: "📈",
    title: "Absentéisme qui augmente",
    text: "Nous vous aidons à identifier les facteurs de risque et à mettre en place une démarche de prévention concrète.",
  },
  {
    icon: "⚖️",
    title: "Obligation légale de prévention",
    text: "Nos formations Qualiopi s'inscrivent dans votre obligation employeur (Art. L.4121-1) et alimentent votre DUERP.",
  },
  {
    icon: "🖥️",
    title: "Équipes sur écran toute la journée",
    text: "Nous proposons des ateliers spécifiques postes sédentaires — cervicales, poignets, fatigue visuelle.",
  },
  {
    icon: "🏗️",
    title: "Opérateurs portant des charges",
    text: "Nos formations manutention enseignent les techniques d'économie d'effort et de protection articulaire.",
  },
  {
    icon: "🪪",
    title: "Conformité Passeport Prévention",
    text: "UP TO MOVE délivre un certificat intégrable directement dans le Passeport Prévention de chaque salarié.",
  },
];

const sectors = [
  { icon: "🏭", title: "Industrie & Manutention", desc: "Gestes répétitifs, port de charges, postures contraignantes", href: "/formations/manutention" },
  { icon: "🖥️", title: "Bureaux & Travail de bureau", desc: "Station assise prolongée, travail sur écran, fatigue cervicale", href: "/formations/sedentaires" },
  { icon: "🏥", title: "Santé & Aide à la personne", desc: "Transferts sécurisés, gestes métier pour soignants", href: "/formations/manutention" },
  { icon: "🏗️", title: "BTP & Transport", desc: "Travail physique intensif, vibrations, postures extrêmes", href: "/formations/manutention" },
  { icon: "🛒", title: "Commerce & Distribution", desc: "Station debout prolongée, mise en rayon, caisse", href: "/formations/manutention" },
  { icon: "🍽️", title: "Hôtellerie & Restauration", desc: "Port de plateaux, service en salle, ménage intensif", href: "/formations/manutention" },
];

const errors = [
  {
    title: "Attendre que les douleurs deviennent des arrêts",
    text: "Un salarié douloureux mais présent coûte déjà en productivité. Agir avant le premier arrêt divise le coût réel par 3.",
  },
  {
    title: "Croire qu'une affiche ou une note suffit",
    text: "Les bonnes pratiques gestuelles ne s'acquièrent pas par écrit. Elles demandent une démonstration pratique.",
  },
  {
    title: "Confier la formation à un non-spécialiste",
    text: "Un formateur généraliste ne connaît pas l'anatomie ni les mécanismes lésionnels. Seul un kiné peut adapter les gestes.",
  },
  {
    title: "Ne pas documenter sa démarche de prévention",
    text: "Sans trace écrite ni certificat, votre obligation employeur n'est pas prouvée. Le Passeport Prévention est la réponse légale.",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ══ HERO ════════════════════════════════════════════ */}
        <section
          className="relative min-h-screen flex items-center bg-cream overflow-hidden pt-[80px]"
          aria-labelledby="hero-title"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow/20 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange/10 blur-3xl" />
            <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-yellow opacity-80" />
            <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-teal opacity-60" />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32 w-full">
            <div className="max-w-3xl mx-auto text-center">
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge variant="teal">
                  <MapPin size={10} /> Kinésithérapeutes en entreprise · Partout en France
                </Badge>
              </div>

              {/* Title */}
              <h1
                id="hero-title"
                className="font-heading text-navy text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] mb-6"
              >
                Protéger vos équipes,{" "}
                <br className="hidden sm:block" />
                c&apos;est aussi{" "}
                <span className="text-orange">protéger</span>
                <br />
                votre entreprise.
              </h1>

              {/* Subtitle */}
              <p className="text-navy/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                <strong className="text-navy font-bold">UP TO MOVE</strong> forme vos salariés à la prévention des <span className="whitespace-nowrap">Troubles Musculo-Squelettiques</span> —{" "}
                <strong className="text-navy font-semibold">
                  en 1 heure, par des kinésithérapeutes
                </strong>{" "}
                — pour aligner santé au travail, performance et conformité
                réglementaire.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 mb-14">
                <Button href="/calculateur" variant="primary" size="lg">
                  Calculer mon coût TMS →
                </Button>
                <Button
                  href="/formations/sedentaires"
                  variant="primary"
                  size="lg"
                  className="bg-teal hover:bg-teal/85"
                >
                  Découvrir nos formations →
                </Button>
              </div>

              {/* QVCT callout */}
              <div className="flex items-start gap-3 bg-navy/5 border-l-2 border-orange rounded-r-xl px-4 py-3 max-w-xl mx-auto mb-10 text-left">
                <span className="text-orange font-bold text-sm mt-0.5 shrink-0">i</span>
                <p className="text-navy/60 text-sm leading-relaxed">
                  La <strong className="text-navy/80">QVCT</strong> (Qualité de Vie et des Conditions de Travail) passe par la prévention des <strong className="text-navy/80">Troubles Musculo-Squelettiques</strong> — douleurs du dos, cervicales, épaules, poignets — première cause de maladie professionnelle en France.
                </p>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:bottom-28">
<div className="w-10 h-10 rounded-full border-2 border-orange/50 flex items-center justify-center animate-bounce">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3v10M3.5 8.5l4.5 4.5 4.5-4.5" stroke="#E8845C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Clients logos bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm border-t border-navy/10">
            <div className="py-6 px-8 flex items-center gap-8 overflow-hidden">
              <p className="text-navy/35 text-[10px] uppercase tracking-widest font-semibold shrink-0 hidden md:block">
                Ils nous font confiance
              </p>
              <div className="h-5 w-px bg-navy/15 shrink-0 hidden md:block" />
              {/* Marquee */}
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center animate-marquee" style={{width: "200%"}}>
                  {[
                    { src: "/logo-ratp.png", alt: "RATP" },
                    { src: "/logo-daiichi-sankyo.png", alt: "Daiichi-Sankyo" },
                    { src: "/logo-groupe-vsf.png", alt: "Groupe VSf" },
                    { src: "/logo-chavigny.png", alt: "Groupe Chavigny" },
                    { src: "/logo-ratp.png", alt: "RATP" },
                    { src: "/logo-daiichi-sankyo.png", alt: "Daiichi-Sankyo" },
                    { src: "/logo-groupe-vsf.png", alt: "Groupe VSf" },
                    { src: "/logo-chavigny.png", alt: "Groupe Chavigny" },
                  ].map((logo, i) => (
                    <div key={i} className="flex-1 flex items-center justify-center px-4">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={40}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONSTAT ═════════════════════════════════════════ */}
        <section
          className="bg-cream py-[clamp(4rem,8vw,7rem)]"
          aria-labelledby="constat-title"
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="navy" className="mb-4">Le constat</Badge>
              <h2
                id="constat-title"
                className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-navy leading-tight tracking-tight max-w-2xl mx-auto"
              >
                Les <span className="text-orange">Troubles Musculo-Squelettiques</span> coûtent bien plus cher que ce que vous pensez.
              </h2>
              <p className="text-navy/60 mt-4 max-w-xl mx-auto leading-relaxed">
                Dos, cervicales, épaules, poignets : les Troubles Musculo-Squelettiques sont{" "}
                <span className="text-orange font-semibold whitespace-nowrap">la 1ère cause de maladie professionnelle en France</span>
                <br />
                et leurs coûts réels restent massivement sous-estimés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((s) => (
                <Card key={s.value} hover className="text-center p-8">
                  <span
                    className={`font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold ${s.color} block`}
                  >
                    {s.value}
                  </span>
                  <p className="font-body text-navy mt-2 text-sm leading-relaxed">
                    {s.label}
                  </p>
                  <p className="text-navy/40 text-xs mt-2">Source : {s.source}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SOLUTION ════════════════════════════════════════ */}
        <section
          className="bg-white py-[clamp(4rem,8vw,7rem)]"
          aria-labelledby="solution-title"
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <Badge variant="teal" className="mb-4">La solution UP TO MOVE</Badge>
                <h2
                  id="solution-title"
                  className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-navy leading-tight tracking-tight mb-5"
                >
                  L&apos;expertise de kinésithérapeutes au service des
                  entreprises.
                </h2>
                <p className="text-navy/65 leading-relaxed mb-8">
                  Chez UP TO MOVE, nous mettons nos compétences de
                  kinésithérapeutes et consultants en ergonomie au service des
                  entreprises — bureau ou manutention, nous adaptons chaque
                  intervention à vos conditions réelles de travail.
                </p>
                <div className="space-y-4">
                  {[
                    "Formations de 1h maximum",
                    "Animées par des kinésithérapeutes diplômés d'État",
                    "En présentiel dans vos locaux ou à distance",
                    "Certifiées Qualiopi — alimentent votre DUERP",
                    "Certificat Passeport Prévention inclus",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-teal shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-navy text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="/formations/sedentaires" variant="primary" size="md">
                    Formations Sédentaires
                  </Button>
                  <Button href="/formations/manutention" variant="outline" size="md">
                    Formations Manutention
                  </Button>
                </div>
              </div>

              {/* Result highlight */}
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-navy-700 rounded-[1.5rem] p-10 text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange/20 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal/20 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
                  <span className="font-heading text-[5rem] font-bold text-yellow leading-none block">
                    −30%
                  </span>
                  <p className="text-white/85 text-base mt-4 leading-relaxed max-w-xs mx-auto">
                    1h de formation peut réduire de{" "}
                    <strong>30% les douleurs déclarées</strong> par les
                    salariés.
                  </p>
                  <p className="text-white/40 text-xs mt-4">
                    Démarche concrète, sans coupure de productivité,
                    <br />
                    partout en France.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ DIFFÉRENCE ══════════════════════════════════════ */}
        <section
          className="bg-cream py-[clamp(4rem,8vw,7rem)]"
          aria-labelledby="difference-title"
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="orange" className="mb-4">Notre différence</Badge>
              <h2
                id="difference-title"
                className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-navy leading-tight tracking-tight max-w-xl mx-auto"
              >
                Ce qui nous distingue des formateurs classiques
              </h2>
              <p className="text-navy/60 mt-4 max-w-lg mx-auto">
                Nous ne sommes pas des formateurs généralistes. Nous sommes des
                kinésithérapeutes — et cette différence change tout.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {differentiators.map((d) => (
                <Card key={d.title} hover accent="none" className="flex gap-5 p-6">
                  <span className="text-3xl shrink-0 mt-0.5" aria-hidden="true">{d.icon}</span>
                  <div>
                    <h3 className="font-heading text-navy font-bold text-lg mb-2">
                      {d.title}
                    </h3>
                    <p className="text-navy/65 text-sm leading-relaxed">{d.text}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Comparison table */}
            <div className="bg-white rounded-[1.25rem] overflow-hidden shadow-[var(--shadow-card)]">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-4 font-semibold">Critère</th>
                      <th className="p-4 font-bold text-yellow">UP TO MOVE</th>
                      <th className="p-4 font-semibold text-white/70">
                        Formateurs généralistes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Profil des formateurs", "Kinésithérapeutes D.E.", "Coachs / consultants"],
                      ["Analyse du poste", "✓ Incluse", "Rarement proposée"],
                      ["Durée de formation", "1h max", "½ journée à 2 jours"],
                      ["Certification Qualiopi", "✓ Oui", "Variable"],
                      ["Passeport Prévention", "✓ Délivré", "Non"],
                      ["Alimenter le DUERP", "✓ Oui", "Rarement"],
                    ].map(([critere, utm, gen], i) => (
                      <tr
                        key={critere}
                        className={i % 2 === 0 ? "bg-white" : "bg-cream/60"}
                      >
                        <td className="p-4 text-navy font-medium">{critere}</td>
                        <td className="p-4 text-center font-semibold text-teal-dark">
                          {utm}
                        </td>
                        <td className="p-4 text-center text-navy/50">{gen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PASSEPORT PRÉVENTION ════════════════════════════ */}
        <section className="bg-navy py-[clamp(3rem,6vw,5rem)]" aria-labelledby="passport-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <Badge variant="yellow" className="mb-4">
                  Nouveau · Obligatoire 2026
                </Badge>
                <h2
                  id="passport-title"
                  className="font-heading text-white text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-tight mb-4"
                >
                  Passeport Prévention : nous délivrons votre certificat.
                </h2>
                <p className="text-white/70 leading-relaxed max-w-lg">
                  À l&apos;issue de chaque formation, UP TO MOVE délivre un
                  certificat directement intégrable dans le Passeport Prévention
                  de chaque salarié — le registre numérique officiel de toutes
                  les formations à la sécurité au travail.
                </p>
                <Button href="/contact" variant="secondary" size="md" className="mt-6">
                  En savoir plus →
                </Button>
              </div>
              <div className="flex-shrink-0 bg-white/10 border border-white/20 rounded-[1.25rem] p-8 text-center">
                <div className="text-6xl mb-4">🪪</div>
                <p className="text-white font-bold text-lg">
                  Passeport Prévention
                </p>
                <p className="text-white/60 text-sm mt-1">Certifié &amp; traçable</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ MÉTHODE ═════════════════════════════════════════ */}
        <section
          className="bg-white py-[clamp(4rem,8vw,7rem)]"
          aria-labelledby="method-title"
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="navy" className="mb-4">Notre méthode</Badge>
              <h2
                id="method-title"
                className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-navy leading-tight tracking-tight"
              >
                Du premier contact à la formation terrain.
              </h2>
              <p className="text-navy/60 mt-3 max-w-md mx-auto">
                Une méthode éprouvée en 4 étapes, du diagnostic initial à
                l&apos;intervention dans vos locaux.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.num} className="relative flex flex-col">
                  <Card className="flex-1 p-6 text-center" hover>
                    <span className="text-navy/20 font-heading text-5xl font-bold block mb-3">
                      {step.num}
                    </span>
                    <step.icon className="text-orange mx-auto mb-3" size={28} />
                    <h3 className="font-heading text-navy font-bold text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{step.text}</p>
                  </Card>
                  {i < steps.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-navy/20 z-10"
                      size={20}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VOTRE SITUATION ══════════════════════════════════ */}
        <section
          className="bg-cream py-[clamp(4rem,8vw,7rem)]"
          aria-labelledby="situation-title"
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="teal" className="mb-4">Votre situation</Badge>
              <h2
                id="situation-title"
                className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-navy leading-tight tracking-tight"
              >
                Vous vous reconnaissez ?
              </h2>
              <p className="text-navy/60 mt-3 max-w-lg mx-auto">
                Chaque entreprise est unique. Voici les situations les plus
                fréquentes que nous accompagnons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {situations.map((s) => (
                <Card key={s.title} hover className="flex gap-4 p-5">
                  <span className="text-2xl shrink-0" aria-hidden="true">{s.icon}</span>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">{s.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTEURS ════════════════════════════════════════ */}
        <section
          className="bg-white py-[clamp(4rem,8vw,7rem)]"
          aria-labelledby="sectors-title"
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="navy" className="mb-4">Pour qui</Badge>
              <h2
                id="sectors-title"
                className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-navy leading-tight tracking-tight"
              >
                Nous intervenons dans tous les secteurs
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sectors.map((s) => (
                <Link key={s.title} href={s.href} className="block">
                  <Card hover className="p-5 text-center h-full cursor-pointer">
                    <span className="text-3xl block mb-2" aria-hidden="true">{s.icon}</span>
                    <h3 className="font-semibold text-navy text-sm mb-1">{s.title}</h3>
                    <p className="text-navy/55 text-xs leading-relaxed">{s.desc}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ERREURS À ÉVITER ════════════════════════════════ */}
        <section
          className="bg-navy py-[clamp(4rem,8vw,7rem)]"
          aria-labelledby="errors-title"
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="yellow" className="mb-4">Les erreurs à éviter</Badge>
              <h2
                id="errors-title"
                className="font-heading text-white text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-tight"
              >
                La différence entre un arrêt évité<br className="hidden md:block" />
                et une maladie professionnelle
              </h2>
              <p className="text-white/60 mt-3 max-w-lg mx-auto">
                C&apos;est souvent la précocité de l&apos;action.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {errors.map((e) => (
                <div
                  key={e.title}
                  className="bg-white/5 border border-white/10 rounded-[1.25rem] p-6 flex gap-4"
                >
                  <span className="text-orange shrink-0 mt-0.5">
                    <TrendingDown size={20} />
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">
                      ⚠ {e.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{e.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ NEWSLETTER ══════════════════════════════════════ */}
        <section id="newsletter" className="bg-cream py-16 md:py-20 border-t border-navy-100 text-center" aria-labelledby="newsletter-title">
          <div className="max-w-[600px] mx-auto px-5 md:px-8">
            <h2 id="newsletter-title" className="font-heading text-navy text-2xl md:text-3xl leading-tight tracking-tight mb-3">
              Newsletter <span className="text-orange">UP TO MOVE</span>
            </h2>
            <p className="text-navy/60 text-sm mb-8">
              S&apos;inscrire ici pour rester informé des actualités TMS, prévention et QVCT.
            </p>
            <NewsletterForm />
          </div>
        </section>

        {/* ══ QUALIOPI ════════════════════════════════════════ */}
        <section className="bg-cream py-10 border-y border-navy-100">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                <Award className="text-yellow" size={22} />
              </div>
              <div>
                <p className="font-heading font-bold text-navy text-base">
                  Certification Qualiopi
                </p>
                <p className="text-navy/60 text-sm">
                  La certification qualité a été délivrée au titre des Actions
                  de formation (L.6313-1 - 1°)
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-navy text-sm font-semibold flex items-center gap-1.5 hover:text-orange transition-colors shrink-0"
            >
              Consulter le certificat Qualiopi{" "}
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ══ CTA FINAL ═══════════════════════════════════════ */}
        <section
          className="bg-gradient-to-br from-orange via-[#ff7b35] to-yellow py-[clamp(4rem,8vw,7rem)]"
          aria-labelledby="cta-title"
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <Zap className="text-navy mx-auto mb-4 opacity-30" size={40} />
            <h2
              id="cta-title"
              className="font-heading text-navy text-[clamp(1.75rem,4vw,3rem)] leading-tight tracking-tight mb-4"
            >
              Prêt à protéger vos équipes dès maintenant ?
            </h2>
            <p className="text-navy/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Demandez votre programme personnalisé de prévention des TMS.
              <br />
              <strong>Devis gratuit sous 48h</strong>, intervention possible
              partout en France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="white" size="lg">
                Demander un devis gratuit
              </Button>
              <a
                href="tel:0631197769"
                className="flex items-center gap-2.5 text-navy font-bold text-base hover:opacity-80 transition-opacity"
              >
                <Phone size={18} />
                06 31 19 77 69
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

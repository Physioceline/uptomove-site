import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CaseStudyTabs } from "@/components/CaseStudyTabs";

export const metadata: Metadata = {
  title: "Nos Clients — Ils nous font confiance",
  description:
    "Découvrez les entreprises qui font confiance à UP TO MOVE pour la prévention TMS de leurs équipes. Tous secteurs, toute taille.",
};

const sectors = [
  { icon: "🏭", name: "Industrie & Manutention", examples: "Logistique, agroalimentaire, automobile, packaging", href: "/formations/manutention" },
  { icon: "🖥️", name: "Bureaux & Services", examples: "Banques, assurances, conseil, IT, administration", href: "/formations/sedentaires" },
  { icon: "🏥", name: "Santé & Aide à la personne", examples: "Cliniques, EHPAD, aide à domicile, laboratoires", href: "/formations/manutention" },
  { icon: "🏗️", name: "BTP & Transport", examples: "Construction, travaux publics, transport routier", href: "/formations/manutention" },
  { icon: "🛒", name: "Commerce & Distribution", examples: "Grande distribution, retail, e-commerce", href: "/formations/manutention" },
  { icon: "🍽️", name: "Hôtellerie & Restauration", examples: "Hôtels, restaurants, traiteurs, collectivités", href: "/formations/manutention" },
];

const testimonials = [
  {
    text: "La formation a été très concrète et adaptée à nos postes de travail. Nos opérateurs ont apprécié l'intervention directe sur leurs gestes réels. Les douleurs déclarées ont nettement diminué dans le mois suivant.",
    role: "Responsable HSE",
    sector: "Industrie",
  },
  {
    text: "En tant que DRH, je cherchais une solution qui s'intègre dans notre DUERP et qui soit finançable OPCO. UP TO MOVE a répondu à ces deux exigences tout en proposant une qualité pédagogique bien au-dessus de ce que nous avions eu jusque-là.",
    role: "DRH",
    sector: "Services",
  },
  {
    text: "Le fait que les formateurs soient kinésithérapeutes fait toute la différence. Ils ont su adapter leurs recommandations aux pathologies existantes de certains de nos salariés. Très professionnel.",
    role: "Médecin du travail",
    sector: "Santé",
  },
];

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#1E2952] pt-[100px] pb-16" aria-labelledby="clients-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Badge variant="teal" className="mb-4">Nos clients</Badge>
            <h1
              id="clients-title"
              className="font-heading text-white text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight max-w-2xl mb-5"
            >
              Ils nous font confiance pour protéger leurs équipes.
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              PME, ETI, grands groupes — nous accompagnons des entreprises de tous secteurs
              et de toutes tailles dans leur démarche de prévention TMS.
            </p>
          </div>
        </section>

        {/* Logos clients */}
        <section className="bg-cream py-10 border-b border-navy-100">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {[
              { src: "/logo-ratp.png", alt: "RATP" },
              { src: "/logo-chavigny.png", alt: "Groupe Chavigny" },
              { src: "/logo-daiichi-sankyo.png", alt: "Daiichi-Sankyo" },
              { src: "/logo-groupe-vsf.png", alt: "Groupe VSF" },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={44}
                className="h-9 md:h-11 w-auto object-contain opacity-80"
              />
            ))}
          </div>
        </section>

        {/* Étude de cas — RATP */}
        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]" id="case-ratp">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="bg-white border border-navy-100 rounded-[20px] px-6 py-9 md:px-12 md:py-[52px] max-w-[820px] mx-auto text-center">
              <Image src="/logo-ratp.png" alt="RATP" width={140} height={56} className="h-14 w-auto mx-auto mb-6 object-contain" />
              <h3 className="font-heading font-extrabold text-[clamp(1.2rem,2.4vw,1.7rem)] text-navy tracking-tight mb-2.5 flex items-center justify-center gap-3 flex-wrap">
                <span className="inline-block bg-yellow text-navy font-heading font-extrabold text-lg px-5 py-2 rounded-[10px]">RATP</span>
                {" "}– CENTRE BUS BELLIARD –{" "}
                <span className="text-orange">PARIS (75)</span>
              </h3>
              <p className="text-navy text-base font-semibold mb-6">
                2 journées pour la prévention des Troubles Musculo-Squelettiques
              </p>

              <CaseStudyTabs
                objectif={
                  <>
                    <p>Prévenir les <strong>Troubles Musculo-Squelettiques (TMS)</strong>, première cause de maladies professionnelles reconnues en France, auprès de l&apos;ensemble des agents du centre bus, toutes fonctions confondues (tertiaires, exploitation, maintenance).</p>
                    <p>Le programme combine <strong>sensibilisation théorique</strong> et <strong>actions pratiques</strong> directement applicables sur le terrain, à travers plusieurs ateliers complémentaires :</p>
                    <ul className="list-disc">
                      <li><strong>Économies gestuelles et posturales</strong> — apprendre à ajuster ses gestes et postures pour limiter les contraintes physiques au quotidien.</li>
                      <li><strong>Fatigue visuelle</strong> — comprendre et prévenir les tensions liées aux écrans et à la sollicitation visuelle prolongée, avec une attention particulière portée aux <strong>chauffeurs de bus</strong>, exposés à une vigilance visuelle soutenue tout au long de leur conduite.</li>
                      <li><strong>Auto-massage</strong> — acquérir des techniques simples pour soulager les zones du corps les plus sollicitées.</li>
                      <li><strong>Gestion des situations à stress</strong> — développer des outils concrets pour mieux faire face à la pression et aux imprévus du métier.</li>
                    </ul>
                  </>
                }
                resultats={
                  <>
                    <p><strong>Résultats</strong> :</p>
                    <ul className="list-disc">
                      <li><strong>Implication de tous les services</strong> du centre bus, de jour comme de nuit, avec une mobilisation transversale de l&apos;ensemble des équipes.</li>
                      <li><strong>Acquisition de gestes préventifs directement applicables</strong>, permettant de réduire les contraintes physiques dans les gestes métier au quotidien.</li>
                      <li><strong>Renforcement durable de la culture de prévention</strong>, appuyé par des outils pédagogiques remis à chaque participant pour prolonger les apprentissages sur le terrain.</li>
                    </ul>
                  </>
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <Image src="/ratp-1.jpg" alt="Modèle anatomique de colonne vertébrale utilisé en sensibilisation TMS — RATP Centre Bus Belliard" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
                <Image src="/ratp-2.jpg" alt="Atelier de sensibilisation aux Troubles Musculo-Squelettiques — RATP Centre Bus Belliard" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
                <Image src="/ratp-3.jpg" alt="Équipe du Centre Bus Belliard avec les guides de prévention — RATP" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Étude de cas — Groupe Chavigny */}
        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]" id="case-chavigny">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="bg-white border border-navy-100 rounded-[20px] px-6 py-9 md:px-12 md:py-[52px] max-w-[820px] mx-auto text-center">
              <Image src="/logo-chavigny.png" alt="Groupe Chavigny" width={140} height={56} className="h-14 w-auto mx-auto mb-6 object-contain" />
              <div className="inline-block bg-yellow text-navy font-heading font-extrabold text-xl px-7 py-2.5 rounded-[10px] mb-5">
                GROUPE CHAVIGNY
              </div>
              <p className="text-orange font-bold text-sm leading-relaxed mb-5">
                Eure et Loir (28), Indre et Loire (37), Loir et Cher (41), Maine et Loire (49), Sarthe (72), Essonne (91).
              </p>
              <Link href="/formations/sedentaires" className="text-navy font-bold underline font-heading text-base mb-6 inline-block hover:text-orange transition-colors">
                Ateliers &ldquo;Économie Gestuelle et Posturale&rdquo; (EGP)
              </Link>
              <div className="font-heading text-[46px] font-extrabold text-teal leading-none">+350</div>
              <p className="italic text-navy text-sm my-1.5 mb-4">personnes formées</p>
              <p className="text-teal-dark font-bold text-sm mb-8">
                Tournée répartie sur 2 semaines dans les différentes agences du groupe
              </p>

              <CaseStudyTabs
                objectif={
                  <>
                    <p><strong>Objectifs</strong> :</p>
                    <p>Sensibiliser l&apos;ensemble des collaborateurs — qu&apos;ils occupent des postes <strong>sédentaires</strong> ou des postes de <strong>manutention</strong> — aux gestes et postures essentiels pour préserver durablement leur santé.<br />À travers des ateliers d&apos;<strong>Économie Gestuelle et Posturale</strong> adaptés à chaque typologie de métier, l&apos;objectif est de :</p>
                    <ul className="list-disc">
                      <li>faire comprendre les mécanismes des TMS et leurs facteurs aggravants,</li>
                      <li>apprendre à ajuster ses gestes quotidiens pour réduire les contraintes physiques,</li>
                      <li>intégrer des mouvements simples pour limiter la fatigue, les tensions et les douleurs,</li>
                      <li>développer des réflexes de prévention directement applicables sur poste, quel que soit l&apos;environnement de travail.</li>
                    </ul>
                  </>
                }
                resultats={
                  <>
                    <p><strong>Résultats</strong> :</p>
                    <ul className="list-disc">
                      <li>Des collaborateurs plus <strong>conscients des risques</strong> liés à leurs gestes quotidiens et capables d&apos;adopter spontanément des postures protectrices.</li>
                      <li>Une meilleure capacité à <strong>adapter leurs mouvements</strong> pour réduire les sollicitations excessives (dos, épaules, poignets, genoux), aussi bien au bureau que sur les postes physiques.</li>
                      <li>Une diminution des tensions corporelles grâce à des <strong>techniques simples et reproductibles</strong> de mobilisation, respiration et auto-correction.</li>
                      <li>Des équipes plus autonomes, confiantes et actrices de leur santé, favorisant un environnement de travail plus <strong>sûr, confortable et durable</strong>.</li>
                      <li>Pour l&apos;entreprise : une baisse du risque de TMS, une amélioration du bien-être global et une <strong>performance accrue</strong> grâce à des collaborateurs mieux préparés et moins exposés.</li>
                    </ul>
                    <p className="italic text-navy mt-2.5 mb-0">Une opération d&apos;envergure réussie, avec une belle mobilisation des équipes !</p>
                  </>
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Image src="/chavigny-1.jpg" alt="Atelier Économie Gestuelle et Posturale — Groupe Chavigny" width={400} height={180} className="w-full h-[180px] object-cover rounded-xl" />
                <Image src="/chavigny-2.jpg" alt="Exercices de mobilité en groupe — Groupe Chavigny" width={400} height={180} className="w-full h-[180px] object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Étude de cas — Daiichi-Sankyo */}
        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]" id="case-daiichi">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="bg-white border border-navy-100 rounded-[20px] px-6 py-9 md:px-12 md:py-[52px] max-w-[820px] mx-auto text-center">
              <Image src="/logo-daiichi-sankyo.png" alt="Daiichi-Sankyo" width={140} height={56} className="h-14 w-auto mx-auto mb-6 object-contain" />
              <h3 className="font-heading font-extrabold text-[clamp(1.2rem,2.4vw,1.7rem)] text-navy tracking-tight mb-2.5 flex items-center justify-center gap-3 flex-wrap">
                <span className="inline-block bg-yellow text-navy font-heading font-extrabold text-lg px-5 py-2 rounded-[10px]">DAIICHI SANKYO FRANCE</span>
                {" "}– SIÈGE DU GROUPE –{" "}
                <span className="text-orange">RUEIL-MALMAISON (92)</span>
              </h3>
              <p className="text-navy text-base font-semibold mb-6">
                Trois ateliers d&apos;Économie Gestuelle et Posturale (EGP) réalisés auprès des équipes sédentaires.
              </p>

              <CaseStudyTabs
                objectif={
                  <>
                    <p><strong>Objectif</strong> : Prévenir les TMS en environnement de bureau en s&apos;appuyant sur une approche <strong>concrète, interactive et entièrement personnalisée</strong> aux habitudes et contraintes de chaque collaborateur.</p>
                    <p>L&apos;objectif est de permettre à chacun de :</p>
                    <ul className="list-disc">
                      <li>Comprendre l&apos;impact des postures prolongées, des tensions accumulées et du manque de mobilité sur la santé,</li>
                      <li>Intégrer des <strong>exercices pratiques</strong> et des <strong>mouvements simples</strong> pour améliorer la posture, réduire les douleurs et entretenir la mobilité au quotidien,</li>
                      <li>Découvrir des techniques de <strong>respiration guidée</strong> pour diminuer le stress, favoriser la détente musculaire et optimiser la concentration,</li>
                      <li>Développer des réflexes durables pour bouger davantage, s&apos;étirer régulièrement et adopter une meilleure hygiène posturale,</li>
                      <li>Devenir acteur de sa santé au travail en appliquant des solutions simples, rapides et adaptées à son poste.</li>
                    </ul>
                  </>
                }
                resultats={
                  <>
                    <p>À l&apos;issue de la formation, les collaborateurs sont sensibilisés, impliqués et mieux armés pour faire face aux contraintes du travail sédentaire et aux situations génératrices de stress.</p>
                    <p>Ils repartent avec :</p>
                    <ul className="list-disc">
                      <li>des outils concrets, faciles à intégrer dans leur journée : micro-pauses actives, mobilisation douce, étirements ciblés,</li>
                      <li>des exercices de respiration efficaces pour gérer la pression, réguler les tensions nerveuses et améliorer leur capacité à rester concentrés,</li>
                      <li>des techniques de visualisation positive pour renforcer confiance, calme et stabilité émotionnelle,</li>
                      <li>une meilleure conscience corporelle et posturale, leur permettant d&apos;ajuster spontanément leurs positions de travail,</li>
                      <li>une réduction des tensions musculaires, un regain de confort et un sentiment de bien-être général.</li>
                    </ul>
                    <p className="italic text-navy mt-2.5 mb-0">Pour l&apos;entreprise, cela se traduit par des collaborateurs plus autonomes, plus sereins et plus performants, capables de prévenir les douleurs avant qu&apos;elles ne s&apos;installent.</p>
                  </>
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <Image src="/daiichi-1.jpg" alt="Atelier Économie Gestuelle et Posturale — Daiichi-Sankyo France" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
                <Image src="/daiichi-2.jpg" alt="Présentation Économies gestuelles et posturales sédentaire — Daiichi-Sankyo France" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
                <Image src="/daiichi-3.jpg" alt="Salle de réunion préparée pour l'atelier — Daiichi-Sankyo France" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Étude de cas — Groupe VSF */}
        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]" id="case-vsf">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="bg-white border border-navy-100 rounded-[20px] px-6 py-9 md:px-12 md:py-[52px] max-w-[820px] mx-auto text-center">
              <Image src="/logo-groupe-vsf.png" alt="Groupe VSF" width={140} height={56} className="h-14 w-auto mx-auto mb-6 object-contain" />
              <h3 className="font-heading font-extrabold text-[clamp(1.2rem,2.4vw,1.7rem)] text-navy tracking-tight mb-2.5 flex items-center justify-center gap-3 flex-wrap">
                <span className="inline-block bg-yellow text-navy font-heading font-extrabold text-lg px-5 py-2 rounded-[10px]">GROUPE VSF</span>
                {" "}– SIÈGE DU GROUPE –{" "}
                <span className="text-orange">SAINT-AMAND-LONGPRÉ (41)</span>
              </h3>
              <p className="text-navy text-base font-semibold mb-6">
                Réalisation de plusieurs ateliers thématiques de prévention
              </p>

              <CaseStudyTabs
                objectif={
                  <>
                    <ul className="list-disc">
                      <li>Échauffements – pour bien démarrer la journée et prévenir les tensions</li>
                      <li>Auto-massage – pour soulager les zones sollicitées au quotidien</li>
                      <li>Gestion des situations à stress – pour mieux gérer la pression au travail, avec des outils simples et efficaces</li>
                    </ul>
                    <p><strong>Objectifs</strong> :</p>
                    <ul className="list-disc">
                      <li><strong>Préparer le corps</strong> dès le début de la journée grâce à des échauffements simples pour éviter les tensions musculaires.</li>
                      <li><strong>Apprendre des techniques d&apos;auto-massage</strong> pour soulager les zones les plus sollicitées et réduire l&apos;inconfort quotidien.</li>
                      <li><strong>Développer des outils efficaces de gestion du stress,</strong> basés sur la respiration et la visualisation, pour mieux faire face à la pression professionnelle.</li>
                    </ul>
                  </>
                }
                resultats={
                  <>
                    <p><strong>Résultats</strong> :</p>
                    <ul className="list-disc">
                      <li>Des collaborateurs qui démarrent la journée avec plus d&apos;énergie, de mobilité et moins de douleurs.</li>
                      <li>Une meilleure autonomie dans la prévention des tensions grâce à des gestes rapides et faciles à reproduire.</li>
                      <li>Une réduction du stress et une amélioration du bien-être mental, permettant de travailler avec plus de calme, de concentration et de sérénité.</li>
                    </ul>
                  </>
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <Image src="/vsf-1.jpg" alt="Atelier échauffements en entreprise — Groupe VSF" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
                <Image src="/vsf-2.jpg" alt="Poste de manutention en entrepôt logistique — Groupe VSF" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
                <Image src="/vsf-3.jpg" alt="Séance d'étirements collective sur le site logistique — Groupe VSF" width={300} height={180} className="w-full h-[180px] object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Secteurs */}
        <section className="bg-white py-[clamp(4rem,8vw,7rem)]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="navy" className="mb-4">Tous secteurs</Badge>
              <h2 className="font-heading text-navy text-2xl md:text-3xl leading-tight">
                Nous intervenons dans tous les secteurs d&apos;activité
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectors.map((s) => (
                <Link key={s.name} href={s.href} className="block">
                  <Card hover className="p-5 flex gap-4 h-full cursor-pointer">
                    <span className="text-3xl shrink-0">{s.icon}</span>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{s.name}</h3>
                      <p className="text-navy/55 text-xs leading-relaxed">{s.examples}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="orange" className="mb-4">Témoignages</Badge>
              <h2 className="font-heading text-navy text-2xl md:text-3xl leading-tight">
                Ce qu&apos;ils disent de nous
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <Card key={i} hover className="p-6 flex flex-col">
                  <blockquote className="text-navy/70 text-sm leading-relaxed flex-1 italic mb-5">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <footer className="border-t border-navy-100 pt-4">
                    <p className="text-navy font-semibold text-sm">{t.role}</p>
                    <p className="text-navy/50 text-xs">{t.sector}</p>
                  </footer>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-navy to-navy-700 py-16 md:py-20" aria-labelledby="cta-clients-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 id="cta-clients-title" className="font-heading text-white text-2xl md:text-3xl mb-4">
              Rejoignez nos clients
            </h2>
            <p className="text-white/65 max-w-md mx-auto mb-8">
              Devis personnalisé gratuit sous 48h. Intervention possible partout en France.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Demander un devis →
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

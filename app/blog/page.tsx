import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Blog — Veille TMS & Prévention au travail",
  description:
    "Actualités, réglementation et conseils pratiques sur la prévention des Troubles Musculo-Squelettiques en entreprise. Par UP TO MOVE.",
};

const articles = [
  {
    category: "Réglementation",
    date: "Mai 2026",
    title: "Passeport Prévention 2026 : ce que les employeurs doivent savoir",
    excerpt:
      "L'obligation de traçabilité des formations à la sécurité entre pleinement en vigueur. Voici ce que cela change pour votre entreprise et comment UP TO MOVE vous accompagne.",
    readTime: "4 min",
    color: "yellow" as const,
  },
  {
    category: "TMS & Santé",
    date: "Avril 2026",
    title: "87% des maladies professionnelles sont des TMS : comprendre les chiffres",
    excerpt:
      "Les dernières données de l'Assurance Maladie confirment la prédominance des TMS parmi les maladies professionnelles. Décryptage des chiffres et implications pour les entreprises.",
    readTime: "6 min",
    color: "teal" as const,
  },
  {
    category: "Ergonomie",
    date: "Mars 2026",
    title: "Télétravail et TMS : les nouveaux risques à anticiper",
    excerpt:
      "Le développement du télétravail a créé de nouveaux contextes d'exposition aux TMS. Comment adapter votre politique de prévention aux collaborateurs en home office.",
    readTime: "5 min",
    color: "orange" as const,
  },
  {
    category: "Réglementation",
    date: "Février 2026",
    title: "DUERP 2026 : les nouvelles obligations en matière de prévention des risques",
    excerpt:
      "La réforme du Document Unique d'Évaluation des Risques Professionnels renforce les exigences. Ce que vous devez documenter, et comment nos formations contribuent à votre conformité.",
    readTime: "5 min",
    color: "yellow" as const,
  },
  {
    category: "Formation",
    date: "Janvier 2026",
    title: "Pourquoi confier vos formations TMS à un kinésithérapeute plutôt qu'à un coach",
    excerpt:
      "Les différences fondamentales entre un professionnel de santé diplômé et un formateur généraliste, et pourquoi cela change radicalement l'efficacité de votre démarche de prévention.",
    readTime: "4 min",
    color: "teal" as const,
  },
  {
    category: "Cas terrain",
    date: "Décembre 2025",
    title: "−30% de douleurs en 1 heure : retour sur une intervention en entrepôt logistique",
    excerpt:
      "Comment une session d'économies gestuelles de 1h a réduit de 30% les douleurs déclarées par les préparateurs de commandes d'une entreprise de logistique en région parisienne.",
    readTime: "7 min",
    color: "orange" as const,
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#1E2952] pt-[100px] pb-16" aria-labelledby="blog-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Badge variant="teal" className="mb-4">Blog</Badge>
            <h1
              id="blog-title"
              className="font-heading text-white text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight max-w-2xl mb-5"
            >
              Veille TMS & Prévention au travail
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Actualités réglementaires, conseils pratiques et retours terrain pour
              les professionnels RH, HSE et santé au travail.
            </p>
          </div>
        </section>

        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            {/* Featured */}
            <Card hover accent="yellow" className="mb-8 p-0 overflow-hidden">
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="yellow">{articles[0].category}</Badge>
                    <span className="text-navy/50 text-xs">{articles[0].date} · {articles[0].readTime} de lecture</span>
                  </div>
                  <h2 className="font-heading text-navy text-xl md:text-2xl font-bold mb-3">
                    {articles[0].title}
                  </h2>
                  <p className="text-navy/65 text-sm leading-relaxed mb-5">{articles[0].excerpt}</p>
                  <Button href="/blog" variant="primary" size="sm">Lire l&apos;article →</Button>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow to-orange flex items-center justify-center text-5xl">
                    📋
                  </div>
                </div>
              </div>
            </Card>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.slice(1).map((a) => (
                <Card key={a.title} hover accent={a.color} className="p-5 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={a.color} className="text-xs">{a.category}</Badge>
                    <span className="text-navy/40 text-xs">{a.date}</span>
                  </div>
                  <h3 className="font-heading text-navy font-bold text-base leading-snug mb-2 flex-1">
                    {a.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-navy/40 text-xs">{a.readTime} de lecture</span>
                    <Button href="/blog" variant="ghost" size="sm" className="text-orange px-2">
                      Lire →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-navy/50 text-sm mb-4">Restez informé des évolutions réglementaires TMS</p>
              <Button href="/#newsletter" variant="primary" size="md">
                S&apos;inscrire à la newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Devis gratuit sous 48h",
  description:
    "Contactez UP TO MOVE pour un devis personnalisé de formation TMS. Réponse sous 48h. Intervention partout en France.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#1E2952] pt-[100px] pb-16" aria-labelledby="contact-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Badge variant="yellow" className="mb-4">Contact</Badge>
            <h1
              id="contact-title"
              className="font-heading text-white text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4"
            >
              Demandez votre devis gratuit
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Réponse sous 48h. Programme personnalisé. Partout en France.
            </p>
          </div>
        </section>

        <section className="bg-cream py-[clamp(4rem,8vw,6rem)]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact info */}
              <div className="space-y-5">
                <Card className="flex gap-4 items-start p-5">
                  <Phone className="text-orange shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">Téléphone</p>
                    <a href="tel:0631197769" className="text-navy/70 hover:text-orange transition-colors font-medium">
                      06 31 19 77 69
                    </a>
                  </div>
                </Card>
                <Card className="flex gap-4 items-start p-5">
                  <Mail className="text-orange shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">Email</p>
                    <a href="mailto:physio.celine@gmail.com" className="text-navy/70 hover:text-orange transition-colors text-sm break-all">
                      physio.celine@gmail.com
                    </a>
                  </div>
                </Card>
                <Card className="flex gap-4 items-start p-5">
                  <Clock className="text-teal shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">Délai de réponse</p>
                    <p className="text-navy/70 text-sm">Sous 48h ouvrées</p>
                  </div>
                </Card>
                <Card className="flex gap-4 items-start p-5">
                  <MapPin className="text-teal shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">Zone d&apos;intervention</p>
                    <p className="text-navy/70 text-sm">Partout en France · Présentiel et distanciel</p>
                  </div>
                </Card>

                <div className="bg-navy rounded-[1.25rem] p-6 text-center">
                  <p className="text-yellow font-bold text-lg font-heading mb-1">✓ Qualiopi</p>
                  <p className="text-white/70 text-xs">Actions de formation (L.6313-1 - 1°)</p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="p-6 md:p-8">
                  <h2 className="font-heading text-navy text-xl font-bold mb-6">
                    Décrivez votre besoin
                  </h2>
                  <form
                    action="mailto:physio.celine@gmail.com"
                    method="post"
                    encType="text/plain"
                    aria-label="Formulaire de contact"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="prenom" className="block text-navy font-semibold text-sm mb-1.5">
                          Prénom *
                        </label>
                        <input
                          id="prenom"
                          name="prenom"
                          type="text"
                          required
                          autoComplete="given-name"
                          className="w-full border border-navy-100 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-cream"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label htmlFor="nom" className="block text-navy font-semibold text-sm mb-1.5">
                          Nom *
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          required
                          autoComplete="family-name"
                          className="w-full border border-navy-100 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-cream"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="email" className="block text-navy font-semibold text-sm mb-1.5">
                          Email professionnel *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="w-full border border-navy-100 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-cream"
                          placeholder="vous@entreprise.fr"
                        />
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block text-navy font-semibold text-sm mb-1.5">
                          Téléphone
                        </label>
                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          autoComplete="tel"
                          className="w-full border border-navy-100 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-cream"
                          placeholder="06 XX XX XX XX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="entreprise" className="block text-navy font-semibold text-sm mb-1.5">
                          Entreprise *
                        </label>
                        <input
                          id="entreprise"
                          name="entreprise"
                          type="text"
                          required
                          autoComplete="organization"
                          className="w-full border border-navy-100 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-cream"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      <div>
                        <label htmlFor="fonction" className="block text-navy font-semibold text-sm mb-1.5">
                          Fonction
                        </label>
                        <select
                          id="fonction"
                          name="fonction"
                          className="w-full border border-navy-100 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-cream"
                        >
                          <option value="">Sélectionner...</option>
                          <option value="drh">DRH</option>
                          <option value="rh">Responsable RH</option>
                          <option value="hse">Responsable HSE / QHSE</option>
                          <option value="medecin">Médecin du travail</option>
                          <option value="dirigeant">Dirigeant / DAF</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="effectif" className="block text-navy font-semibold text-sm mb-1.5">
                        Effectif concerné
                      </label>
                      <select
                        id="effectif"
                        name="effectif"
                        className="w-full border border-navy-100 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-cream"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="<20">Moins de 20 personnes</option>
                        <option value="20-50">20 à 50 personnes</option>
                        <option value="50-200">50 à 200 personnes</option>
                        <option value="200-500">200 à 500 personnes</option>
                        <option value=">500">Plus de 500 personnes</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-navy font-semibold text-sm mb-1.5">
                        Votre besoin *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full border border-navy-100 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-cream resize-none"
                        placeholder="Décrivez votre situation : secteur d'activité, type de postes, problématiques rencontrées, formations souhaitées..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange text-white font-bold py-4 rounded-full hover:bg-orange-dark transition-colors text-base active:scale-95"
                    >
                      Envoyer ma demande de devis
                    </button>
                    <p className="text-navy/40 text-xs text-center mt-3">
                      Réponse sous 48h · Devis personnalisé gratuit · Aucun engagement
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

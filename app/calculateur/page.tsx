"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

function formatEur(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export default function CalculateurPage() {
  const [effectif, setEffectif] = useState(50);
  const [tauxAbsenteisme, setTauxAbsenteisme] = useState(5);
  const [salaireMoyen, setSalaireMoyen] = useState(35000);
  const [calculated, setCalculated] = useState(false);

  const joursAbsence = Math.round(effectif * (tauxAbsenteisme / 100) * 220);
  const coutAbsenteisme = Math.round(joursAbsence * (salaireMoyen / 220) * 1.4);
  const coutIndirect = Math.round(coutAbsenteisme * 1.5);
  const totalEstime = coutAbsenteisme + coutIndirect;
  const potentielEconomie = Math.round(totalEstime * 0.3);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#1E2952] pt-[100px] pb-16" aria-labelledby="calc-title">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Badge variant="yellow" className="mb-4">Calculateur TMS</Badge>
            <h1
              id="calc-title"
              className="font-heading text-white text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight max-w-2xl mb-5"
            >
              Estimez le coût des TMS dans votre entreprise
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Un outil simple pour prendre conscience de l&apos;impact financier réel des
              Troubles Musculo-Squelettiques et du retour sur investissement d&apos;une action
              de prévention.
            </p>
          </div>
        </section>

        <section className="bg-cream py-[clamp(4rem,8vw,7rem)]">
          <div className="max-w-[900px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Inputs */}
              <Card className="p-6 md:p-8">
                <h2 className="font-heading text-navy text-xl font-bold mb-6">
                  Vos données
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="effectif" className="block text-navy font-semibold text-sm mb-1">
                      Effectif total : <span className="text-orange font-bold">{effectif} salariés</span>
                    </label>
                    <input
                      id="effectif"
                      type="range"
                      min={5}
                      max={500}
                      step={5}
                      value={effectif}
                      onChange={(e) => { setEffectif(Number(e.target.value)); setCalculated(false); }}
                      className="w-full accent-orange"
                      aria-valuemin={5}
                      aria-valuemax={500}
                      aria-valuenow={effectif}
                    />
                    <div className="flex justify-between text-navy/40 text-xs mt-1">
                      <span>5</span><span>500</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="absenteisme" className="block text-navy font-semibold text-sm mb-1">
                      Taux d&apos;absentéisme actuel : <span className="text-orange font-bold">{tauxAbsenteisme}%</span>
                    </label>
                    <input
                      id="absenteisme"
                      type="range"
                      min={1}
                      max={15}
                      step={0.5}
                      value={tauxAbsenteisme}
                      onChange={(e) => { setTauxAbsenteisme(Number(e.target.value)); setCalculated(false); }}
                      className="w-full accent-orange"
                    />
                    <div className="flex justify-between text-navy/40 text-xs mt-1">
                      <span>1%</span><span>15%</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="salaire" className="block text-navy font-semibold text-sm mb-1">
                      Salaire brut moyen annuel : <span className="text-orange font-bold">{formatEur(salaireMoyen)}</span>
                    </label>
                    <input
                      id="salaire"
                      type="range"
                      min={20000}
                      max={80000}
                      step={1000}
                      value={salaireMoyen}
                      onChange={(e) => { setSalaireMoyen(Number(e.target.value)); setCalculated(false); }}
                      className="w-full accent-orange"
                    />
                    <div className="flex justify-between text-navy/40 text-xs mt-1">
                      <span>20 000 €</span><span>80 000 €</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setCalculated(true)}
                    className="w-full bg-orange text-white font-bold py-4 rounded-full hover:bg-orange-dark transition-colors text-base active:scale-95"
                  >
                    Calculer mon coût TMS →
                  </button>
                </div>
              </Card>

              {/* Results */}
              <div className="space-y-4">
                {calculated ? (
                  <>
                    <div className="bg-navy rounded-[1.25rem] p-6 text-white text-center">
                      <p className="text-white/60 text-sm mb-1">Coût TMS estimé total / an</p>
                      <span className="font-heading text-4xl font-bold text-yellow">{formatEur(totalEstime)}</span>
                      <p className="text-white/50 text-xs mt-2">Coûts directs + indirects</p>
                    </div>

                    <Card className="p-5 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-navy/60">Jours d&apos;absence estimés / an</span>
                        <span className="text-navy font-bold">{joursAbsence} jours</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-navy/60">Coûts directs (salaires + charges)</span>
                        <span className="text-navy font-bold">{formatEur(coutAbsenteisme)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-navy/60">Coûts indirects (remplacement, productivité)</span>
                        <span className="text-navy font-bold">{formatEur(coutIndirect)}</span>
                      </div>
                    </Card>

                    <div className="bg-gradient-to-r from-teal to-teal-dark rounded-[1.25rem] p-5 text-white text-center">
                      <p className="text-white/80 text-sm mb-1">Économies potentielles avec UP TO MOVE</p>
                      <span className="font-heading text-3xl font-bold">{formatEur(potentielEconomie)}</span>
                      <p className="text-white/60 text-xs mt-1">Estimation basée sur −30% de douleurs déclarées</p>
                    </div>

                    <p className="text-navy/40 text-xs text-center px-2">
                      Estimation indicative basée sur les données INRS. Source : INRS, Assurance Maladie.
                    </p>

                    <Button href="/contact" variant="primary" size="lg" className="w-full">
                      Demander un devis personnalisé →
                    </Button>
                  </>
                ) : (
                  <Card className="p-8 text-center">
                    <div className="text-5xl mb-4">📊</div>
                    <p className="text-navy font-semibold mb-2">Votre estimation apparaîtra ici</p>
                    <p className="text-navy/50 text-sm">
                      Ajustez les curseurs et cliquez sur &quot;Calculer&quot; pour voir
                      l&apos;impact financier réel des TMS dans votre entreprise.
                    </p>
                  </Card>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 bg-white rounded-[1.25rem] p-5 text-navy/50 text-xs leading-relaxed">
              <strong className="text-navy/70">Méthodologie :</strong> Les coûts directs incluent
              les salaires maintenus pendant les arrêts maladie et les charges patronales (coefficient
              1,4). Les coûts indirects (remplacement, perte de productivité, coûts administratifs)
              sont estimés à 1,5 fois les coûts directs, conformément aux données INRS. Le potentiel
              d&apos;économie est calculé sur la base d&apos;une réduction de 30% des TMS observée
              après formation. Ces estimations sont indicatives et ne sauraient constituer un
              engagement contractuel.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

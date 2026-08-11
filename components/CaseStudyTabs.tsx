"use client";

import { useState, type ReactNode } from "react";

interface CaseStudyTabsProps {
  objectif: ReactNode;
  resultats: ReactNode;
}

export function CaseStudyTabs({ objectif, resultats }: CaseStudyTabsProps) {
  const [active, setActive] = useState<"objectif" | "resultats">("objectif");

  const tabClass = (tab: "objectif" | "resultats") =>
    `font-heading font-bold text-sm pb-3.5 border-b-[3px] transition-colors ${
      active === tab
        ? "text-navy border-yellow"
        : "text-navy/40 border-transparent hover:text-navy/60"
    }`;

  return (
    <div>
      <div className="flex justify-center gap-10 border-b border-navy-100 mb-6">
        <button type="button" className={tabClass("objectif")} onClick={() => setActive("objectif")}>
          Objectif
        </button>
        <button type="button" className={tabClass("resultats")} onClick={() => setActive("resultats")}>
          Résultats
        </button>
      </div>
      <div className="text-left text-[14.5px] leading-relaxed text-gray-700 [&_strong]:text-navy [&_ul]:pl-5 [&_ul]:mb-3.5 [&_li]:mb-2 [&_p]:mb-3.5">
        {active === "objectif" ? objectif : resultats}
      </div>
    </div>
  );
}

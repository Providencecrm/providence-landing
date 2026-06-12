"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const comparisons = [
  { classic: "Interface identique pour tous", providence: "Interface adaptée à votre profil" },
  { classic: "Mêmes données dans le même ordre", providence: "Informations pertinentes mises en avant" },
  { classic: "Courbe d'apprentissage longue", providence: "Prise en main naturelle en 24h" },
  { classic: "Adoption forcée par le management", providence: "Adoption organique par l'équipe" },
  { classic: "Données incomplètes et obsolètes", providence: "Saisie guidée, intuitive et maintenue" },
];

type Profile = {
  id: string;
  name: string;
  user: string;
  initials: string;
  role: string;
  view: string;
  mainMetric: string;
  mainMetricLabel: string;
  progressLabel: string;
  progressPct: number;
  chartTitle: string;
  chartSub: string;
  bars: number[];
  cardTitle: string;
  cardValue: string;
  cardDelta: string;
  cardDetailLabel: string;
  cardRows: { label: string; value: string }[];
  navActive: string;
  navItems: string[];
};

const profiles: Profile[] = [
  {
    id: "analytique",
    name: "Analytique",
    user: "Marie Dupont",
    initials: "MD",
    role: "Commerciale",
    view: "Analytique",
    mainMetric: "42.8%",
    mainMetricLabel: "Taux de transformation Fév. 2026",
    progressLabel: "Curseur d'objectifs stratégiques",
    progressPct: 84,
    chartTitle: "Taux de closing hebdomadaire",
    chartSub: "Performance par cycle de 24h",
    bars: [55, 72, 61, 80, 88, 42, 35],
    cardTitle: "Commissions Providence",
    cardValue: "37 350 €",
    cardDelta: "↗ +24.8% vs mois dernier",
    cardDetailLabel: "Commissions",
    cardRows: [
      { label: "Actuels", value: "24 900 €" },
      { label: "Encours (hot)", value: "12 450 €" },
    ],
    navActive: "Analytique",
    navItems: ["Dashboard", "Tâches", "Clients", "Analytique", "Analyse concurrentielle"],
  },
  {
    id: "expressif",
    name: "Expressif",
    user: "Sophie Martin",
    initials: "SM",
    role: "Commerciale",
    view: "Clients",
    mainMetric: "8.4 / 10",
    mainMetricLabel: "Score engagement moyen Fév. 2026",
    progressLabel: "Qualité de la relation client",
    progressPct: 71,
    chartTitle: "Interactions par contact",
    chartSub: "Fréquence hebdomadaire",
    bars: [40, 65, 50, 75, 60, 80, 55],
    cardTitle: "Contacts prioritaires",
    cardValue: "47",
    cardDelta: "↗ +3 contacts actifs ce mois",
    cardDetailLabel: "Contacts",
    cardRows: [
      { label: "À relancer", value: "12" },
      { label: "En négociation", value: "8" },
    ],
    navActive: "Clients",
    navItems: ["Dashboard", "Tâches", "Clients", "Engagement", "Historique"],
  },
  {
    id: "conducteur",
    name: "Conducteur",
    user: "Marc Fontaine",
    initials: "MF",
    role: "Commercial",
    view: "Dashboard",
    mainMetric: "73%",
    mainMetricLabel: "Objectif du mois // J-8",
    progressLabel: "Progression objectif mensuel",
    progressPct: 73,
    chartTitle: "Deals par priorité",
    chartSub: "Pipeline semaine en cours",
    bars: [90, 65, 45, 30, 80, 55, 20],
    cardTitle: "Deals prioritaires",
    cardValue: "3",
    cardDelta: "↗ À closer cette semaine",
    cardDetailLabel: "Deals",
    cardRows: [
      { label: "Contrat Nexus SA", value: "28 000 €" },
      { label: "Devis Pulse Corp", value: "14 500 €" },
    ],
    navActive: "Dashboard",
    navItems: ["Dashboard", "Tâches", "Priorités", "Pipeline", "Objectifs"],
  },
];

function AppMockup({ profile }: { profile: Profile }) {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <div className="border border-border bg-surface-elevated overflow-hidden select-none shadow-md">
      {/* ── Top bar ── */}
      <div className="border-b border-border px-3 py-1.5 flex items-center justify-between bg-surface-elevated">
        <div className="flex items-center gap-2">
          <div className="relative h-4 w-4 flex items-center justify-center flex-shrink-0">
            <div className="absolute inset-0 bg-brand rotate-45 scale-90" />
            <span className="relative z-10 text-white font-bold" style={{ fontSize: "5px" }}>P</span>
          </div>
          <span className="type-label text-text-primary" style={{ fontSize: "0.45rem", letterSpacing: "0.18em" }}>
            Providence
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="type-label text-text-tertiary" style={{ fontSize: "0.42rem" }}>
            {profile.user.split(" ")[0][0]}. {profile.user.split(" ")[1]}
          </span>
          <span className="type-label text-text-tertiary" style={{ fontSize: "0.38rem" }}>
            {profile.role}
          </span>
          <div className="h-4 w-4 border border-border flex items-center justify-center bg-brand">
            <span className="text-white font-bold" style={{ fontSize: "5px" }}>{profile.initials}</span>
          </div>
        </div>
      </div>

      {/* ── Nav tabs ── */}
      <div className="border-b border-border px-3 flex items-center gap-3 bg-surface-elevated overflow-hidden">
        {profile.navItems.map((tab) => (
          <div
            key={tab}
            className={cn(
              "py-1.5 flex-shrink-0",
              tab === profile.navActive
                ? "border-b-2 border-brand"
                : "border-b-2 border-transparent"
            )}
          >
            <span
              className={cn(
                "type-label",
                tab === profile.navActive ? "text-brand" : "text-text-tertiary"
              )}
              style={{ fontSize: "0.42rem" }}
            >
              {tab.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="p-3">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="type-label text-text-tertiary mb-0.5" style={{ fontSize: "0.4rem" }}>
              Tableau de bord // {profile.user}
            </p>
            <h3 className="type-heading text-text-primary font-bold" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
              {profile.view.toUpperCase()}
            </h3>
          </div>
          <div className="text-right flex items-start gap-2">
            <div>
              <p className="type-label text-text-tertiary" style={{ fontSize: "0.38rem" }}>
                {profile.mainMetricLabel.toUpperCase()}
              </p>
              <p className="font-bold text-text-primary" style={{ fontSize: "1.1rem", letterSpacing: "0.02em" }}>
                {profile.mainMetric}
              </p>
            </div>
            <div className="bg-brand px-2 py-1 mt-0.5">
              <span className="type-btn text-white" style={{ fontSize: "0.38rem" }}>Détail</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="border border-border p-2 mb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="type-label text-text-primary" style={{ fontSize: "0.42rem" }}>
              {profile.progressLabel.toUpperCase()}
            </span>
            <span className="type-label text-brand" style={{ fontSize: "0.42rem" }}>
              Complétion : {profile.progressPct}%
            </span>
          </div>
          <div className="h-2 w-full bg-border-subtle">
            <div
              className="h-2 bg-brand transition-all duration-500"
              style={{ width: `${profile.progressPct}%` }}
            />
          </div>
          <div className="flex justify-between mt-0.5">
            <span className="type-label text-text-tertiary" style={{ fontSize: "0.35rem" }}>0% initial</span>
            <span className="type-label text-text-tertiary" style={{ fontSize: "0.35rem" }}>100% target</span>
          </div>
        </div>

        {/* Bottom row: chart + bordeaux card */}
        <div className="grid grid-cols-2 gap-2">
          {/* Chart */}
          <div className="border border-border p-2">
            <p className="type-label text-text-primary mb-0.5" style={{ fontSize: "0.42rem" }}>
              {profile.chartTitle.toUpperCase()}
            </p>
            <p className="type-label text-text-tertiary mb-2" style={{ fontSize: "0.38rem" }}>
              {profile.chartSub.toUpperCase()}
            </p>
            <div className="flex items-end gap-0.5 h-10">
              {profile.bars.map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
                  <div
                    className="w-full"
                    style={{
                      height: `${h * 0.4}px`,
                      backgroundColor: h > 70 ? "#7B1C2E" : h > 50 ? "#9E2A40" : "#C4556A",
                    }}
                  />
                  <span className="type-label text-text-tertiary" style={{ fontSize: "0.32rem" }}>
                    {days[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bordeaux featured card */}
          <div className="bg-brand p-2 flex flex-col">
            <p className="type-label text-white/50 mb-1" style={{ fontSize: "0.42rem" }}>
              {profile.cardTitle.toUpperCase()}
            </p>
            <p className="font-bold text-white mb-0.5" style={{ fontSize: "1.1rem", letterSpacing: "0.02em" }}>
              {profile.cardValue}
            </p>
            <p className="type-label text-white/70 mb-2" style={{ fontSize: "0.38rem" }}>
              {profile.cardDelta}
            </p>

            <div className="grid grid-cols-2 gap-1 mb-auto">
              {profile.cardRows.map((row) => (
                <div key={row.label}>
                  <p className="type-label text-white/40" style={{ fontSize: "0.35rem" }}>{row.label.toUpperCase()}</p>
                  <p className="font-semibold text-white" style={{ fontSize: "0.65rem" }}>{row.value}</p>
                </div>
              ))}
            </div>

            <div className="border border-white/20 text-center py-1 mt-2">
              <span className="type-label text-white/70" style={{ fontSize: "0.38rem" }}>
                Détail des {profile.cardDetailLabel.toLowerCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Solution() {
  const [active, setActive] = useState(profiles[0]);

  return (
    <section id="solution" className="py-32 bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-20">
          <p className="type-label text-text-tertiary mb-5">La solution // Providence</p>
          <h2 className="type-heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary mb-6">
            Un CRM qui vous <span className="text-brand">reconnaît.</span>
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Providence détecte le profil de chaque commercial et reconfigure
            son interface — pour que chacun travaille avec un outil fait pour lui.
          </p>
        </div>

        {/* Comparison */}
        <div className="mb-20 border border-border">
          <div className="grid grid-cols-2">
            <div className="px-6 py-3 bg-surface border-b border-r border-border">
              <p className="type-label text-[0.58rem] text-text-tertiary">CRM classique</p>
            </div>
            <div className="px-6 py-3 bg-brand border-b border-border">
              <p className="type-label text-[0.58rem] text-white">Providence</p>
            </div>
            {comparisons.map((row, i) => (
              <>
                <div key={`c-${i}`} className={cn("px-6 py-4 bg-surface-elevated flex items-center gap-3 border-r border-border", i < comparisons.length - 1 && "border-b")}>
                  <span className="text-red-400 text-xs flex-shrink-0">✕</span>
                  <span className="text-xs text-text-tertiary">{row.classic}</span>
                </div>
                <div key={`p-${i}`} className={cn("px-6 py-4 bg-surface-elevated flex items-center gap-3", i < comparisons.length - 1 && "border-b border-border")}>
                  <span className="text-brand text-xs flex-shrink-0">✓</span>
                  <span className="text-xs font-medium text-text-primary">{row.providence}</span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Interactive profile demo */}
        <div>
          <p className="type-label text-[0.58rem] text-text-tertiary mb-5">
            Interface adaptée // Sélectionner un profil
          </p>

          {/* Profile tabs */}
          <div className="flex gap-px bg-border mb-10 w-fit">
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className={cn(
                  "type-label text-[0.58rem] px-6 py-3",
                  active.id === p.id
                    ? "bg-brand text-white"
                    : "bg-surface-elevated text-text-tertiary hover:text-text-primary hover:bg-surface"
                )}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="type-label text-[0.6rem] text-brand mb-3">
                  Profil {active.name} // Interface dédiée
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {active.id === "analytique" && "Un dashboard orienté chiffres : pipeline détaillé par étape, taux de conversion, prévisions IA. Chaque décision s'appuie sur une donnée précise."}
                  {active.id === "expressif" && "Un dashboard centré sur les relations : interactions récentes, engagement client, contacts à relancer. La vente humaine au premier plan."}
                  {active.id === "conducteur" && "Un dashboard condensé : 3 deals prioritaires, actions du jour, objectif mensuel en un coup d'œil. Zéro friction, décisions immédiates."}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Profil détecté par questionnaire en 5 minutes",
                  "Interface reconfigurée sans action manuelle",
                  "Suggestions d'actions alignées avec votre style",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs text-text-secondary">
                    <div className="h-1.5 w-1.5 bg-brand flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-px bg-border mt-2">
                <div className="bg-surface-elevated p-4">
                  <p className="type-label text-[0.55rem] text-text-tertiary mb-1">Profil</p>
                  <p className="text-lg font-bold text-text-primary">{active.name}</p>
                  <p className="type-label text-[0.55rem] text-brand mt-0.5">{active.user}</p>
                </div>
                <div className="bg-surface-elevated p-4">
                  <p className="type-label text-[0.55rem] text-text-tertiary mb-1">Objectif mois</p>
                  <p className="text-lg font-bold text-text-primary">{active.progressPct}%</p>
                  <div className="mt-1.5 h-1 bg-border-subtle">
                    <div className="h-1 bg-brand transition-all duration-500" style={{ width: `${active.progressPct}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* App mockup */}
            <AppMockup profile={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

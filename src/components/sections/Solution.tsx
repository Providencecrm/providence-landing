"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const comparisons = [
  {
    classic: "Interface identique pour tous",
    providence: "Interface adaptée à votre profil",
  },
  {
    classic: "Mêmes données dans le même ordre",
    providence: "Informations pertinentes mises en avant",
  },
  {
    classic: "Courbe d'apprentissage longue",
    providence: "Prise en main naturelle en 24h",
  },
  {
    classic: "Adoption forcée par le management",
    providence: "Adoption organique par l'équipe",
  },
  {
    classic: "Données incomplètes et obsolètes",
    providence: "Saisie guidée, intuitive et maintenue",
  },
];

const profiles = [
  {
    id: "analytique",
    name: "Analytique",
    icon: "◈",
    color: "text-cyan-400",
    activeBg: "bg-cyan-500/10",
    activeBorder: "border-cyan-500/40",
    activeText: "text-cyan-300",
    tagline: "Vue données & performance",
    description:
      "Un dashboard orienté chiffres : pipeline détaillé par étape, taux de conversion par segment, prévisions IA. Chaque décision s'appuie sur une donnée.",
    widgets: [
      {
        type: "metric",
        label: "Pipeline actif",
        value: "€ 248 400",
        delta: "+12%",
        positive: true,
      },
      {
        type: "metric",
        label: "Taux de conversion",
        value: "34,2%",
        delta: "+4,1 pts",
        positive: true,
      },
      {
        type: "list",
        label: "Pipeline par étape",
        items: [
          { name: "Qualification", count: 12, pct: 80 },
          { name: "Proposition", count: 7, pct: 55 },
          { name: "Négociation", count: 3, pct: 30 },
        ],
      },
    ],
  },
  {
    id: "expressif",
    name: "Expressif",
    icon: "◎",
    color: "text-violet-400",
    activeBg: "bg-violet-500/10",
    activeBorder: "border-violet-500/40",
    activeText: "text-violet-300",
    tagline: "Vue relations & engagement",
    description:
      "Un dashboard centré sur les relations : dernières interactions, niveaux d'engagement client, anniversaires et événements clés. La vente humaine au premier plan.",
    widgets: [
      {
        type: "metric",
        label: "Contacts actifs",
        value: "47",
        delta: "+3 ce mois",
        positive: true,
      },
      {
        type: "metric",
        label: "Score engagement moyen",
        value: "8,4 / 10",
        delta: "+0,6",
        positive: true,
      },
      {
        type: "list",
        label: "À relancer aujourd'hui",
        items: [
          { name: "Sophie Martin — Acme Corp", count: 0, pct: 90 },
          { name: "Thomas Leroy — Beta SAS", count: 0, pct: 70 },
          { name: "Nadia Benali — Gamma Ltd", count: 0, pct: 50 },
        ],
      },
    ],
  },
  {
    id: "conducteur",
    name: "Conducteur",
    icon: "◆",
    color: "text-amber-400",
    activeBg: "bg-amber-500/10",
    activeBorder: "border-amber-500/40",
    activeText: "text-amber-300",
    tagline: "Vue priorités & actions rapides",
    description:
      "Un dashboard condensé : 3 deals prioritaires, actions du jour, objectif mensuel en un coup d'œil. Zéro friction, décisions immédiates.",
    widgets: [
      {
        type: "metric",
        label: "Objectif du mois",
        value: "73%",
        delta: "J-8",
        positive: true,
      },
      {
        type: "metric",
        label: "Deals à closer",
        value: "3",
        delta: "cette semaine",
        positive: false,
      },
      {
        type: "list",
        label: "Actions prioritaires",
        items: [
          { name: "Envoyer contrat — Nexus SA", count: 0, pct: 95 },
          { name: "Appel de suivi — Orbit Inc.", count: 0, pct: 75 },
          { name: "Relance devis — Pulse Corp", count: 0, pct: 60 },
        ],
      },
    ],
  },
];

export default function Solution() {
  const [activeProfile, setActiveProfile] = useState(profiles[0]);

  return (
    <section id="solution" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium mb-4">
            La solution
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary mb-6">
            Un CRM qui vous{" "}
            <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
              reconnaît.
            </span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Providence détecte le profil psychologique de chaque commercial et
            reconfigure son interface en temps réel — pour que chacun travaille
            avec un outil qui lui correspond naturellement.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-20 rounded-2xl border border-border overflow-hidden">
          <div className="grid grid-cols-2">
            {/* Headers */}
            <div className="px-6 py-4 bg-surface border-b border-r border-border">
              <p className="text-sm font-medium text-text-tertiary">CRM classique</p>
            </div>
            <div className="px-6 py-4 bg-brand/10 border-b border-border">
              <p className="text-sm font-semibold text-brand-light">Providence</p>
            </div>

            {/* Rows */}
            {comparisons.map((row, i) => (
              <>
                <div
                  key={`classic-${i}`}
                  className={cn(
                    "px-6 py-4 border-r border-border flex items-center gap-3",
                    i < comparisons.length - 1 && "border-b",
                    "bg-surface"
                  )}
                >
                  <span className="flex-shrink-0 text-red-400/70 text-base">✕</span>
                  <span className="text-sm text-text-tertiary">{row.classic}</span>
                </div>
                <div
                  key={`prov-${i}`}
                  className={cn(
                    "px-6 py-4 flex items-center gap-3",
                    i < comparisons.length - 1 && "border-b border-border",
                    "bg-brand/5"
                  )}
                >
                  <span className="flex-shrink-0 text-brand-light text-base">✓</span>
                  <span className="text-sm text-text-primary font-medium">
                    {row.providence}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Interactive profile demo */}
        <div>
          <p className="text-sm font-medium text-text-tertiary mb-6">
            Voir l&apos;interface adaptée par profil
          </p>

          {/* Profile tabs */}
          <div className="flex gap-2 mb-8">
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProfile(p)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all border",
                  activeProfile.id === p.id
                    ? cn(p.activeBg, p.activeBorder, p.activeText)
                    : "border-border bg-surface text-text-tertiary hover:text-text-secondary hover:border-border"
                )}
              >
                <span className={cn("text-xs", activeProfile.id === p.id ? p.color : "text-text-tertiary")}>
                  {p.icon}
                </span>
                {p.name}
              </button>
            ))}
          </div>

          {/* Demo panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Description */}
            <div className="flex flex-col gap-4">
              <div
                className={cn(
                  "inline-flex items-center gap-2 w-fit rounded-full px-3 py-1 text-xs font-medium",
                  activeProfile.activeBg,
                  activeProfile.activeText
                )}
              >
                <span className={activeProfile.color}>{activeProfile.icon}</span>
                {activeProfile.tagline}
              </div>
              <p className="text-base text-text-secondary leading-relaxed">
                {activeProfile.description}
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {["Détection automatique du profil en 72h", "Reconfiguration de l'interface sans action manuelle", "Suggestions d'actions alignées avec votre style"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className={cn("mt-0.5 text-xs flex-shrink-0", activeProfile.color)}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboard mockup */}
            <div className="rounded-xl border border-border bg-surface p-5 flex flex-col gap-4">
              {/* Mockup header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={cn("text-sm", activeProfile.color)}>
                    {activeProfile.icon}
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    Dashboard — {activeProfile.name}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-surface-elevated" />
                  <div className="h-2.5 w-2.5 rounded-full bg-surface-elevated" />
                  <div className="h-2.5 w-2.5 rounded-full bg-surface-elevated" />
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 gap-3">
                {activeProfile.widgets
                  .filter((w) => w.type === "metric")
                  .map((w) => (
                    <div
                      key={w.label}
                      className="rounded-lg border border-border-subtle bg-surface-elevated p-3.5"
                    >
                      <p className="text-xs text-text-tertiary mb-1">{w.label}</p>
                      <p className="text-lg font-bold text-text-primary">{w.value}</p>
                      <p
                        className={cn(
                          "text-xs mt-0.5",
                          w.positive ? activeProfile.color : "text-text-tertiary"
                        )}
                      >
                        {w.delta}
                      </p>
                    </div>
                  ))}
              </div>

              {/* List widget */}
              {activeProfile.widgets
                .filter((w) => w.type === "list")
                .map((w) => (
                  <div
                    key={w.label}
                    className="rounded-lg border border-border-subtle bg-surface-elevated p-3.5 flex flex-col gap-3"
                  >
                    <p className="text-xs text-text-tertiary font-medium">{w.label}</p>
                    {w.items?.map((item) => (
                      <div key={item.name} className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-text-secondary truncate pr-2">
                            {item.name}
                          </span>
                          {item.count > 0 && (
                            <span className="text-xs text-text-tertiary flex-shrink-0">
                              {item.count}
                            </span>
                          )}
                        </div>
                        <div className="h-1 w-full rounded-full bg-surface">
                          <div
                            className={cn("h-1 rounded-full transition-all", activeProfile.activeBg.replace("/10", "/40"))}
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

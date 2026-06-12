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

/* ── Types ─────────────────────────────────── */

type Contact = { initials: string; name: string; company: string; score: number; status: "active" | "relay" | "risk" };
type Priority = { rank: number; name: string; value: string; urgency: "urgent" | "today" | "tomorrow" };
type Bar = number;

interface Profile {
  id: string;
  name: string;
  user: string;
  initials: string;
  role: string;
  viewTitle: string;
  mainMetric: string;
  mainMetricLabel: string;
  progressLabel: string;
  progressPct: number;
  chartTitle: string;
  chartSub: string;
  navItems: string[];
  navActive: string;
  chartType: "bars" | "contacts" | "priorities";
  bars?: Bar[];
  contacts?: Contact[];
  priorities?: Priority[];
  cardTitle: string;
  cardValue: string;
  cardDelta: string;
  cardRows: { label: string; value: string }[];
  cardCta: string;
  description: string;
  bullets: string[];
}

const profiles: Profile[] = [
  /* ── Analytique ── */
  {
    id: "analytique",
    name: "Analytique",
    user: "Marie Dupont",
    initials: "MD",
    role: "Commerciale",
    viewTitle: "Analytique",
    mainMetric: "42.8%",
    mainMetricLabel: "Taux de transformation Fév. 2026",
    progressLabel: "Curseur d'objectifs stratégiques",
    progressPct: 84,
    chartTitle: "Taux de closing hebdomadaire",
    chartSub: "Performance par cycle de 24h",
    navItems: ["Dashboard", "Tâches", "Clients", "Analytique", "Prévisions"],
    navActive: "Analytique",
    chartType: "bars",
    bars: [55, 72, 61, 80, 88, 42, 35],
    cardTitle: "Commissions Providence",
    cardValue: "37 350 €",
    cardDelta: "↗ +24.8% vs mois dernier",
    cardRows: [{ label: "Actuels", value: "24 900 €" }, { label: "Encours (hot)", value: "12 450 €" }],
    cardCta: "Détail des commissions",
    description: "Vision chiffrée et exhaustive. Pipeline étape par étape, taux de conversion par segment, prévisions de revenus. L'Analytique prend ses décisions sur des données, pas des intuitions.",
    bullets: ["Pipeline structuré par étape avec valeurs exactes", "Courbes de conversion et forecasting IA", "Tableaux de commission en temps réel"],
  },
  /* ── Expressif ── */
  {
    id: "expressif",
    name: "Expressif",
    user: "Sophie Martin",
    initials: "SM",
    role: "Commerciale",
    viewTitle: "Clients",
    mainMetric: "8.4 / 10",
    mainMetricLabel: "Score engagement moyen Fév. 2026",
    progressLabel: "Qualité de la relation client",
    progressPct: 71,
    chartTitle: "Contacts à relancer",
    chartSub: "Niveau d'engagement client",
    navItems: ["Dashboard", "Clients", "Engagement", "Historique", "Tâches"],
    navActive: "Clients",
    chartType: "contacts",
    contacts: [
      { initials: "AC", name: "Ambre Collin", company: "Nexus SA", score: 5, status: "active" },
      { initials: "TL", name: "Thomas Leroy", company: "Beta SAS", score: 4, status: "relay" },
      { initials: "NB", name: "Nadia Benali", company: "Gamma Ltd", score: 2, status: "risk" },
      { initials: "PD", name: "Pierre Durand", company: "Orbit Inc.", score: 3, status: "relay" },
    ],
    cardTitle: "Engagement client",
    cardValue: "47",
    cardDelta: "↗ +3 contacts actifs ce mois",
    cardRows: [{ label: "À relancer", value: "12" }, { label: "En négociation", value: "8" }],
    cardCta: "Voir tous les contacts",
    description: "Vue centrée sur les relations. Historique des interactions, score d'engagement par contact, rappels de suivi. L'Expressif construit la confiance avant de conclure.",
    bullets: ["Score d'engagement et historique relation", "Alertes intelligentes : qui relancer, quand", "Timeline des interactions par contact"],
  },
  /* ── Conducteur ── */
  {
    id: "conducteur",
    name: "Conducteur",
    user: "Marc Fontaine",
    initials: "MF",
    role: "Commercial",
    viewTitle: "Dashboard",
    mainMetric: "73%",
    mainMetricLabel: "Objectif du mois // J-8",
    progressLabel: "Progression objectif mensuel",
    progressPct: 73,
    chartTitle: "Priorités semaine",
    chartSub: "Actions à fort impact",
    navItems: ["Dashboard", "Priorités", "Pipeline", "Tâches", "Objectifs"],
    navActive: "Dashboard",
    chartType: "priorities",
    priorities: [
      { rank: 1, name: "Contrat Nexus SA", value: "28 000 €", urgency: "urgent" },
      { rank: 2, name: "Appel Orbit Inc.", value: "12 000 €", urgency: "today" },
      { rank: 3, name: "Relance Pulse Corp", value: "8 500 €", urgency: "tomorrow" },
    ],
    cardTitle: "Deals prioritaires",
    cardValue: "3",
    cardDelta: "↗ À closer cette semaine",
    cardRows: [{ label: "Valeur totale", value: "48 500 €" }, { label: "Probabilité moy.", value: "74%" }],
    cardCta: "Voir tous les deals",
    description: "Vue condensée, décisions immédiates. Trois deals à closer, actions du jour, objectif mensuel d'un coup d'œil. Le Conducteur n'a pas de temps à perdre.",
    bullets: ["Top 3 deals à closer cette semaine", "Actions quotidiennes priorisées automatiquement", "Objectif mensuel et jours restants"],
  },
];

/* ── Sous-composants ──────────────────────── */

function EngagementDots({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={cn("h-1.5 w-1.5 rounded-full", i <= score ? "bg-brand" : "bg-border")}
        />
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: Contact["status"] }) {
  const map = {
    active: { label: "Actif", color: "text-[#2E7D32]" },
    relay: { label: "→ Relancer", color: "text-brand" },
    risk: { label: "! Attention", color: "text-[#B45309]" },
  };
  const s = map[status];
  return <span className={cn("type-label flex-shrink-0", s.color)} style={{ fontSize: "0.37rem" }}>{s.label}</span>;
}

function UrgencyBadge({ urgency }: { urgency: Priority["urgency"] }) {
  const map = {
    urgent: { label: "Urgent", bg: "bg-brand text-white" },
    today: { label: "Aujourd'hui", bg: "bg-[#1A1618] text-white" },
    tomorrow: { label: "Demain", bg: "bg-border text-text-secondary" },
  };
  const u = map[urgency];
  return (
    <span className={cn("type-label px-1.5 py-0.5", u.bg)} style={{ fontSize: "0.36rem" }}>
      {u.label}
    </span>
  );
}

function AppMockup({ profile }: { profile: Profile }) {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <div className="border border-border bg-surface-elevated overflow-hidden"
      style={{ boxShadow: "0 24px 64px rgba(26,22,24,0.10), 0 4px 16px rgba(26,22,24,0.06)" }}>

      {/* ── Top bar ── */}
      <div className="border-b border-border px-3 py-2 flex items-center justify-between bg-surface-elevated">
        <div className="flex items-center gap-2">
          <div className="relative h-4 w-4 flex-shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-brand rotate-45 scale-90" />
            <span className="relative z-10 text-white font-bold" style={{ fontSize: "5.5px" }}>P</span>
          </div>
          <span className="font-bold text-text-primary uppercase" style={{ fontSize: "0.5rem", letterSpacing: "0.2em" }}>
            Providence
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <span className="type-label text-text-tertiary block" style={{ fontSize: "0.4rem" }}>
              {profile.user.split(" ")[0][0]}. {profile.user.split(" ")[1]}
            </span>
            <span className="type-label text-text-tertiary block" style={{ fontSize: "0.36rem" }}>
              {profile.role.toUpperCase()}
            </span>
          </div>
          <div className="h-5 w-5 bg-brand flex items-center justify-center">
            <span className="text-white font-bold" style={{ fontSize: "5.5px" }}>{profile.initials}</span>
          </div>
        </div>
      </div>

      {/* ── Nav tabs ── */}
      <div className="border-b border-border px-3 flex items-center gap-3 bg-surface-elevated overflow-hidden">
        {profile.navItems.map((tab) => (
          <div
            key={tab}
            className={cn(
              "py-1.5 flex-shrink-0 border-b-2",
              tab === profile.navActive ? "border-brand" : "border-transparent"
            )}
          >
            <span
              className={cn("type-label", tab === profile.navActive ? "text-brand" : "text-text-tertiary")}
              style={{ fontSize: "0.4rem" }}
            >
              {tab.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="p-3 bg-surface-elevated">
        {/* Header */}
        <div className="flex items-start justify-between mb-2.5">
          <div>
            <p className="type-label text-text-tertiary mb-0.5" style={{ fontSize: "0.38rem" }}>
              Tableau de bord // {profile.user.toUpperCase()}
            </p>
            <h3 className="type-heading font-black text-text-primary leading-none"
              style={{ fontSize: "1.25rem", letterSpacing: "0.06em" }}>
              {profile.viewTitle.toUpperCase()}
            </h3>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-right">
              <p className="type-label text-text-tertiary" style={{ fontSize: "0.36rem" }}>
                {profile.mainMetricLabel.toUpperCase()}
              </p>
              <p className="font-bold text-text-primary" style={{ fontSize: "1.1rem", letterSpacing: "0.01em" }}>
                {profile.mainMetric}
              </p>
            </div>
            <div className="bg-brand px-2 py-1">
              <span className="type-btn text-white" style={{ fontSize: "0.36rem" }}>Détail</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="border border-border p-2 mb-2 bg-surface">
          <div className="flex items-center justify-between mb-1">
            <span className="type-label text-text-primary" style={{ fontSize: "0.4rem" }}>
              {profile.progressLabel.toUpperCase()}
            </span>
            <div className="flex items-center gap-2">
              <span className="type-label text-brand" style={{ fontSize: "0.38rem" }}>
                ■ Complétion : {profile.progressPct}%
              </span>
            </div>
          </div>
          <div className="h-2 w-full bg-border-subtle">
            <div className="h-2 bg-brand transition-all duration-700" style={{ width: `${profile.progressPct}%` }} />
          </div>
          <div className="flex justify-between mt-0.5">
            <span className="type-label text-text-tertiary" style={{ fontSize: "0.32rem" }}>0% initial</span>
            <span className="type-label text-text-tertiary" style={{ fontSize: "0.32rem" }}>100% target</span>
          </div>
        </div>

        {/* Bottom row: widget + card */}
        <div className="grid grid-cols-5 gap-2">
          {/* Left widget — 3 cols */}
          <div className="col-span-3 border border-border bg-surface-elevated p-2">
            <p className="type-label text-text-primary mb-0.5" style={{ fontSize: "0.4rem" }}>
              {profile.chartTitle.toUpperCase()}
            </p>
            <p className="type-label text-text-tertiary mb-2" style={{ fontSize: "0.36rem" }}>
              {profile.chartSub.toUpperCase()}
            </p>

            {/* BAR CHART — Analytique */}
            {profile.chartType === "bars" && (
              <div className="flex items-end gap-0.5 h-12">
                {profile.bars!.map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
                    <div
                      className="w-full"
                      style={{
                        height: `${h * 0.44}px`,
                        backgroundColor: h > 75 ? "#7B1C2E" : h > 55 ? "#9E2A40" : "#C4556A",
                      }}
                    />
                    <span className="type-label text-text-tertiary" style={{ fontSize: "0.3rem" }}>{days[i]}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CONTACT LIST — Expressif */}
            {profile.chartType === "contacts" && (
              <div className="flex flex-col gap-1.5">
                {profile.contacts!.map((c) => (
                  <div key={c.name} className="flex items-center gap-1.5 border-b border-border-subtle pb-1.5 last:border-0 last:pb-0">
                    <div className="h-4 w-4 bg-brand flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold" style={{ fontSize: "4.5px" }}>{c.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="type-label text-text-primary truncate" style={{ fontSize: "0.38rem" }}>
                        {c.name}
                      </p>
                      <p className="type-label text-text-tertiary truncate" style={{ fontSize: "0.34rem" }}>
                        {c.company}
                      </p>
                    </div>
                    <EngagementDots score={c.score} />
                    <StatusBadge status={c.status} />
                  </div>
                ))}
              </div>
            )}

            {/* PRIORITY LIST — Conducteur */}
            {profile.chartType === "priorities" && (
              <div className="flex flex-col gap-1.5">
                {profile.priorities!.map((p) => (
                  <div key={p.rank} className="flex items-center gap-1.5 border-b border-border-subtle pb-1.5 last:border-0 last:pb-0">
                    <span
                      className="type-heading text-text-tertiary flex-shrink-0 w-3 text-center"
                      style={{ fontSize: "0.55rem" }}
                    >
                      {p.rank}
                    </span>
                    <div className="h-1.5 w-1.5 bg-brand flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="type-label text-text-primary truncate" style={{ fontSize: "0.38rem" }}>
                        {p.name.toUpperCase()}
                      </p>
                      <p className="font-semibold text-text-primary" style={{ fontSize: "0.5rem" }}>{p.value}</p>
                    </div>
                    <UrgencyBadge urgency={p.urgency} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right card bordeaux — 2 cols */}
          <div className="col-span-2 bg-brand p-2 flex flex-col">
            <p className="type-label text-white/50 mb-1" style={{ fontSize: "0.38rem" }}>
              {profile.cardTitle.toUpperCase()}
            </p>
            <p className="font-bold text-white leading-none mb-0.5"
              style={{ fontSize: profile.cardValue.length > 4 ? "0.95rem" : "1.2rem", letterSpacing: "0.01em" }}>
              {profile.cardValue}
            </p>
            <p className="type-label text-white/60 mb-2" style={{ fontSize: "0.35rem" }}>
              {profile.cardDelta}
            </p>
            <div className="flex flex-col gap-1 mb-auto">
              {profile.cardRows.map((row) => (
                <div key={row.label}>
                  <p className="type-label text-white/40" style={{ fontSize: "0.33rem" }}>
                    {row.label.toUpperCase()}
                  </p>
                  <p className="font-semibold text-white" style={{ fontSize: "0.55rem" }}>{row.value}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/20 text-center py-1 mt-2">
              <span className="type-label text-white/70" style={{ fontSize: "0.35rem" }}>
                {profile.cardCta.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Status bar ── */}
      <div className="border-t border-border bg-[#1A1618] px-3 py-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 bg-brand" />
            <span className="type-label text-white/50" style={{ fontSize: "0.33rem" }}>ASSISTANT</span>
          </div>
          <span className="type-label text-white/25" style={{ fontSize: "0.33rem" }}>VERSION 1.2</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="type-label text-white/40" style={{ fontSize: "0.33rem" }}>
            OBJECTIF DU MOIS
          </span>
          <div className="flex items-center gap-0.5">
            <div className="h-1 w-10 bg-white/10">
              <div className="h-1 bg-brand" style={{ width: `${profile.progressPct}%` }} />
            </div>
            <span className="type-label text-brand" style={{ fontSize: "0.33rem" }}>{profile.progressPct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section principale ─────────────────── */

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

        {/* Profile demo */}
        <div>
          <p className="type-label text-[0.58rem] text-text-tertiary mb-5">
            Interface adaptée // Sélectionner un profil
          </p>

          {/* Tabs */}
          <div className="flex gap-px bg-border mb-12 w-fit">
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className={cn(
                  "type-label text-[0.62rem] px-7 py-3",
                  active.id === p.id
                    ? "bg-brand text-white"
                    : "bg-surface-elevated text-text-tertiary hover:text-text-primary hover:bg-surface"
                )}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Description */}
            <div className="flex flex-col gap-7">
              <div>
                <p className="type-label text-[0.62rem] text-brand mb-3">
                  Profil {active.name} // Interface dédiée
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{active.description}</p>
              </div>

              <ul className="flex flex-col gap-3.5">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-xs text-text-secondary">
                    <div className="h-1.5 w-1.5 bg-brand flex-shrink-0 mt-1" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Mini KPIs */}
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-surface-elevated p-5">
                  <p className="type-label text-[0.55rem] text-text-tertiary mb-1.5">Profil</p>
                  <p className="text-xl font-bold text-text-primary tracking-tight">{active.name}</p>
                  <p className="type-label text-[0.55rem] text-brand mt-1">{active.user}</p>
                </div>
                <div className="bg-surface-elevated p-5">
                  <p className="type-label text-[0.55rem] text-text-tertiary mb-1.5">Objectif mois</p>
                  <p className="text-xl font-bold text-text-primary tracking-tight">{active.progressPct}%</p>
                  <div className="mt-2 h-1 bg-border-subtle">
                    <div className="h-1 bg-brand transition-all duration-700" style={{ width: `${active.progressPct}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* App mockup */}
            <AppMockup key={active.id} profile={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

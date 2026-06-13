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

/* ── Mockup Analytique — dark mode Salesforce-like ── */

function AnalytiqueMockup({ profile }: { profile: Profile }) {
  const bars = profile.bars!;
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const BG    = "#16191F";
  const PANEL = "#1E2330";
  const BD    = "#2E3448";
  const BLUE  = "#1B96FF";
  const BDIM  = "#0176D3";
  const TXT   = "#E5E9F2";
  const DIM   = "#7B8399";
  const GRN   = "#4BCE7A";

  const tiles = [
    { label: "Quota atteint",  value: `${profile.progressPct}%`, delta: "↗ +12% vs T3",    color: GRN  },
    { label: "Pipeline total",  value: "142 500 €",               delta: "↗ +8 000 ce mois", color: BLUE },
    { label: "Deals actifs",    value: "18",                      delta: "5 chauds",          color: TXT  },
    { label: "Taux closing",    value: profile.mainMetric,        delta: "↗ +5 pts",          color: GRN  },
  ];

  const deals = [
    { name: "Nexus SA",    value: "28 000 €", stage: "Négociation",  pct: 80 },
    { name: "Orbit Inc.",  value: "12 000 €", stage: "Proposition",  pct: 55 },
    { name: "Pulse Corp",  value: "8 500 €",  stage: "Qualification", pct: 35 },
  ];

  return (
    <div style={{ background: BG, border: `1px solid ${BD}`, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,.6)" }}>
      {/* Top bar */}
      <div style={{ background: "#0D1117", borderBottom: `1px solid ${BD}`, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 12, height: 12, background: BDIM, transform: "rotate(45deg)", flexShrink: 0 }} />
          <span style={{ color: BLUE, fontWeight: 700, fontSize: "0.44rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>Providence</span>
          <span style={{ color: BD, fontSize: "0.28rem", margin: "0 2px" }}>|</span>
          <span style={{ color: DIM, fontSize: "0.28rem", letterSpacing: "0.08em" }}>Analytics</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: DIM, fontSize: "0.28rem" }}>M. Dupont</span>
          <div style={{ background: "#0D3349", border: `1px solid ${BDIM}`, padding: "1px 5px" }}>
            <span style={{ color: BLUE, fontSize: "0.24rem", fontWeight: 600, letterSpacing: "0.06em" }}>● ACTIF</span>
          </div>
          <div style={{ width: 18, height: 18, background: BDIM, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: "4.5px" }}>MD</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#0D1117", borderBottom: `1px solid ${BD}`, padding: "0 10px", display: "flex" }}>
        {["Dashboard", "Analytics", "Pipeline", "Objectifs", "Forecast"].map((tab) => (
          <div key={tab} style={{ padding: "5px 7px", borderBottom: tab === "Analytics" ? `2px solid ${BLUE}` : "2px solid transparent", marginBottom: -1 }}>
            <span style={{ color: tab === "Analytics" ? BLUE : DIM, fontSize: "0.3rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: tab === "Analytics" ? 600 : 400 }}>{tab}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "8px 10px", background: BG }}>
        {/* 4 metric tiles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4, marginBottom: 7 }}>
          {tiles.map((t) => (
            <div key={t.label} style={{ background: PANEL, border: `1px solid ${BD}`, padding: "5px 6px" }}>
              <p style={{ color: DIM, fontSize: "0.24rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>{t.label}</p>
              <p style={{ color: t.color, fontWeight: 700, fontSize: "0.72rem", lineHeight: 1, marginBottom: 1 }}>{t.value}</p>
              <p style={{ color: DIM, fontSize: "0.22rem" }}>{t.delta}</p>
            </div>
          ))}
        </div>

        {/* Chart + deals */}
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 5 }}>
          {/* Bar chart */}
          <div style={{ background: PANEL, border: `1px solid ${BD}`, padding: "6px 8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 7 }}>
              <div>
                <p style={{ color: TXT, fontSize: "0.3rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 1 }}>Closing hebdomadaire</p>
                <p style={{ color: DIM, fontSize: "0.24rem" }}>Taux moyen · 63%</p>
              </div>
              <div style={{ background: "#0D3349", border: `1px solid ${BD}`, padding: "1px 5px" }}>
                <span style={{ color: BLUE, fontSize: "0.22rem" }}>↓ Export</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 36 }}>
              {bars.map((h, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <div style={{ width: "100%", height: `${h * 0.34}px`, background: h > 75 ? BLUE : h > 55 ? BDIM : BD, boxShadow: h > 75 ? `0 0 5px rgba(27,150,255,.45)` : undefined }} />
                  <span style={{ color: DIM, fontSize: "0.21rem" }}>{days[i]}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 5, paddingTop: 4, borderTop: `1px solid ${BD}` }}>
              {([[GRN, "Haut"], [BDIM, "Moyen"], [BD, "Bas"]] as [string,string][]).map(([c, l]) => (
                <span key={l} style={{ color: c, fontSize: "0.21rem" }}>■ {l}</span>
              ))}
            </div>
          </div>

          {/* Deals list */}
          <div style={{ background: PANEL, border: `1px solid ${BD}`, padding: "6px 8px", display: "flex", flexDirection: "column" }}>
            <p style={{ color: TXT, fontSize: "0.28rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Deals prioritaires</p>
            {deals.map((d, i) => (
              <div key={d.name} style={{ paddingBottom: i < 2 ? 5 : 0, marginBottom: i < 2 ? 5 : 0, borderBottom: i < 2 ? `1px solid ${BD}` : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ color: TXT, fontSize: "0.28rem", fontWeight: 600 }}>{d.name}</span>
                  <span style={{ color: GRN, fontSize: "0.28rem", fontWeight: 700 }}>{d.value}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ color: DIM, fontSize: "0.23rem" }}>{d.stage}</span>
                  <span style={{ color: DIM, fontSize: "0.23rem" }}>{d.pct}%</span>
                </div>
                <div style={{ height: 3, background: BD }}>
                  <div style={{ height: 3, background: d.pct > 70 ? GRN : BLUE, width: `${d.pct}%`, transition: "width .7s" }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: "auto", paddingTop: 5, borderTop: `1px solid ${BD}` }}>
              <p style={{ color: DIM, fontSize: "0.23rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 1 }}>Commission potentielle</p>
              <p style={{ color: TXT, fontWeight: 700, fontSize: "0.52rem" }}>37 350 €</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ background: "#0D1117", borderTop: `1px solid ${BD}`, padding: "3px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ color: GRN, fontSize: "0.23rem", letterSpacing: "0.08em" }}>● Connecté</span>
          <span style={{ color: BD }}>|</span>
          <span style={{ color: DIM, fontSize: "0.23rem" }}>Synchro il y a 2 min</span>
          <span style={{ color: BD }}>|</span>
          <span style={{ color: DIM, fontSize: "0.23rem" }}>v2.4.1</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ color: DIM, fontSize: "0.23rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Quota</span>
          <div style={{ height: 3, width: 36, background: BD }}>
            <div style={{ height: 3, background: GRN, width: `${profile.progressPct}%` }} />
          </div>
          <span style={{ color: GRN, fontSize: "0.23rem", fontWeight: 700 }}>{profile.progressPct}%</span>
        </div>
      </div>
    </div>
  );
}

/* ── Mockup Expressif — CRM épuré avec photos ── */

function ExpressifMockup({ profile }: { profile: Profile }) {
  const BD  = "#E8ECF2";
  const SF  = "#F5F7FA";
  const TXT = "#111827";
  const DIM = "#6B7280";
  const ACC = "#EA580C";

  const extras = [
    { photo: "https://i.pravatar.cc/32?img=5",  last: "Lundi dernier",  tag: "Relancer",   tagClr: ACC,      tagBg: "#FFF7ED" },
    { photo: "https://i.pravatar.cc/32?img=12", last: "Il y a 5 jours", tag: "En cours",   tagClr: "#16A34A", tagBg: "#F0FDF4" },
    { photo: "https://i.pravatar.cc/32?img=47", last: "Il y a 12 j.",   tag: "Attention",  tagClr: "#DC2626", tagBg: "#FEF2F2" },
    { photo: "https://i.pravatar.cc/32?img=33", last: "Il y a 3 jours", tag: "Relancer",   tagClr: ACC,      tagBg: "#FFF7ED" },
  ];
  const contacts = profile.contacts!.map((c, i) => ({ ...c, ...extras[i] }));

  return (
    <div style={{ background: "#FFFFFF", border: `1px solid ${BD}`, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,.07), 0 2px 8px rgba(0,0,0,.04)" }}>
      {/* Top bar — very minimal */}
      <div style={{ background: "white", borderBottom: `1px solid ${BD}`, padding: "5px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 10, height: 10, background: ACC, transform: "rotate(45deg)", flexShrink: 0 }} />
          <span style={{ color: TXT, fontWeight: 700, fontSize: "0.42rem", letterSpacing: "0.1em" }}>Providence</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {["Dashboard", "Contacts", "Engagement", "Agenda"].map((t) => (
            <span key={t} style={{ color: t === "Engagement" ? ACC : DIM, fontSize: "0.28rem", fontWeight: t === "Engagement" ? 600 : 400, borderBottom: t === "Engagement" ? `1.5px solid ${ACC}` : "none", paddingBottom: 1 }}>{t}</span>
          ))}
          <img src="https://i.pravatar.cc/20?img=9" alt="Sophie Martin" style={{ width: 18, height: 18, borderRadius: "50%", border: `1.5px solid ${ACC}`, objectFit: "cover" }} />
        </div>
      </div>

      {/* Welcome banner */}
      <div style={{ background: SF, borderBottom: `1px solid ${BD}`, padding: "7px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ color: TXT, fontWeight: 600, fontSize: "0.44rem", marginBottom: 1 }}>Bonjour, Sophie ☀</p>
          <p style={{ color: DIM, fontSize: "0.28rem" }}>3 contacts à relancer · Score moyen : <span style={{ color: ACC, fontWeight: 600 }}>{profile.mainMetric}</span></p>
        </div>
        <div style={{ background: ACC, padding: "3px 8px", borderRadius: 3 }}>
          <span style={{ color: "white", fontSize: "0.27rem", fontWeight: 600 }}>+ Nouveau contact</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "8px 14px", background: "#FFFFFF" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 8 }}>
          {/* Contact list with photos */}
          <div>
            <p style={{ color: DIM, fontSize: "0.25rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 5 }}>Contacts prioritaires</p>
            {contacts.map((c, idx) => (
              <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 7px", background: idx === 0 ? "#FFF7ED" : "transparent", borderRadius: 4, marginBottom: 3, border: idx === 0 ? `1px solid #FED7AA` : `1px solid transparent` }}>
                <img src={c.photo} alt={c.name} style={{ width: 26, height: 26, borderRadius: "50%", flexShrink: 0, objectFit: "cover", border: `1.5px solid ${BD}` }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: TXT, fontSize: "0.31rem", fontWeight: 600 }}>{c.name}</p>
                  <p style={{ color: DIM, fontSize: "0.25rem" }}>{c.company} · {c.last}</p>
                </div>
                <div style={{ display: "flex", gap: 2 }}>
                  {[1,2,3,4,5].map(i => <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i <= c.score ? ACC : "#FED7AA" }} />)}
                </div>
                <div style={{ background: c.tagBg, padding: "1px 6px", borderRadius: 100 }}>
                  <span style={{ color: c.tagClr, fontSize: "0.24rem", fontWeight: 600 }}>{c.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Activity panel */}
          <div>
            <p style={{ color: DIM, fontSize: "0.25rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 5 }}>Activité</p>
            <div style={{ background: SF, borderRadius: 5, border: `1px solid ${BD}`, padding: "7px 8px", marginBottom: 5 }}>
              {[["47", "relations actives"], ["12", "à relancer"], ["8", "en négociation"]].map(([v, l]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ color: DIM, fontSize: "0.25rem" }}>{l}</span>
                  <span style={{ color: TXT, fontWeight: 700, fontSize: "0.48rem" }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ background: ACC, borderRadius: 4, padding: "6px 8px" }}>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: "0.24rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Score engagement</p>
              <p style={{ color: "white", fontWeight: 700, fontSize: "0.85rem", lineHeight: 1, marginBottom: 3 }}>{profile.mainMetric}</p>
              <div style={{ height: 4, background: "rgba(255,255,255,.2)", borderRadius: 100 }}>
                <div style={{ height: 4, background: "white", width: `${profile.progressPct}%`, borderRadius: 100, transition: "width .7s" }} />
              </div>
              <p style={{ color: "rgba(255,255,255,.55)", fontSize: "0.22rem", marginTop: 2 }}>Qualité relation client · {profile.progressPct}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ background: SF, borderTop: `1px solid ${BD}`, padding: "3px 14px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "#16A34A", fontSize: "0.24rem" }}>● Synchro en temps réel</span>
        <span style={{ color: DIM, fontSize: "0.24rem" }}>Dernière activité · il y a 3 min</span>
      </div>
    </div>
  );
}

/* ── Mockup Conducteur — light + bordeaux technique ── */

function ConducteurMockup({ profile }: { profile: Profile }) {
  const BG    = "#FAFAFA";
  const WHITE = "#FFFFFF";
  const BD    = "#E5E7EB";
  const BR    = "#7B1C2E";
  const BR_LT = "#F3E4E7";
  const TXT   = "#111827";
  const DIM   = "#6B7280";
  const urgClr = (u: string) => u === "urgent" ? "#DC2626" : u === "today" ? "#D97706" : DIM;
  const urgBg  = (u: string) => u === "urgent" ? "#FEF2F2" : u === "today" ? "#FFFBEB" : "#F9FAFB";
  const urgLbl = (u: string) => u === "urgent" ? "URGENT" : u === "today" ? "AUJOURD'HUI" : "DEMAIN";

  const tiles = [
    { label: "Objectif",    value: `${profile.progressPct}%`, sub: "J-8",      accent: BR      },
    { label: "Pipeline",    value: "48 500 €",                sub: "3 deals",  accent: TXT     },
    { label: "Temps/deal",  value: "2.3 h",                   sub: "optimal",  accent: "#16A34A" },
  ];

  return (
    <div style={{ background: BG, border: `1px solid ${BD}`, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,.07), 0 2px 8px rgba(0,0,0,.04)" }}>
      {/* Top bar */}
      <div style={{ background: WHITE, borderBottom: `1px solid ${BD}`, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 10, height: 10, background: BR, transform: "rotate(45deg)", flexShrink: 0 }} />
          <span style={{ color: TXT, fontWeight: 700, fontSize: "0.42rem", letterSpacing: "0.12em" }}>Providence</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span style={{ color: DIM, fontSize: "0.27rem" }}>M. Fontaine · Commercial</span>
          <div style={{ background: BR_LT, border: `1px solid ${BR}`, padding: "1px 6px" }}>
            <span style={{ color: BR, fontSize: "0.25rem", fontWeight: 700, letterSpacing: "0.08em" }}>J-8</span>
          </div>
          <div style={{ width: 18, height: 18, background: BR, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: "4.5px" }}>MF</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: WHITE, borderBottom: `1px solid ${BD}`, padding: "0 10px", display: "flex" }}>
        {["Dashboard", "Priorités", "Pipeline", "Objectifs"].map((tab) => (
          <div key={tab} style={{ padding: "5px 7px", borderBottom: tab === "Dashboard" ? `2px solid ${BR}` : "2px solid transparent", marginBottom: -1 }}>
            <span style={{ color: tab === "Dashboard" ? BR : DIM, fontSize: "0.28rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: tab === "Dashboard" ? 600 : 400 }}>{tab}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "8px 10px", background: BG }}>
        {/* 3 metric tiles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4, marginBottom: 7 }}>
          {tiles.map((t) => (
            <div key={t.label} style={{ background: WHITE, border: `1px solid ${BD}`, borderTop: `3px solid ${t.accent}`, padding: "5px 7px" }}>
              <p style={{ color: DIM, fontSize: "0.24rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>{t.label}</p>
              <p style={{ color: t.accent, fontWeight: 700, fontSize: "0.78rem", lineHeight: 1, marginBottom: 1 }}>{t.value}</p>
              <p style={{ color: DIM, fontSize: "0.22rem" }}>{t.sub}</p>
            </div>
          ))}
        </div>

        {/* Priorities + summary */}
        <div style={{ background: WHITE, border: `1px solid ${BD}`, padding: "6px 8px", marginBottom: 5 }}>
          <p style={{ color: DIM, fontSize: "0.25rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 5 }}>Priorités semaine</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {profile.priorities!.map((p) => (
              <div key={p.rank} style={{ background: urgBg(p.urgency), border: `1px solid ${BD}`, borderLeft: `3px solid ${urgClr(p.urgency)}`, padding: "5px 8px", display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ color: DIM, fontWeight: 700, fontSize: "0.44rem", width: 10, textAlign: "center" }}>#{p.rank}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: TXT, fontSize: "0.3rem", fontWeight: 600 }}>{p.name}</p>
                  <p style={{ color: BR, fontWeight: 700, fontSize: "0.42rem" }}>{p.value}</p>
                </div>
                <div style={{ background: urgBg(p.urgency), border: `1px solid ${urgClr(p.urgency)}`, padding: "1px 5px" }}>
                  <span style={{ color: urgClr(p.urgency), fontSize: "0.22rem", fontWeight: 700, letterSpacing: "0.08em" }}>{urgLbl(p.urgency)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary strip */}
        <div style={{ background: BR, padding: "5px 8px", display: "flex", alignItems: "center", gap: 12 }}>
          <div>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: "0.22rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 1 }}>Valeur totale</p>
            <p style={{ color: "white", fontWeight: 700, fontSize: "0.58rem" }}>48 500 €</p>
          </div>
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,.2)" }} />
          <div>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: "0.22rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 1 }}>Probabilité moy.</p>
            <p style={{ color: "white", fontWeight: 700, fontSize: "0.58rem" }}>74%</p>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <div style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", padding: "2px 8px" }}>
              <span style={{ color: "white", fontSize: "0.25rem", fontWeight: 600 }}>Voir tous les deals →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ background: WHITE, borderTop: `1px solid ${BD}`, padding: "3px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ color: "#16A34A", fontSize: "0.23rem" }}>● Connecté</span>
          <span style={{ color: BD }}>|</span>
          <span style={{ color: DIM, fontSize: "0.23rem" }}>Synchro il y a 1 min</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ color: DIM, fontSize: "0.22rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Objectif</span>
          <div style={{ height: 3, width: 36, background: BD }}>
            <div style={{ height: 3, background: BR, width: `${profile.progressPct}%` }} />
          </div>
          <span style={{ color: BR, fontSize: "0.23rem", fontWeight: 700 }}>{profile.progressPct}%</span>
        </div>
      </div>
    </div>
  );
}

function AppMockup({ profile }: { profile: Profile }) {
  if (profile.id === "analytique") return <AnalytiqueMockup profile={profile} />;
  if (profile.id === "expressif") return <ExpressifMockup profile={profile} />;
  return <ConducteurMockup profile={profile} />;
}

/* ── Section principale ─────────────────── */

export default function Solution() {
  const [active, setActive] = useState(profiles[0]);
  const [visible, setVisible] = useState(true);

  function switchProfile(p: Profile) {
    if (p.id === active.id) return;
    setVisible(false);
    setTimeout(() => { setActive(p); setVisible(true); }, 180);
  }

  return (
    <section id="solution" className="py-32 bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-20" data-reveal="">
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
        <div className="mb-20 border border-border" data-reveal="" data-delay="100">
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
                onClick={() => switchProfile(p)}
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
            <div style={{ transition: "opacity 0.18s ease", opacity: visible ? 1 : 0 }}>
              <AppMockup profile={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

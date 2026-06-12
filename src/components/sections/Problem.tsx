import { cn } from "@/lib/cn";

const frustrations = [
  {
    profile: "Analytique",
    icon: "◈",
    color: "text-cyan-400",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    problem: "Noyé sous l'information inutile.",
    detail:
      "Il a besoin de données structurées et précises. Son CRM lui impose une vue relationnelle qui ne lui dit rien — il passe 20 minutes à trouver ce qu'il cherche.",
  },
  {
    profile: "Expressif",
    icon: "◎",
    color: "text-violet-400",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    problem: "Écrasé par des KPIs qui ne lui parlent pas.",
    detail:
      "Il vend grâce aux relations humaines. Son CRM lui parle uniquement en chiffres froids — il décroche, ne met plus à jour, et les données se dégradent.",
  },
  {
    profile: "Conducteur",
    icon: "◆",
    color: "text-amber-400",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    problem: "Ralenti par une interface trop complexe.",
    detail:
      "Il décide vite et avance. Son CRM lui impose 7 clics pour une action qu'il devrait faire en 1 — chaque friction lui coûte un deal.",
  },
];

const costs = [
  {
    stat: "73%",
    label: "des commerciaux n'utilisent pas leur CRM correctement",
    source: "Forrester, 2024",
  },
  {
    stat: "5,6h",
    label: "perdues chaque semaine à naviguer dans un outil inadapté",
    source: "McKinsey, 2023",
  },
  {
    stat: "31%",
    label: "des données CRM sont incomplètes ou incorrectes",
    source: "Gartner, 2024",
  },
  {
    stat: "1/2",
    label: "commercial considère son CRM comme une contrainte, pas un outil",
    source: "Salesforce State of Sales, 2024",
  },
];

export default function Problem() {
  return (
    <section id="probleme" className="py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium mb-4">
            Le problème
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary mb-6">
            Votre CRM a été conçu pour un commercial{" "}
            <span className="text-text-tertiary italic">qui n&apos;existe pas.</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Chaque profil a ses forces, ses méthodes, sa façon de traiter
            l&apos;information. Un outil unique crée autant de points de friction
            qu&apos;il y a de commerciaux dans votre équipe.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Frustrations */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-text-tertiary mb-1">
              Ce que vivent vos commerciaux
            </p>
            {frustrations.map((item) => (
              <div
                key={item.profile}
                className={cn(
                  "rounded-xl border p-5 flex flex-col gap-3",
                  item.border,
                  item.bg
                )}
              >
                <div className="flex items-center gap-2">
                  <span className={cn("text-sm", item.color)}>{item.icon}</span>
                  <span className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                    {item.profile}
                  </span>
                  {/* Warning dot */}
                  <span className="ml-auto h-2 w-2 rounded-full bg-red-400/60" />
                </div>
                <p className="text-base font-semibold text-text-primary leading-snug">
                  {item.problem}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Right — Business cost */}
          <div className="flex flex-col gap-4 lg:pt-8">
            <p className="text-sm font-medium text-text-tertiary mb-1">
              Ce que ça coûte à votre équipe
            </p>

            {/* Big divider stat */}
            <div className="rounded-xl border border-border bg-surface-elevated p-7 mb-2">
              <p className="text-6xl font-bold text-text-primary tracking-tight mb-2">
                −23%
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                de taux de conversion en moyenne quand le CRM est mal adopté par
                les équipes commerciales.
              </p>
              <p className="text-xs text-text-tertiary mt-3">HubSpot Research, 2024</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {costs.map((item) => (
                <div
                  key={item.stat}
                  className="rounded-xl border border-border bg-surface-elevated p-5 flex flex-col gap-2"
                >
                  <p className="text-3xl font-bold text-text-primary tracking-tight">
                    {item.stat}
                  </p>
                  <p className="text-sm text-text-secondary leading-snug">
                    {item.label}
                  </p>
                  <p className="text-xs text-text-tertiary mt-auto">{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

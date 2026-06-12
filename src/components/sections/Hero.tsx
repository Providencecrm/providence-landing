import { cn } from "@/lib/cn";

const profiles = [
  {
    name: "Analytique",
    icon: "◈",
    gradient: "from-cyan-500/15 to-cyan-500/0",
    border: "border-cyan-500/25",
    badge: "bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20",
    dot: "bg-cyan-400",
    features: ["Pipeline chiffré", "Rapports détaillés", "Prévisions IA"],
    metric: "+34% de conversion",
  },
  {
    name: "Expressif",
    icon: "◎",
    gradient: "from-violet-500/15 to-violet-500/0",
    border: "border-violet-500/25",
    badge: "bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20",
    dot: "bg-violet-400",
    features: ["Vue relation client", "Historique émotionnel", "Suivi engagement"],
    metric: "+52% de fidélisation",
  },
  {
    name: "Conducteur",
    icon: "◆",
    gradient: "from-amber-500/15 to-amber-500/0",
    border: "border-amber-500/25",
    badge: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20",
    dot: "bg-amber-400",
    features: ["Synthèse priorités", "Alertes actions", "Objectifs visuels"],
    metric: "+41% de deals closés",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm text-brand-light">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light animate-pulse" />
            CRM adaptatif · Nouvelle génération
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-text-primary">
              Mettez la psychologie{" "}
              <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
                au service
              </span>{" "}
              de vos ventes.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Providence adapte automatiquement son interface au profil psychologique
              de chaque commercial — pour que chacun travaille avec les outils
              qui lui correspondent vraiment.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors shadow-lg shadow-brand/25"
            >
              Demander une démo
            </a>
            <a
              href="#comment"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Voir comment ça marche
              <span className="text-xs">↓</span>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l) => (
                <div
                  key={l}
                  className="h-8 w-8 rounded-full bg-surface-elevated border-2 border-background flex items-center justify-center text-xs font-medium text-text-secondary"
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-sm text-text-tertiary">
              Rejoignez{" "}
              <span className="text-text-secondary font-medium">120+ équipes commerciales</span>
            </p>
          </div>
        </div>

        {/* Right — Profile cards */}
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium mb-1">
            Une interface pour chaque profil
          </p>
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className={cn(
                "relative rounded-xl border p-5 bg-gradient-to-br",
                profile.gradient,
                profile.border,
                "backdrop-blur-sm"
              )}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-lg text-sm",
                      profile.badge
                    )}
                  >
                    {profile.icon}
                  </div>
                  <span className="text-sm font-semibold text-text-primary">
                    {profile.name}
                  </span>
                </div>
                <span
                  className={cn(
                    "text-xs font-medium px-2.5 py-1 rounded-full",
                    profile.badge
                  )}
                >
                  {profile.metric}
                </span>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {profile.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-1.5 rounded-md bg-surface/60 border border-border-subtle px-2.5 py-1"
                  >
                    <div className={cn("h-1.5 w-1.5 rounded-full", profile.dot)} />
                    <span className="text-xs text-text-secondary">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

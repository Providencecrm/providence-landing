import { cn } from "@/lib/cn";

const profiles = [
  {
    name: "Analytique",
    featured: true,
    features: ["Pipeline chiffré", "Rapports détaillés", "Prévisions IA"],
    metric: "34,2%",
    metricLabel: "Taux de conversion",
  },
  {
    name: "Expressif",
    featured: false,
    features: ["Vue relation client", "Historique engagement", "Suivi contacts"],
    metric: "52%",
    metricLabel: "Fidélisation client",
  },
  {
    name: "Conducteur",
    featured: false,
    features: ["Synthèse priorités", "Alertes actions", "Objectifs visuels"],
    metric: "3",
    metricLabel: "Deals à closer",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-[6.25rem] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="type-label text-text-tertiary animate-fade-in">
              CRM adaptatif // Nouvelle génération
            </p>
            <h1 className="type-heading text-[clamp(1.8rem,3.5vw,2.8rem)] text-text-primary">
              <span className="line-reveal"><span className="line-reveal-inner">Vous n&apos;avez pas un problème de recrutement.</span></span>
              <span className="line-reveal"><span className="line-reveal-inner delay-200 text-brand">Vous avez un problème de placement.</span></span>
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md animate-fade-in-up delay-500">
              Providence adapte automatiquement son interface au profil
              psychologique de chaque commercial — pour que chacun travaille
              avec les outils qui lui correspondent vraiment.
            </p>
          </div>

          <div className="animate-fade-in-up delay-600 flex items-center gap-4">
            <a href="#demo" className="type-btn bg-brand text-white px-7 py-3.5 hover:bg-brand-dark">
              Essai gratuit 48h
            </a>
            <a href="#comment" className="type-label text-[0.6rem] text-text-tertiary hover:text-text-primary">
              Comment ça marche →
            </a>
          </div>

          <div className="animate-fade-in-up delay-700 flex items-center gap-3">
            <div className="flex -space-x-1.5">
              {["SM", "TL", "CD", "AC"].map((i) => (
                <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-surface flex items-center justify-center">
                  <span className="text-[9px] font-semibold text-text-secondary">{i}</span>
                </div>
              ))}
            </div>
            <p className="type-label text-[0.58rem] text-text-tertiary">
              120+ équipes commerciales
            </p>
          </div>
        </div>

        {/* Right — Profile cards */}
        <div className="animate-fade-in-up delay-200 flex flex-col gap-3">
          <p className="type-label text-[0.58rem] text-text-tertiary mb-2">
            Interface adaptée par profil
          </p>
          {profiles.map((p) => (
            <div
              key={p.name}
              className={cn(
                "card-lift p-5",
                p.featured
                  ? "bg-brand text-white"
                  : "border border-border bg-white"
              )}
            >
              <div className="mb-4">
                <p className={cn("type-label text-[0.58rem] mb-1", p.featured ? "text-white/60" : "text-text-tertiary")}>
                  Profil // {p.name}
                </p>
                <p className={cn("text-2xl font-bold tracking-tight", p.featured ? "text-white" : "text-text-primary")}>
                  {p.metric}
                </p>
                <p className={cn("type-label text-[0.55rem] mt-0.5", p.featured ? "text-white/70" : "text-text-tertiary")}>
                  {p.metricLabel}
                </p>
              </div>

              <div className={cn("h-px mb-3", p.featured ? "bg-white/15" : "bg-border")} />
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className={cn(
                      "type-label text-[0.55rem] px-2 py-1 border",
                      p.featured
                        ? "border-white/20 text-white/80"
                        : "border-border text-text-tertiary"
                    )}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

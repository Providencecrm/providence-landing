import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Starter",
    price: "29",
    limit: "Jusqu'à 10 commerciaux",
    description: "Pour lancer Providence dans une petite équipe.",
    cta: "Démarrer gratuitement",
    featured: false,
    features: [
      "Questionnaire de profil (3 types)",
      "Interface adaptée par profil",
      "3 intégrations CRM",
      "Dashboard manager basique",
      "Support par email",
    ],
  },
  {
    name: "Growth",
    price: "49",
    limit: "Jusqu'à 50 commerciaux",
    description: "Pour exploiter pleinement le potentiel de chaque commercial.",
    cta: "Démarrer gratuitement",
    featured: true,
    features: [
      "Tout Starter, plus :",
      "Questionnaire avancé (5 types)",
      "Suggestions d'actions personnalisées",
      "Analytics manager complet",
      "Toutes les intégrations CRM",
      "Support prioritaire (< 4h)",
      "Onboarding guidé",
    ],
  },
  {
    name: "Enterprise",
    price: null,
    limit: "Équipes 50+",
    description: "Pour les grandes équipes avec des besoins spécifiques.",
    cta: "Nous contacter",
    featured: false,
    features: [
      "Tout Growth, plus :",
      "SSO / SAML",
      "CSM dédié",
      "Intégrations custom",
      "SLA garanti",
      "Facturation sur mesure",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl mb-16" data-reveal="">
          <p className="type-label text-text-tertiary mb-5">Tarifs // Plans</p>
          <h2 className="type-heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary mb-6">
            Simple, transparent,{" "}
            <span className="text-brand">sans surprise.</span>
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Tous les plans incluent le questionnaire de profil, l&apos;adaptation
            automatique et les intégrations CRM essentielles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col p-8",
                plan.featured ? "bg-brand" : "bg-white"
              )}
              data-reveal=""
              data-delay={String(index * 150)}
            >
              {plan.featured && (
                <div className="absolute top-0 left-8">
                  <span className="type-label text-[0.55rem] bg-white text-brand px-3 py-1 -translate-y-1/2 inline-block">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="mb-6 pt-2">
                <p className={cn("type-label text-[0.62rem] mb-1", plan.featured ? "text-white/60" : "text-text-tertiary")}>
                  {plan.limit}
                </p>
                <h3 className={cn("type-heading text-2xl mb-3", plan.featured ? "text-white" : "text-text-primary")}>
                  {plan.name}
                </h3>
                <p className={cn("text-xs leading-relaxed", plan.featured ? "text-white/70" : "text-text-secondary")}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.price ? (
                  <div className="flex items-end gap-1.5">
                    <span className={cn("text-5xl font-bold tracking-tight", plan.featured ? "text-white" : "text-text-primary")}>
                      €{plan.price}
                    </span>
                    <span className={cn("text-xs mb-2", plan.featured ? "text-white/50" : "text-text-tertiary")}>
                      / user / mois
                    </span>
                  </div>
                ) : (
                  <p className={cn("text-3xl font-bold tracking-tight", plan.featured ? "text-white" : "text-text-primary")}>
                    Sur devis
                  </p>
                )}
              </div>

              <a
                href="#demo"
                className={cn(
                  "type-btn text-[0.6rem] px-5 py-3 mb-8 text-center",
                  plan.featured
                    ? "bg-white text-brand hover:bg-white/90"
                    : "border border-brand text-brand hover:bg-brand hover:text-white"
                )}
              >
                {plan.cta}
              </a>

              <div className={cn("h-px mb-6", plan.featured ? "bg-white/15" : "bg-border")} />

              <ul className="flex flex-col gap-3">
                {plan.features.map((f, i) => (
                  <li key={f} className={cn(
                    "flex items-start gap-2.5",
                    i === 0 && plan.name !== "Starter"
                      ? cn("type-label text-[0.55rem]", plan.featured ? "text-white/40" : "text-text-tertiary")
                      : "text-xs"
                  )}>
                    {i === 0 && plan.name !== "Starter" ? (
                      <span className={cn("type-label text-[0.55rem]", plan.featured ? "text-white/40" : "text-text-tertiary")}>{f}</span>
                    ) : (
                      <>
                        <div className={cn("h-1.5 w-1.5 flex-shrink-0 mt-1", plan.featured ? "bg-white/60" : "bg-brand")} />
                        <span className={plan.featured ? "text-white/80" : "text-text-secondary"}>{f}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 type-label text-[0.58rem] text-text-tertiary text-center">
          14 jours d&apos;essai gratuit · Pas de carte bancaire · Résiliable à tout moment
        </p>
      </div>
    </section>
  );
}

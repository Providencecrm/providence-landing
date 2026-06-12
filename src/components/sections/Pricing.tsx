import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Starter",
    price: "29",
    period: "/ utilisateur / mois",
    description: "Pour lancer Providence dans une petite équipe commerciale.",
    cta: "Démarrer gratuitement",
    ctaHref: "#demo",
    featured: false,
    limit: "Jusqu'à 10 commerciaux",
    features: [
      "Questionnaire de profil (3 types)",
      "Interface adaptée par profil",
      "3 intégrations CRM (Salesforce, HubSpot, Pipedrive)",
      "Dashboard manager basique",
      "Support par email",
      "Mises à jour incluses",
    ],
  },
  {
    name: "Growth",
    price: "49",
    period: "/ utilisateur / mois",
    description: "Pour les équipes qui veulent exploiter pleinement le potentiel de chaque commercial.",
    cta: "Démarrer gratuitement",
    ctaHref: "#demo",
    featured: true,
    limit: "Jusqu'à 50 commerciaux",
    features: [
      "Tout Starter, plus :",
      "Questionnaire avancé (5 types)",
      "Suggestions d'actions personnalisées",
      "Analytics manager complet",
      "Toutes les intégrations CRM",
      "Support prioritaire (réponse < 4h)",
      "Onboarding guidé par notre équipe",
    ],
  },
  {
    name: "Enterprise",
    price: null,
    period: null,
    description: "Pour les grandes équipes avec des besoins spécifiques de sécurité, d'intégration ou de gouvernance.",
    cta: "Nous contacter",
    ctaHref: "#demo",
    featured: false,
    limit: "Équipes 50+",
    features: [
      "Tout Growth, plus :",
      "SSO / SAML",
      "Customer Success Manager dédié",
      "Intégrations et workflows custom",
      "SLA garanti contractuellement",
      "Facturation sur mesure",
      "Formation équipe incluse",
    ],
  },
];

function Check({ featured }: { featured: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("w-4 h-4 flex-shrink-0 mt-0.5", featured ? "text-brand-light" : "text-text-tertiary")}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="tarifs" className="py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium mb-4">
            Tarifs
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary mb-6">
            Simple, transparent,{" "}
            <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
              sans surprise.
            </span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Tous les plans incluent le questionnaire de profil, l&apos;adaptation
            automatique de l&apos;interface et les intégrations CRM essentielles.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border flex flex-col",
                plan.featured
                  ? "border-brand/50 bg-brand/5 shadow-xl shadow-brand/10 lg:-mt-4 lg:pb-4"
                  : "border-border bg-surface-elevated"
              )}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-brand/30">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col gap-6 flex-1">
                {/* Plan name + limit */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-text-primary">
                      {plan.name}
                    </h3>
                    <span className="text-xs text-text-tertiary bg-surface px-2.5 py-1 rounded-full border border-border-subtle">
                      {plan.limit}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div>
                  {plan.price ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold text-text-primary tracking-tight">
                        €{plan.price}
                      </span>
                      <span className="text-sm text-text-tertiary mb-1.5">
                        {plan.period}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-bold text-text-primary tracking-tight">
                        Sur devis
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={cn(
                    "flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
                    plan.featured
                      ? "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25"
                      : "border border-border bg-surface text-text-primary hover:border-brand/40 hover:text-brand-light"
                  )}
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div className="h-px bg-border-subtle" />

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {plan.features.map((f, i) => (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-2.5",
                        i === 0 && plan.name !== "Starter"
                          ? "text-text-tertiary text-xs font-medium uppercase tracking-wide"
                          : ""
                      )}
                    >
                      {i === 0 && plan.name !== "Starter" ? (
                        <span className="text-xs text-text-tertiary font-medium uppercase tracking-wide">
                          {f}
                        </span>
                      ) : (
                        <>
                          <Check featured={plan.featured} />
                          <span className="text-sm text-text-secondary">{f}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-text-tertiary">
          Tous les plans incluent 14 jours d&apos;essai gratuit · Pas de carte bancaire requise ·
          Résiliable à tout moment
        </p>
      </div>
    </section>
  );
}

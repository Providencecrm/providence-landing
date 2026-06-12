import { cn } from "@/lib/cn";

const steps = [
  {
    number: "01",
    title: "Questionnaire rapide",
    description:
      "Chaque commercial répond à un questionnaire de 5 minutes. Des questions ciblées, pas un test de 50 pages — suffisant pour identifier le profil dominant avec précision.",
    detail: "5 min · 100% autonome",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Profil identifié",
    description:
      "Providence analyse les réponses et détermine le profil psychologique dominant — Analytique, Expressif ou Conducteur. Le résultat est immédiat et partagé avec le manager.",
    detail: "Résultat instantané",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Interface reconfigurée",
    description:
      "Le dashboard, les vues, l'ordre des informations et les suggestions s'adaptent automatiquement au profil — sans aucune action manuelle de la part du commercial.",
    detail: "Configuration automatique",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Performance continue",
    description:
      "Le commercial travaille avec un outil qui lui correspond. Les données sont mieux renseignées, l'adoption monte naturellement, les résultats s'améliorent.",
    detail: "Amélioration dans le temps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="comment" className="py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium mb-4">
            Comment ça marche
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary mb-6">
            Opérationnel en{" "}
            <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
              une journée.
            </span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Pas de déploiement complexe, pas de semaines de paramétrage.
            Providence s&apos;installe, chaque commercial complète son questionnaire,
            et l&apos;interface s&apos;adapte immédiatement.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-brand/0 via-border to-brand/0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col gap-5">
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[23px] top-[52px] bottom-[-24px] w-px bg-border-subtle" />
                )}

                {/* Number + icon bubble */}
                <div className="relative flex items-center gap-3">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated shadow-sm">
                    <div className="text-brand-light">{step.icon}</div>
                  </div>
                  <span className="text-3xl font-bold text-border tabular-nums select-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 pl-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                  <p className={cn(
                    "mt-1 text-xs font-medium",
                    i === 0 ? "text-brand-light" :
                    i === 1 ? "text-violet-400" :
                    i === 2 ? "text-cyan-400" :
                    "text-amber-400"
                  )}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-20 rounded-2xl border border-brand/20 bg-brand/5 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-text-primary mb-1">
              Votre CRM existant reste en place.
            </p>
            <p className="text-sm text-text-secondary">
              Providence s&apos;intègre à Salesforce, HubSpot, Pipedrive et tout CRM
              via API — pas de migration, pas de perte de données.
            </p>
          </div>
          <a
            href="#demo"
            className="flex-shrink-0 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors whitespace-nowrap shadow-lg shadow-brand/20"
          >
            Voir une démo
          </a>
        </div>
      </div>
    </section>
  );
}

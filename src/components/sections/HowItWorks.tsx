const steps = [
  {
    number: "01",
    title: "Questionnaire rapide",
    description: "Chaque commercial répond à 5 minutes de questions ciblées. Suffisant pour identifier le profil dominant avec précision.",
    detail: "5 min · 100% autonome",
  },
  {
    number: "02",
    title: "Profil identifié",
    description: "Providence détermine le profil psychologique dominant et le partage immédiatement avec le manager.",
    detail: "Résultat instantané",
  },
  {
    number: "03",
    title: "Interface reconfigurée",
    description: "Dashboard, vues et suggestions s'adaptent automatiquement — sans aucune action manuelle.",
    detail: "Configuration automatique",
  },
  {
    number: "04",
    title: "Performance continue",
    description: "Chaque commercial travaille avec un outil fait pour lui. Les données s'améliorent, les résultats suivent.",
    detail: "Amélioration dans le temps",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment" className="py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl mb-20">
          <p className="type-label text-text-tertiary mb-5">Comment ça marche // 4 étapes</p>
          <h2 className="type-heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary mb-6">
            Opérationnel en <span className="text-brand">une journée.</span>
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Pas de déploiement complexe. Providence s&apos;installe, chaque commercial
            complète son questionnaire, et l&apos;interface s&apos;adapte immédiatement.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-7 card-lift flex flex-col gap-5">
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold text-border leading-none select-none">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-brand mb-2" />
              </div>
              <div>
                <h3 className="type-label text-[0.62rem] text-text-primary mb-2">{step.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{step.description}</p>
              </div>
              <p className="type-label text-[0.55rem] text-brand mt-auto">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-8 border border-brand/20 bg-brand/5 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="type-label text-[0.62rem] text-text-primary mb-1">
              Votre CRM existant reste en place.
            </p>
            <p className="text-xs text-text-secondary">
              Providence s&apos;intègre à Salesforce, HubSpot, Pipedrive et tout CRM via API — pas de migration.
            </p>
          </div>
          <a href="#demo" className="type-btn bg-brand text-white px-6 py-3 hover:bg-brand-dark whitespace-nowrap text-[0.6rem] flex-shrink-0">
            Voir une démo
          </a>
        </div>
      </div>
    </section>
  );
}

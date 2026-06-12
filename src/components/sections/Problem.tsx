const frustrations = [
  {
    profile: "Analytique",
    problem: "Noyé sous l'information inutile.",
    detail: "Il a besoin de données structurées et précises. Son CRM lui impose une vue relationnelle qui ne lui dit rien — il passe 20 minutes à trouver ce qu'il cherche.",
  },
  {
    profile: "Expressif",
    problem: "Écrasé par des KPIs qui ne lui parlent pas.",
    detail: "Il vend grâce aux relations humaines. Son CRM lui parle uniquement en chiffres froids — il décroche, ne met plus à jour, et les données se dégradent.",
  },
  {
    profile: "Conducteur",
    problem: "Ralenti par une interface trop complexe.",
    detail: "Il décide vite et avance. Son CRM lui impose 7 clics pour une action qu'il devrait faire en 1 — chaque friction lui coûte un deal.",
  },
];

const costs = [
  { stat: "73%", label: "des commerciaux n'utilisent pas leur CRM correctement", source: "Forrester, 2024" },
  { stat: "5,6h", label: "perdues chaque semaine à naviguer dans un outil inadapté", source: "McKinsey, 2023" },
  { stat: "31%", label: "des données CRM sont incomplètes ou incorrectes", source: "Gartner, 2024" },
  { stat: "1 / 2", label: "commercial considère son CRM comme une contrainte", source: "Salesforce, 2024" },
];

export default function Problem() {
  return (
    <section id="probleme" className="py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-20">
          <p className="type-label text-text-tertiary mb-5">Le problème // Pourquoi changer</p>
          <h2 className="type-heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary mb-6">
            Votre CRM a été conçu pour un commercial{" "}
            <span className="text-text-tertiary">qui n'existe pas.</span>
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Chaque profil a ses forces, ses méthodes, sa façon de traiter
            l'information. Un outil unique crée autant de points de friction
            qu'il y a de commerciaux dans votre équipe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Frustrations */}
          <div className="flex flex-col gap-px bg-border">
            {frustrations.map((item) => (
              <div key={item.profile} className="bg-white p-6 card-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1.5 w-1.5 bg-brand" />
                  <p className="type-label text-[0.58rem] text-text-tertiary">
                    Profil // {item.profile}
                  </p>
                </div>
                <p className="text-sm font-semibold text-text-primary mb-2">{item.problem}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Coûts */}
          <div className="flex flex-col gap-4 lg:pt-8">
            {/* Featured stat — bordeaux card */}
            <div className="card-lift bg-brand p-7">
              <p className="type-label text-[0.58rem] text-white/60 mb-3">
                Impact direct // Conversion
              </p>
              <p className="text-6xl font-bold tracking-tight text-white mb-2">−23%</p>
              <p className="text-xs text-white/80 leading-relaxed">
                de taux de conversion en moyenne quand le CRM est mal adopté
                par les équipes commerciales.
              </p>
              <p className="type-label text-[0.55rem] text-white/40 mt-4">
                HubSpot Research, 2024
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-border">
              {costs.map((item) => (
                <div key={item.stat} className="bg-white p-5 card-lift">
                  <p className="text-3xl font-bold tracking-tight text-text-primary mb-1">
                    {item.stat}
                  </p>
                  <p className="text-xs text-text-secondary leading-snug mb-2">{item.label}</p>
                  <p className="type-label text-[0.55rem] text-text-tertiary">{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

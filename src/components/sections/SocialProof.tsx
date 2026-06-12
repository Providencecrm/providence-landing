const metrics = [
  { value: "+29%", label: "Taux de conversion", sub: "En moyenne après 90 jours" },
  { value: "< 1j", label: "Onboarding", sub: "Du questionnaire au CRM actif" },
];

const testimonials = [
  {
    quote: "Avant Providence, mon analytique passait 30 minutes à chercher ses chiffres. Maintenant il ouvre le CRM et tout est là. Son taux de mise à jour a doublé en deux semaines.",
    name: "Sophie Martin",
    title: "Directrice Commerciale // Nexus SA",
    featured: true,
  },
  {
    quote: "L'adoption a grimpé de 80% en trois semaines. Je n'ai pas eu à relancer une seule fois — c'est la première fois en 8 ans de management que ça m'arrive avec un CRM.",
    name: "Thomas Leroy",
    title: "Sales Manager // Orbit Technologies",
    featured: false,
  },
  {
    quote: "Mon équipe est composée de profils très différents. Providence a résolu une tension que je n'arrivais pas à nommer : certains trouvaient le CRM trop complexe, d'autres trop pauvre.",
    name: "Camille Dubois",
    title: "VP Sales // Pulse Corp.",
    featured: false,
  },
  {
    quote: "On a intégré Providence un vendredi. Le lundi matin, les commerciaux étaient opérationnels sans formation. Un outil qui s'explique tout seul.",
    name: "Alexandre Chen",
    title: "Head of Sales // Vertex Group",
    featured: false,
  },
  {
    quote: "Je suis Conducteur. L'ancien CRM m'imposait 6 clics pour voir mes 3 deals prioritaires. Avec Providence c'est ma première vue. Je gagne une heure par jour.",
    name: "Marc Fontaine",
    title: "Account Executive // Apex SAS",
    featured: false,
  },
  {
    quote: "Ce qui m'a convaincu, c'est la réaction de mon équipe après le questionnaire. Ils ont dit 'c'est exactement comme ça que je fonctionne'. L'outil les a reconnus avant même qu'ils l'utilisent.",
    name: "Nadia Benali",
    title: "Sales Director // Beta SAS",
    featured: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-brand">
          <path d="M6 .25a.563.563 0 01.504.314l1.412 2.86 3.157.46a.563.563 0 01.312.959l-2.284 2.228.54 3.143a.563.563 0 01-.816.594L6 9.253l-2.825 1.485a.563.563 0 01-.816-.594l.54-3.143L.674 4.843a.563.563 0 01.312-.96l3.157-.459L5.496.564A.563.563 0 016 .25z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="temoignages" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <p className="type-label text-text-tertiary mb-5">Témoignages // Clients</p>
            <h2 className="type-heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary">
              Des équipes qui performent enfin{" "}
              <span className="text-brand">avec leur CRM.</span>
            </h2>
          </div>
          <div className="flex gap-10 flex-shrink-0">
            {metrics.map((m) => (
              <div key={m.value}>
                <p className="text-4xl font-bold tracking-tight text-brand">{m.value}</p>
                <p className="type-label text-[0.62rem] text-text-primary mt-1">{m.label}</p>
                <p className="type-label text-[0.55rem] text-text-tertiary mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`card-lift flex flex-col justify-between p-6 gap-5 ${t.featured ? "bg-brand" : "bg-white"}`}
            >
              <div className="flex flex-col gap-3">
                <Stars />
                <p className={`text-xs leading-relaxed ${t.featured ? "text-white/80" : "text-text-secondary"}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className={`pt-4 border-t ${t.featured ? "border-white/15" : "border-border-subtle"}`}>
                <p className={`text-xs font-semibold ${t.featured ? "text-white" : "text-text-primary"}`}>{t.name}</p>
                <p className={`type-label text-[0.55rem] mt-0.5 ${t.featured ? "text-white/50" : "text-text-tertiary"}`}>{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

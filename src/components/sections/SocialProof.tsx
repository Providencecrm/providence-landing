import { cn } from "@/lib/cn";

const metrics = [
  {
    value: "+29%",
    label: "de taux de conversion",
    sub: "en moyenne après 90 jours",
    color: "text-brand-light",
  },
  {
    value: "< 1 jour",
    label: "d'onboarding",
    sub: "du questionnaire au CRM actif",
    color: "text-accent",
  },
];

const testimonials = [
  {
    quote:
      "Avant Providence, mon analytique passait 30 minutes à chercher ses chiffres dans le CRM. Maintenant il l'ouvre et tout est là, dans l'ordre qu'il veut. Son taux de mise à jour a doublé en deux semaines.",
    name: "Sophie Martin",
    title: "Directrice Commerciale",
    company: "Nexus SA",
    initials: "SM",
    avatarColor: "bg-violet-500/20 text-violet-300 ring-violet-500/30",
    featured: true,
  },
  {
    quote:
      "L'adoption a grimpé de 80% en trois semaines. Je n'ai pas eu à relancer une seule fois — c'est la première fois en 8 ans de management que ça m'arrive avec un CRM.",
    name: "Thomas Leroy",
    title: "Sales Manager",
    company: "Orbit Technologies",
    initials: "TL",
    avatarColor: "bg-cyan-500/20 text-cyan-300 ring-cyan-500/30",
    featured: false,
  },
  {
    quote:
      "Mon équipe est composée de profils très différents. Providence a résolu une tension que je n'arrivais pas à nommer : certains trouvaient le CRM trop complexe, d'autres trop pauvre. Plus ce problème.",
    name: "Camille Dubois",
    title: "VP Sales",
    company: "Pulse Corp.",
    initials: "CD",
    avatarColor: "bg-amber-500/20 text-amber-300 ring-amber-500/30",
    featured: false,
  },
  {
    quote:
      "On a intégré Providence un vendredi. Le lundi matin, les commerciaux étaient opérationnels sans formation. Un outil qui s'explique tout seul, ça change la donne sur les recrutements.",
    name: "Alexandre Chen",
    title: "Head of Sales",
    company: "Vertex Group",
    initials: "AC",
    avatarColor: "bg-emerald-500/20 text-emerald-300 ring-emerald-500/30",
    featured: false,
  },
  {
    quote:
      "Je suis Conducteur. L'ancien CRM m'imposait 6 clics pour voir mes 3 deals prioritaires. Avec Providence, c'est ma première vue. Je gagne facilement une heure par jour.",
    name: "Marc Fontaine",
    title: "Account Executive",
    company: "Apex SAS",
    initials: "MF",
    avatarColor: "bg-rose-500/20 text-rose-300 ring-rose-500/30",
    featured: false,
  },
  {
    quote:
      "Ce qui m'a convaincu, c'est la réaction de mon équipe après le questionnaire. Ils ont dit 'c'est exactement comme ça que je fonctionne'. L'outil les a reconnus avant même qu'ils l'utilisent.",
    name: "Nadia Benali",
    title: "Sales Director",
    company: "Beta SAS",
    initials: "NB",
    avatarColor: "bg-indigo-500/20 text-indigo-300 ring-indigo-500/30",
    featured: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-amber-400">
          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="temoignages" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium mb-4">
              Témoignages
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary">
              Des équipes qui{" "}
              <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
                performent enfin
              </span>{" "}
              avec leur CRM.
            </h2>
          </div>

          {/* Metrics */}
          <div className="flex gap-8 flex-shrink-0">
            {metrics.map((m) => (
              <div key={m.value} className="flex flex-col gap-1">
                <p className={cn("text-4xl font-bold tracking-tight", m.color)}>
                  {m.value}
                </p>
                <p className="text-sm font-medium text-text-primary">{m.label}</p>
                <p className="text-xs text-text-tertiary">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={cn(
                "flex flex-col justify-between rounded-xl border p-6 gap-5",
                t.featured
                  ? "border-brand/30 bg-brand/5"
                  : "border-border bg-surface"
              )}
            >
              {/* Stars + quote */}
              <div className="flex flex-col gap-3">
                <Stars />
                <p className="text-sm text-text-secondary leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-border-subtle">
                <div
                  className={cn(
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold ring-1",
                    t.avatarColor
                  )}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-tertiary">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

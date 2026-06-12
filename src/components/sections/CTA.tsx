export default function CTA() {
  return (
    <section id="demo" className="relative py-32 bg-surface overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-brand/20 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm text-brand-light">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-light animate-pulse" />
          14 jours d&apos;essai gratuit · Sans carte bancaire
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-text-primary">
            Prêts à voir Providence{" "}
            <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
              en action ?
            </span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
            Découvrez en 30 minutes comment Providence s&apos;adapterait à chaque
            commercial de votre équipe — et ce que ça changerait pour vos résultats.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:contact@providence.app"
            className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors shadow-xl shadow-brand/30"
          >
            Demander une démo
          </a>
          <a
            href="#tarifs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Essayer gratuitement
            <span>→</span>
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-text-tertiary">
          {["Intégration en moins d'un jour", "Sans engagement", "Support inclus dès le premier jour"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 text-brand-light">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.5 3.5L13 4" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

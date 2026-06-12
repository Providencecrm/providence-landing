export default function CTA() {
  return (
    <section id="demo" className="py-32 bg-brand">
      <div className="mx-auto max-w-3xl px-6 text-center flex flex-col items-center gap-10">
        <div className="flex flex-col gap-5">
          <p className="type-label text-[0.6rem] text-white/50">
            Providence // Démo gratuite
          </p>
          <h2 className="type-heading text-[clamp(2.5rem,7vw,5rem)] text-white">
            Prêts à voir Providence en action ?
          </h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-xl mx-auto">
            Découvrez en 30 minutes comment Providence s&apos;adapterait à chaque
            commercial de votre équipe — et ce que ça changerait pour vos résultats.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:contact@providence.app"
            className="type-btn bg-white text-brand px-8 py-4 text-[0.6rem] hover:bg-white/90"
          >
            Demander une démo
          </a>
          <a href="#tarifs" className="type-label text-[0.6rem] text-white/60 hover:text-white/90">
            Essayer gratuitement →
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {["Intégration en moins d'un jour", "Sans engagement", "Support inclus dès J1"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-white/40" />
              <span className="type-label text-[0.55rem] text-white/50">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

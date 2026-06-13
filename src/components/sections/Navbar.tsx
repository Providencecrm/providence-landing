export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface-elevated/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative h-11 w-11 flex items-center justify-center flex-shrink-0 logo-diamond-anim">
            <div className="absolute inset-0 bg-brand rotate-45 group-hover:rotate-[405deg] group-hover:bg-brand-dark" style={{ transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1), background-color 0.15s ease" }} />
            <span className="relative z-10 text-white font-bold text-base">P</span>
          </div>
          <span className="font-bold text-text-primary uppercase tracking-[0.28em] text-[1.05rem] logo-text-anim">Providence</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Solution", href: "#solution" },
            { label: "Comment ça marche", href: "#comment" },
            { label: "Tarifs", href: "#tarifs" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="type-label text-[0.62rem] text-text-tertiary hover:text-text-primary">
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#demo" className="type-btn bg-brand text-white px-6 py-3 hover:bg-brand-dark">
          Essai gratuit 48h
        </a>
      </div>
    </nav>
  );
}

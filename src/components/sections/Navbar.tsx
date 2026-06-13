export default function Navbar() {
  return (
    <nav className="fixed top-9 left-0 right-0 z-50 border-b border-border bg-surface-elevated/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 logo-group">
          <div className="relative h-11 w-11 flex items-center justify-center flex-shrink-0 logo-diamond-anim">
            <div className="logo-ring" />
            <div className="logo-diamond-face absolute inset-0" />
            <span className="relative z-10 text-white font-medium text-[0.88rem]">P</span>
          </div>
          <span className="logo-wordmark">Providence</span>
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

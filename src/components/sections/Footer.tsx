const legal = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "CGU", href: "#" },
  { label: "RGPD", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-9 w-9 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-brand rotate-45" />
                <span className="relative z-10 text-white font-bold text-sm">P</span>
              </div>
              <span className="type-label text-[0.78rem] text-text-primary tracking-[0.22em]">Providence</span>
            </div>
            <p className="text-xs text-text-tertiary leading-relaxed max-w-xs">
              Le CRM qui adapte son interface au profil psychologique de chaque commercial.
            </p>
            <div className="flex items-center gap-2">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/company/providence-crm" },
                { label: "X", href: "https://x.com/providencecrm" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="type-label text-[0.58rem] text-text-tertiary hover:text-brand border border-border px-3 py-1.5">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="type-label text-[0.58rem] text-text-tertiary mb-4">Légal</p>
              <ul className="flex flex-col gap-2.5">
                {legal.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-xs text-text-tertiary hover:text-text-primary">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="type-label text-[0.58rem] text-text-tertiary mb-4">Contact</p>
              <ul className="flex flex-col gap-2.5">
                <li><a href="mailto:contact@providence.app" className="text-xs text-text-tertiary hover:text-text-primary">contact@providence.app</a></li>
                <li><a href="mailto:contact@providence.app" className="text-xs text-text-tertiary hover:text-text-primary">Support client</a></li>
                <li><a href="#demo" className="text-xs text-brand hover:text-brand-dark">Demander une démo →</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="type-label text-[0.55rem] text-text-tertiary">© 2025 Providence. Tous droits réservés.</p>
          <p className="type-label text-[0.55rem] text-text-tertiary">Fait pour les équipes commerciales.</p>
        </div>
      </div>
    </footer>
  );
}

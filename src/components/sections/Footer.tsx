const legal = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "CGU", href: "#" },
  { label: "RGPD", href: "#" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/providence-crm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/providencecrm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <span className="text-base font-semibold text-text-primary">Providence</span>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Le CRM qui adapte son interface au profil psychologique de chaque commercial.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center h-8 w-8 rounded-lg border border-border text-text-tertiary hover:text-text-primary hover:border-border transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal + Contact */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Legal */}
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium">
                Légal
              </p>
              <ul className="flex flex-col gap-2.5">
                {legal.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium">
                Contact
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="mailto:contact@providence.app"
                    className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
                  >
                    contact@providence.app
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@providence.app"
                    className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
                  >
                    Support client
                  </a>
                </li>
                <li>
                  <a
                    href="#demo"
                    className="text-sm text-brand-light hover:text-brand transition-colors"
                  >
                    Demander une démo →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-tertiary">
            © 2025 Providence. Tous droits réservés.
          </p>
          <p className="text-xs text-text-tertiary">
            Fait avec soin pour les équipes commerciales.
          </p>
        </div>
      </div>
    </footer>
  );
}

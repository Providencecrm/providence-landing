export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-text-primary">Providence</span>
        <div className="flex items-center gap-8 text-sm text-text-secondary">
          <a href="#solution" className="hover:text-text-primary transition-colors">Solution</a>
          <a href="#comment" className="hover:text-text-primary transition-colors">Comment ça marche</a>
          <a href="#tarifs" className="hover:text-text-primary transition-colors">Tarifs</a>
        </div>
        <a
          href="#demo"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
        >
          Demander une démo
        </a>
      </div>
    </nav>
  );
}

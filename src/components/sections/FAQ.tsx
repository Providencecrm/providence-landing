"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const groups = [
  {
    theme: "Profil psychologique",
    questions: [
      {
        q: "Comment Providence détermine-t-il le profil d'un commercial ?",
        a: "Chaque commercial répond à un questionnaire de 5 minutes — une quarantaine de questions courtes sur ses méthodes de travail, ses priorités et sa façon de prendre des décisions. Providence analyse les réponses et identifie le profil dominant parmi trois types : Analytique, Expressif ou Conducteur. Pas d'observation comportementale passive, pas d'IA opaque : le questionnaire est transparent et le résultat est expliqué au commercial.",
      },
      {
        q: "Que se passe-t-il si le profil détecté ne correspond pas au commercial ?",
        a: "Le commercial ou son manager peut à tout moment déclencher un nouveau questionnaire ou ajuster manuellement le profil assigné. L'interface se reconfigure instantanément. Les profils ne sont pas figés — ils peuvent évoluer avec le temps ou avec un changement de contexte.",
      },
      {
        q: "Les commerciaux voient-ils leur propre profil ?",
        a: "Oui, chaque commercial a accès à son profil complet avec une explication claire de ce que cela signifie pour sa façon de travailler. Le manager voit les profils de son équipe en vue agrégée, ce qui lui permet de mieux comprendre les dynamiques collectives.",
      },
    ],
  },
  {
    theme: "Intégration & migration",
    questions: [
      {
        q: "Fonctionne-t-il avec notre CRM actuel ?",
        a: "Providence s'intègre nativement avec Salesforce, HubSpot et Pipedrive. Pour tout autre CRM, une API générique est disponible sur les plans Growth et Enterprise. L'intégration ne remplace pas votre CRM — elle adapte l'interface par-dessus. Vos workflows, vos données et vos processus restent inchangés.",
      },
      {
        q: "Combien de temps prend l'intégration technique ?",
        a: "Moins d'une journée pour les CRM supportés nativement. La connexion se fait via OAuth en quelques clics, sans intervention de votre équipe technique. Pour des intégrations custom (via API), comptez 2 à 5 jours selon la complexité de votre stack.",
      },
      {
        q: "Perdons-nous nos données lors de la migration ?",
        a: "Il n'y a pas de migration à proprement parler. Providence se connecte à votre CRM existant en lecture et en écriture — toutes vos données restent où elles sont. Vous pouvez désinstaller Providence à tout moment sans aucune perte de données.",
      },
    ],
  },
  {
    theme: "Adoption & onboarding",
    questions: [
      {
        q: "Faut-il former les commerciaux à Providence ?",
        a: "Non. C'est précisément l'intérêt d'une interface adaptée au profil : la prise en main est naturelle. Chaque commercial retrouve une organisation qui correspond à sa façon de penser. Dans nos données, 89% des commerciaux sont autonomes sans formation après leur première session.",
      },
      {
        q: "Que faire si certains membres de l'équipe résistent au changement ?",
        a: "La résistance aux CRM vient généralement de l'inadaptation de l'outil, pas du refus de travailler. Providence retourne le problème : au lieu de forcer un outil sur un commercial, il adapte l'outil à lui. En pratique, la résistance chute significativement dès les premiers jours d'utilisation.",
      },
    ],
  },
  {
    theme: "Sécurité & données",
    questions: [
      {
        q: "Les données psychologiques de nos commerciaux sont-elles partagées ?",
        a: "Non. Les profils psychologiques sont strictement confidentiels par défaut. Ils ne sont jamais partagés en dehors de votre organisation. Les managers accèdent à une vue agrégée (types de profils présents dans l'équipe) mais pas aux réponses individuelles au questionnaire.",
      },
      {
        q: "Providence est-il conforme au RGPD ?",
        a: "Oui. Nos serveurs sont hébergés en Europe (AWS eu-west-1), toutes les données sont chiffrées au repos (AES-256) et en transit (TLS 1.3). Un DPA (Data Processing Agreement) est disponible pour tous les clients. Les commerciaux disposent d'un droit d'accès, de rectification et de suppression de leur profil à tout moment.",
      },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={cn("w-4 h-4 flex-shrink-0 text-text-tertiary transition-transform duration-200", open && "rotate-180")}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
    </svg>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium mb-4">
            FAQ
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary">
            Questions fréquentes.
          </h2>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <div key={group.theme}>
              {/* Theme label */}
              <p className="text-xs uppercase tracking-widest text-text-tertiary font-medium mb-4">
                {group.theme}
              </p>

              {/* Questions */}
              <div className="flex flex-col divide-y divide-border-subtle">
                {group.questions.map((item) => {
                  const id = `${group.theme}-${item.q}`;
                  const isOpen = openId === id;

                  return (
                    <div key={item.q}>
                      <button
                        onClick={() => toggle(id)}
                        className="flex w-full items-start justify-between gap-4 py-5 text-left"
                      >
                        <span className={cn("text-base font-medium transition-colors", isOpen ? "text-text-primary" : "text-text-secondary hover:text-text-primary")}>
                          {item.q}
                        </span>
                        <ChevronIcon open={isOpen} />
                      </button>

                      {isOpen && (
                        <div className="pb-5">
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl border border-border bg-surface p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            Vous ne trouvez pas la réponse que vous cherchez ?
          </p>
          <a
            href="mailto:contact@providence.app"
            className="flex-shrink-0 text-sm font-medium text-brand-light hover:text-brand transition-colors"
          >
            Nous écrire →
          </a>
        </div>
      </div>
    </section>
  );
}

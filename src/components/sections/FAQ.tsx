"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const groups = [
  {
    theme: "Profil psychologique",
    questions: [
      {
        q: "Comment Providence détermine-t-il le profil d'un commercial ?",
        a: "Chaque commercial répond à un questionnaire de 5 minutes — une quarantaine de questions ciblées sur ses méthodes de travail, ses priorités et sa façon de prendre des décisions. Providence identifie le profil dominant parmi trois types : Analytique, Expressif ou Conducteur. Pas d'observation passive, pas d'IA opaque : le questionnaire est transparent et le résultat expliqué.",
      },
      {
        q: "Que se passe-t-il si le profil ne correspond pas au commercial ?",
        a: "Le commercial ou son manager peut déclencher un nouveau questionnaire ou ajuster le profil manuellement. L'interface se reconfigure instantanément. Les profils ne sont pas figés — ils peuvent évoluer avec le temps.",
      },
      {
        q: "Les commerciaux voient-ils leur propre profil ?",
        a: "Oui, chaque commercial accède à son profil complet avec une explication claire. Le manager voit les profils de son équipe en vue agrégée pour mieux comprendre les dynamiques collectives.",
      },
    ],
  },
  {
    theme: "Intégration & migration",
    questions: [
      {
        q: "Fonctionne-t-il avec notre CRM actuel ?",
        a: "Providence s'intègre nativement avec Salesforce, HubSpot et Pipedrive. Pour tout autre CRM, une API générique est disponible sur les plans Growth et Enterprise. Vos workflows, données et processus restent inchangés.",
      },
      {
        q: "Combien de temps prend l'intégration technique ?",
        a: "Moins d'une journée pour les CRM supportés nativement. La connexion se fait via OAuth en quelques clics. Pour des intégrations custom, comptez 2 à 5 jours selon la complexité.",
      },
      {
        q: "Perdons-nous nos données lors de la migration ?",
        a: "Il n'y a pas de migration à proprement parler. Providence se connecte à votre CRM existant — toutes vos données restent où elles sont. Vous pouvez désinstaller à tout moment sans aucune perte.",
      },
    ],
  },
  {
    theme: "Adoption & onboarding",
    questions: [
      {
        q: "Faut-il former les commerciaux à Providence ?",
        a: "Non. La prise en main est naturelle : chaque commercial retrouve une organisation qui correspond à sa façon de penser. 89% des commerciaux sont autonomes sans formation après leur première session.",
      },
      {
        q: "Que faire si certains membres résistent au changement ?",
        a: "La résistance aux CRM vient de l'inadaptation de l'outil, pas du refus de travailler. Providence retourne le problème : il adapte l'outil au commercial, pas l'inverse. La résistance chute significativement dès les premiers jours.",
      },
    ],
  },
  {
    theme: "Sécurité & données",
    questions: [
      {
        q: "Les données psychologiques sont-elles partagées ?",
        a: "Non. Les profils sont strictement confidentiels par défaut et ne sont jamais partagés hors de votre organisation. Les managers accèdent à une vue agrégée, pas aux réponses individuelles.",
      },
      {
        q: "Providence est-il conforme au RGPD ?",
        a: "Oui. Hébergement en Europe (AWS eu-west-1), chiffrement AES-256 au repos et TLS 1.3 en transit. Un DPA est disponible pour tous les clients. Droit d'accès, rectification et suppression garanti à chaque commercial.",
      },
    ],
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16">
          <p className="type-label text-text-tertiary mb-5">FAQ // Questions fréquentes</p>
          <h2 className="type-heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary">
            Vos questions.
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <div key={group.theme}>
              <p className="type-label text-[0.6rem] text-brand mb-4">
                {group.theme}
              </p>
              <div className="flex flex-col border-t border-border">
                {group.questions.map((item) => {
                  const id = `${group.theme}-${item.q}`;
                  const isOpen = openId === id;
                  return (
                    <div key={item.q} className="border-b border-border">
                      <button
                        onClick={() => toggle(id)}
                        className="flex w-full items-start justify-between gap-4 py-5 text-left group"
                      >
                        <span className={cn(
                          "text-sm font-medium transition-colors",
                          isOpen ? "text-brand" : "text-text-primary group-hover:text-brand"
                        )}>
                          {item.q}
                        </span>
                        <span className={cn(
                          "type-label text-[0.65rem] flex-shrink-0 mt-0.5 transition-colors",
                          isOpen ? "text-brand" : "text-text-tertiary"
                        )}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {/* Smooth accordion */}
                      <div
                        className={cn("accordion-content overflow-hidden", isOpen ? "open" : "closed")}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs text-text-secondary leading-relaxed pb-5">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">Vous ne trouvez pas la réponse que vous cherchez ?</p>
          <a href="mailto:contact@providence.app" className="type-label text-[0.6rem] text-brand hover:text-brand-dark">
            Nous écrire →
          </a>
        </div>
      </div>
    </section>
  );
}

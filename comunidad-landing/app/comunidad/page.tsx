"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getLeadData } from "@/lib/leadData";
import { getRecommendation } from "@/lib/recommendations";
import type { LeadDataPartial } from "@/lib/types";

const startCards = [
  {
    number: "01",
    title: "Empieza aquí",
    text: "Descubre cómo utilizar la comunidad y elegir tu ruta.",
    cta: "Ver entrenamiento",
  },
  {
    number: "02",
    title: "Tu sistema de contenido",
    text: "Aprende a generar contenido con intención.",
    cta: "Abrir módulo",
  },
  {
    number: "03",
    title: "Recursos gratuitos",
    text: "Plantillas, prompts y herramientas.",
    cta: "Ver recursos",
  },
];

const PROGRESS_PERCENT = 20;

export default function ComunidadPage() {
  const [lead, setLead] = useState<LeadDataPartial>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLead(getLeadData());
    setHydrated(true);
  }, []);

  const recommendation = getRecommendation(lead.biggestProblem);
  const firstName = lead.name?.split(" ")[0];

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {hydrated && firstName ? `Hola, ${firstName}` : "Bienvenido"}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Bienvenido a la Comunidad
        </h1>
        <p className="mt-3 text-base text-ink-dim">Tu siguiente paso es comenzar por aquí.</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {startCards.map((card, i) => (
          <Reveal key={card.number} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-xl2 border border-border bg-bg-section p-6">
              <span className="text-xs font-bold text-accent">{card.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">{card.text}</p>
              <button
                type="button"
                className="mt-5 self-start rounded-full border border-accent/30 px-4 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
              >
                {card.cta}
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 rounded-xl2 border border-border bg-bg-section p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-ink">Tu progreso</h2>
          <span className="text-sm font-semibold text-accent">{PROGRESS_PERCENT}% completado</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${PROGRESS_PERCENT}%` }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-dim">
          Recomendado para ti
        </h2>
        <div className="mt-4 rounded-xl2 border border-accent/25 bg-gradient-to-br from-accent/10 to-transparent p-6">
          <h3 className="text-lg font-semibold text-ink">{recommendation.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-dim">{recommendation.description}</p>
          <button
            type="button"
            className="mt-5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-accent-bright"
          >
            Empezar ahora
          </button>
        </div>
      </Reveal>

      <div className="mt-14 text-center">
        <Link href="/" className="text-sm text-ink-dim underline-offset-4 hover:text-ink hover:underline">
          ← Volver a la landing
        </Link>
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { CtaButton } from "@/components/ui/Button";
import { Mockup } from "@/components/ui/Mockup";

const highlights = [
  "Sin dejar tus clientes actuales",
  "Sin crear un curso desde cero",
  "Sin ser \"influencer\"",
  "Sin inventar una nueva profesión",
];

const proofLogos = ["Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5"];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-bg px-5 pb-20 pt-10 sm:pt-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between pb-10 text-sm">
        <span className="font-extrabold tracking-tight text-ink">EXPERT BUSINESS™</span>
        <a href="#faq" className="text-ink-dim underline-offset-4 hover:text-ink hover:underline">
          ¿Preguntas? Ver FAQ
        </a>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-ink-dim">
          Para Social Media Managers, Copywriters, Media Buyers, Diseñadores y Consultores que ya venden su expertise…
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl"
        >
          Convierte tu experiencia en una <span className="text-accent">Oferta Expert™</span> propia en 7 días — sin empezar de cero.
        </motion.h1>

        <p className="mx-auto mt-5 max-w-xl text-lg font-semibold text-accent">
          Deja de vender horas. Empieza a vender criterio, metodología y resultados.
        </p>

        <div className="mx-auto mt-6 max-w-xl rounded-xl border border-border bg-bg-alt px-5 py-4 text-[13.5px] leading-relaxed text-ink-dim">
          ({highlights.join(" · ")})
        </div>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p className="mb-3 text-center text-sm font-semibold text-ink-dim lg:text-left">
            👆 Mockup de presentación — reemplazar por video real 👆
          </p>
          <div className="relative flex aspect-video items-center justify-center rounded-2xl border border-border bg-bg-card shadow-soft">
            <button
              type="button"
              aria-label="Reproducir video (mockup, no funcional)"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-ink shadow-glow transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current"><path d="M8 5v14l11-7z" /></svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="rounded-2xl border border-border bg-bg-alt p-6 shadow-soft sm:p-7"
        >
          <Mockup icon="📦" label="Sistema Expert Business™" className="mb-6" />
          <div className="mb-1 inline-block rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
            Cohorte beta · cupos limitados
          </div>
          <h2 className="mt-3 text-lg font-bold text-ink">Sistema Expert Business™</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-dim">
            <li className="flex gap-2"><span className="text-accent">✓</span>Extrae y empaqueta tu expertise en una oferta propia</li>
            <li className="flex gap-2"><span className="text-accent">✓</span>Construye tu metodología y tu posicionamiento</li>
            <li className="flex gap-2"><span className="text-accent">✓</span>Activa un sistema de adquisición de clientes</li>
          </ul>
          <CtaButton href="#final-cta" subtext="Precio de cohorte beta — por definir" className="mt-6">
            Quiero Construir Mi Expert Business
          </CtaButton>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-dimmer">
          Trabajado con profesionales de marketing en
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-60">
          {proofLogos.map((logo) => (
            <span
              key={logo}
              className="rounded-md border border-border px-4 py-2 text-xs font-semibold tracking-wide text-ink-dimmer"
            >
              {logo}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-ink-dimmer">
          Metodología en construcción — los casos de estudio y resultados de la cohorte beta se publicarán aquí a medida que estén disponibles.
        </p>
      </div>
    </header>
  );
}

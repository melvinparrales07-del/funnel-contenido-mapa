"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CommunityMockup } from "@/components/CommunityMockup";
import { useModal } from "@/context/ModalContext";

const benefits = [
  "Estrategias de contenido",
  "Plantillas y recursos",
  "Entrenamientos prácticos",
  "Comunidad de emprendedores",
];

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:pt-28 lg:pb-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="flex justify-center lg:justify-start">
            <Badge>Comunidad gratuita</Badge>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Deja de consumir contenido y empieza a construir tu negocio digital.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-dim sm:text-lg lg:mx-0">
            Únete gratis a una comunidad para emprendedores que quieren crear contenido con
            dirección, atraer una audiencia y convertirla en oportunidades reales de negocio.
          </p>

          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-2.5 text-sm text-ink-dim sm:text-base lg:mx-0">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center justify-center gap-2.5 lg:justify-start">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-3 lg:items-start">
            <Button onClick={openModal} className="w-full sm:w-auto">
              Entrar Gratis a la Comunidad
            </Button>
            <p className="text-xs text-ink-dim">Gratis · Sin tarjeta · Acceso inmediato</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <CommunityMockup />
        </motion.div>
      </div>
    </section>
  );
}

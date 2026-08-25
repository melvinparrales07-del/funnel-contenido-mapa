"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

const items = [
  {
    icon: "📐",
    title: "Sistema de contenido",
    text: "Aprende a encontrar ideas y convertirlas en contenido estratégico.",
  },
  {
    icon: "📚",
    title: "Biblioteca de recursos",
    text: "Plantillas, prompts, frameworks, guiones y checklists.",
  },
  {
    icon: "🎓",
    title: "Entrenamientos",
    text: "Mini cursos enfocados en implementación.",
  },
  {
    icon: "🤝",
    title: "Comunidad",
    text: "Conecta con otros emprendedores construyendo sus negocios.",
  },
  {
    icon: "🔥",
    title: "Retos de ejecución",
    text: "Retos diseñados para ayudarte a publicar y avanzar.",
  },
  {
    icon: "💰",
    title: "Estrategia de monetización",
    text: "Aprende cómo convertir atención en conversaciones y oportunidades.",
  },
];

export function WhatYouGetSection() {
  const { openModal } = useModal();

  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Todo lo que necesitas para pasar de pensar a ejecutar.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-xl2 border border-border bg-bg-section p-6 transition-colors hover:border-accent/30">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button onClick={openModal}>Quiero Entrar Gratis</Button>
        </Reveal>
      </div>
    </section>
  );
}

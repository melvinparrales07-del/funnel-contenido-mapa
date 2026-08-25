import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Crea tu acceso",
    text: "Déjanos tu nombre y correo.",
  },
  {
    number: "02",
    title: "Cuéntanos sobre tu negocio",
    text: "Responde unas preguntas rápidas para personalizar tu experiencia.",
  },
  {
    number: "03",
    title: "Entra a la comunidad",
    text: "Recibe recursos y empieza a ejecutar.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-bg-section px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Así funciona
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent sm:block" />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative text-center">
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-bg text-sm font-bold text-accent">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-ink-dim">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

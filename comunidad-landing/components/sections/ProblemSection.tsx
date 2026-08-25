import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    title: "Tienes demasiadas ideas",
    text: "Pero ninguna estructura para convertirlas en contenido.",
  },
  {
    title: "Consumes más de lo que ejecutas",
    text: "Aprendes constantemente, pero pospones publicar.",
  },
  {
    title: "Publicas sin dirección",
    text: "Creas contenido, pero no sabes cómo convertirlo en conversaciones o clientes.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-bg-section px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Tener más información no significa avanzar más.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-dim sm:text-lg">
            Muchos emprendedores pasan meses viendo videos, guardando publicaciones y comprando
            cursos, pero siguen sin publicar consistentemente, sin construir audiencia y sin
            convertir su conocimiento en un negocio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="h-full rounded-xl2 border border-border bg-bg p-6 transition-colors hover:border-accent/30">
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

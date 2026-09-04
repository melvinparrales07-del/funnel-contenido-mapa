import { Reveal } from "@/components/ui/Reveal";

const placeholders = [
  { tag: "CASO DE ÉXITO — PLACEHOLDER", role: "Copywriter" },
  { tag: "TESTIMONIO — PLACEHOLDER", role: "Social Media Manager" },
  { tag: "CASO DE ÉXITO — PLACEHOLDER", role: "Consultor independiente" },
  { tag: "TESTIMONIO — PLACEHOLDER", role: "Media Buyer" },
];

export function Testimonials() {
  return (
    <section className="bg-bg px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-extrabold text-ink sm:text-4xl">
            ¿Qué dicen las primeras personas que lo prueben?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-dimmer">
            Todavía no tenemos testimonios reales — se publicarán aquí a medida que la cohorte beta genere resultados.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {placeholders.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="rounded-2xl border border-dashed border-border bg-bg-alt p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-card text-ink-dimmer">👤</div>
                  <div>
                    <p className="text-sm font-semibold text-ink-dimmer">[Nombre por confirmar]</p>
                    <p className="text-xs text-ink-dimmer">{t.role}</p>
                  </div>
                </div>
                <span className="inline-block rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-[10.5px] font-bold uppercase tracking-wide text-accent">
                  {t.tag}
                </span>
                <p className="mt-3 text-sm italic leading-relaxed text-ink-dimmer">
                  Aquí irá un testimonio real de un cliente de la cohorte beta, en sus propias palabras.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

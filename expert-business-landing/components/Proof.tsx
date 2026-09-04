import { Reveal } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/Button";

const principles = [
  "No empiezas de cero.",
  "Aprovechas una habilidad que ya dominas.",
  "Dejas de competir solamente por precio.",
  "Tu conocimiento se convierte en propiedad intelectual.",
  "Puedes vender pensamiento, estrategia y transformación, no solo ejecución.",
  "Tu metodología puede convertirse en un activo escalable.",
];

export function Proof() {
  return (
    <section className="bg-bg px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold text-ink sm:text-4xl">¿Por qué funciona?</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-bg-alt p-4">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">✓</span>
                <p className="text-[15px] font-medium leading-relaxed text-ink">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-sm leading-relaxed text-ink-dimmer">
            No es magia ni un atajo — es la diferencia entre vender tu tiempo y vender tu criterio. Lo segundo es lo único que no se agota cuando dejas de trabajar por hora.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <CtaButton href="#final-cta" subtext="Cohorte beta · cupos limitados">
              Quiero Construir Mi Expert Business
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

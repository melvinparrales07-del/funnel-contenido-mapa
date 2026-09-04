import { Reveal } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/Button";

export function Guarantee() {
  return (
    <section className="bg-bg-card px-5 py-20 sm:py-24">
      <Reveal className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-[220px_1fr] sm:gap-14">
        <div className="mx-auto flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-dashed border-accent/40 text-center">
          <span className="text-3xl">🛡️</span>
          <span className="mt-2 px-4 text-[11px] font-bold uppercase leading-tight tracking-wide text-accent">
            Garantía
            <br />
            por definir
          </span>
        </div>
        <div>
          <h2 className="text-balance text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
            ¿Qué pasa si no ves valor?
          </h2>
          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-dim">
            <p>
              Todavía estamos definiendo la política de garantía exacta para la cohorte beta.
            </p>
            <p>
              Lo que sí es cierto: no vamos a construir esto sin una forma clara de reducir tu riesgo. Esta sección se actualizará con los términos finales antes de abrir cupos — sin condicionarla nunca a resultados de ingresos.
            </p>
          </div>
          <div className="mt-7 max-w-sm">
            <CtaButton href="#final-cta" subtext="Cohorte beta · cupos limitados">
              Quiero Construir Mi Expert Business
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

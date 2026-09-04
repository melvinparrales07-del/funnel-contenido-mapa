import { Reveal } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="final-cta" className="bg-bg-card px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Si llegaste hasta aquí, probablemente ya sabes que tienes conocimiento valioso.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-dim">
            La pregunta no es si sabes suficiente. La pregunta es cuánto tiempo más vas a seguir dejando todo ese conocimiento sin empaquetar.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-5 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg p-6">
            <span className="inline-block rounded-full border border-border px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-dimmer">
              Opción 1
            </span>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-dim">
              Seguir vendiendo solamente horas, tareas, deliverables y ejecución.
            </p>
          </div>
          <div className="rounded-2xl border border-accent/40 bg-bg p-6">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-ink">
              Opción 2
            </span>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Convertir tu conocimiento en metodología, oferta, posicionamiento, propiedad intelectual y negocio.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mx-auto mt-14 max-w-md">
          {/*
            Placeholder CTA — point this at a real checkout, calendar link,
            or lead form once one exists. Currently a no-op anchor.
          */}
          <CtaButton href="#" subtext="Cohorte beta · cupos limitados por capacidad de revisión">
            Construir Mi Expert Business
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}

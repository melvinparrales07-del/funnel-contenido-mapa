import { Reveal } from "@/components/ui/Reveal";
import { Mockup } from "@/components/ui/Mockup";

const steps = [
  {
    n: "Paso 1",
    title: "Extrae tu Expertise",
    text: "Identifica qué sabes hacer, qué resultados sabes producir y qué parte de tu experiencia tiene mayor valor comercial.",
    icon: "🧭",
  },
  {
    n: "Paso 2",
    title: "Construye tu Metodología y tu Oferta Expert™",
    text: "Organiza tu conocimiento en un proceso repetible, y conviértelo en una oferta con avatar, transformación, mecanismo y pricing claros.",
    icon: "🧱",
  },
  {
    n: "Paso 3",
    title: "Posiciónate como experto",
    text: "Construye un mensaje que haga que el mercado deje de verte solamente como alguien que ejecuta tareas.",
    icon: "🎯",
  },
  {
    n: "Paso 4",
    title: "Activa tu sistema de adquisición",
    text: "Contenido → conversación → diagnóstico → oferta → venta — sin depender solo de referidos.",
    icon: "📈",
  },
];

export function Process() {
  return (
    <section className="bg-bg-alt px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              ¿Cómo funciona el Sistema Expert Business™?
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-dim">
              <p>
                Es el sistema más simple para convertir años de experiencia dispersa en un activo propio: una metodología, una oferta y un posicionamiento que puedes explicar en una sola frase.
              </p>
              <p>
                Dejas de competir por precio contra cualquiera que sepa ejecutar la misma tarea que tú. Empiezas a venderle a quien busca exactamente tu forma de pensar.
              </p>
              <p>
                Cada vez más profesionales de marketing y consultores están haciendo esta transición: de ejecutar para otros, a construir algo propio alrededor de lo que saben.
              </p>
              <p>Condensado en un proceso de 4 pasos para que puedas aplicarlo sin importar tu especialidad.</p>
            </div>
          </div>
          <Mockup icon="🗺️" label="Mapa del sistema — mockup" />
        </Reveal>

        <div className="mt-16 space-y-14">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className={`grid items-center gap-8 sm:grid-cols-2 sm:gap-12 ${i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                <Mockup icon={step.icon} label={`${step.title} — mockup`} />
                <div>
                  <span className="inline-block rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-bg">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-ink sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-dim">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

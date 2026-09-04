import { Reveal } from "@/components/ui/Reveal";
import { Mockup } from "@/components/ui/Mockup";

const bonuses = [
  {
    n: "Bono 1",
    title: "Sesión de Extracción de Expertise",
    text: "Una llamada 1:1 para identificar el ángulo más valioso de tu experiencia.",
    icon: "📞",
  },
  {
    n: "Bono 2",
    title: "30 Ideas de Contenido de Autoridad",
    text: "Ganchos listos para posicionarte como experto, no solo como ejecutor.",
    icon: "💡",
  },
  {
    n: "Bono 3",
    title: "Framework \"De Servicio a Expertise\"",
    text: "El puente entre lo que ya vendes y tu futura Oferta Expert™.",
    icon: "🔀",
  },
  {
    n: "Bono 4",
    title: "Guión de Llamada de Diagnóstico",
    text: "Para presentar tu oferta sin sonar a vendedor de servicios.",
    icon: "🎙️",
  },
  {
    n: "Bono 5",
    title: "Checklist de Validación de Oferta",
    text: "Antes de invertir tiempo construyendo, confirma que el mercado la quiere.",
    icon: "✅",
  },
  {
    n: "Bono 6",
    title: "Roadmap de Lanzamiento de 30 Días",
    text: "Qué hacer cada semana para llevar tu oferta al mercado.",
    icon: "🗓️",
  },
];

export function Bonuses() {
  return (
    <section className="bg-bg-alt px-5 pb-20 sm:pb-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-lg font-semibold text-ink">
            No solo eso — además, recibirás los siguientes bonos:
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {bonuses.map((bonus, i) => (
            <Reveal key={bonus.n} delay={(i % 2) * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-bg-card p-6">
                <span className="mb-3 inline-block w-fit rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-bg">
                  {bonus.n}
                </span>
                <h3 className="text-lg font-bold text-ink">{bonus.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">
                  {bonus.text} <span className="font-bold text-accent">Valor: $XXX USD.</span>
                </p>
                <Mockup icon={bonus.icon} label={bonus.title} className="mt-5" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

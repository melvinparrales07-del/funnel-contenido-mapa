import { Reveal } from "@/components/ui/Reveal";
import { Mockup } from "@/components/ui/Mockup";
import { CtaButton } from "@/components/ui/Button";

const coreItems = [
  {
    icon: "📓",
    title: "Workbook de Extracción de Expertise",
    text: "Para identificar qué parte de tu experiencia tiene mayor valor comercial.",
  },
  {
    icon: "🗂️",
    title: "Canvas de Oferta Expert™",
    text: "Avatar, problema, transformación, mecanismo y pricing en una sola página.",
  },
  {
    icon: "🏷️",
    title: "Framework de Posicionamiento",
    text: "Para que el mercado deje de verte solo como ejecutor.",
  },
  {
    icon: "🧩",
    title: "Framework de Metodología Propia",
    text: "Convierte tu forma de trabajar en un proceso repetible y explicable.",
  },
  {
    icon: "✍️",
    title: "Sistema de Contenido de Autoridad",
    text: "Para comunicar tu criterio, no solo tus servicios.",
  },
];

export function OfferStack() {
  return (
    <section id="offer-stack" className="bg-bg-alt px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <Mockup icon="🖥️" label="Sistema Expert Business™ — mockup" tall />
          <div>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              ¿Qué incluye el Sistema Expert Business™?
            </h2>
            <div className="mt-8 space-y-5">
              {coreItems.map((item) => (
                <div key={item.title} className="flex gap-4 border-b border-border pb-5 last:border-none">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-ink">
                      {item.title} <span className="font-bold text-accent">— Valor: $XXX</span>
                    </h3>
                    <p className="mt-1 text-sm text-ink-dim">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ValueStackTotal() {
  return (
    <section className="bg-bg-alt px-5 pb-20 sm:pb-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm text-ink-dim">
          Valor total del sistema + bonos: <span className="font-bold text-ink">$X,XXX USD</span>{" "}
          <span className="text-ink-dimmer">(placeholder — pricing final por definir)</span>
        </p>
        <p className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
          Tu inversión en la cohorte beta: <span className="text-accent">por definir</span>
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <CtaButton href="#final-cta" subtext="Cupos limitados por capacidad real de revisión">
            Quiero Convertir Mi Expertise en una Oferta
          </CtaButton>
        </div>
      </Reveal>
    </section>
  );
}

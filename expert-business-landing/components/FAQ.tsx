import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "¿Esto es para mí si todavía vendo servicios?",
    a: "Sí — de hecho es exactamente para eso. No necesitas dejar de vender servicios para construir tu Expert Business; construyes la oferta y el posicionamiento en paralelo, y decides tú cuándo hacer la transición.",
  },
  {
    q: "¿Tengo que dejar de trabajar con clientes?",
    a: "No. La mayoría empieza construyendo su Oferta Expert™ mientras sigue atendiendo a sus clientes actuales. El objetivo es darte una opción además de vender horas, no quitarte los ingresos que ya tienes.",
  },
  {
    q: "¿Necesito tener una gran audiencia?",
    a: "No. El sistema está diseñado para funcionar con la red que ya tienes — clientes anteriores, contactos, tu propia comunidad profesional — antes de depender de audiencia masiva.",
  },
  {
    q: "¿Qué pasa si no sé cuál debería ser mi oferta?",
    a: "Ese es exactamente el punto de partida del sistema. El Paso 1 (Extrae tu Expertise) existe para identificar qué parte de lo que ya sabes tiene mayor valor comercial, antes de construir nada.",
  },
  {
    q: "¿Necesito ser un experto famoso?",
    a: "No. Necesitas experiencia real y resultados que puedas explicar con claridad. La autoridad se construye con posicionamiento y contenido, no con fama previa.",
  },
  {
    q: "¿Qué pasa si hay mucha competencia?",
    a: "La competencia valida que hay mercado. La diferencia no es competir por ser el único — es dejar de sonar igual que todos los demás que ofrecen lo mismo que tú.",
  },
  {
    q: "¿Esto funciona para copywriters, SMMs o media buyers?",
    a: "Sí. El sistema no depende de tu especialidad — depende de que tengas experiencia real produciendo resultados en algo. Aplica igual para copywriting, gestión de redes, pauta publicitaria o diseño.",
  },
  {
    q: "¿Esto funciona para consultores?",
    a: "Sí — de hecho es uno de los perfiles para los que más directamente aplica. Ya vendes tu criterio; el sistema te ayuda a empaquetarlo como una oferta propia en vez de solo horas de consultoría.",
  },
  {
    q: "¿Necesito crear un curso?",
    a: "No necesariamente. Una Oferta Expert™ puede entregarse como consultoría, acompañamiento, un programa o una metodología con licencia — un curso es solo una de las formas posibles, no un requisito.",
  },
  {
    q: "¿Qué diferencia hay entre tener un servicio y tener un Expert Business?",
    a: "Un servicio depende de tu tiempo y ejecución directa. Un Expert Business empaqueta tu criterio en una metodología y una oferta que puedes explicar, posicionar y, eventualmente, escalar más allá de las horas que tú personalmente trabajas.",
  },
  {
    q: "¿Tengo que aparecer en cámara?",
    a: "No es obligatorio. Ayuda a acelerar la confianza, pero el sistema no depende de eso — puedes empezar con contenido escrito o en audio y sumar cámara después si quieres.",
  },
  {
    q: "¿Qué pasa si tengo varias habilidades?",
    a: "Es común en este perfil. El Paso 1 del sistema te ayuda a identificar cuál de esas habilidades tiene el mayor valor comercial hoy — no tienes que elegir para siempre, solo para empezar.",
  },
  {
    q: "¿Cómo sé cuál de mis conocimientos monetizar?",
    a: "Se responde con el mismo Paso 1: qué resultados has producido antes, para quién, y qué te pagarían por repetir ese resultado de forma más directa. No es una decisión al azar, es un ejercicio guiado.",
  },
  {
    q: "¿Necesito dejar mi empleo?",
    a: "No. Esto está diseñado para construirse en paralelo a lo que ya tienes, sea un empleo, clientes de servicio o ambos. No es un llamado a renunciar a nada.",
  },
  {
    q: "¿Cuánto tiempo toma construir la oferta?",
    a: "Varía según cuánta claridad tengas hoy sobre tu expertise. La estructura del sistema está pensada para avanzarse en días, no meses — el tiempo exacto se está validando con la cohorte beta.",
  },
  {
    q: "¿Qué pasa después de construir mi oferta?",
    a: "Entras a la fase de posicionamiento y adquisición: comunicar tu oferta con un mensaje claro y activar conversaciones reales con prospectos. Construir la oferta es el punto de partida, no el final.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-bg-alt px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Preguntas Frecuentes
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 6) * 0.03}>
              <details className="group rounded-xl border border-border bg-bg-card px-5 py-4 open:pb-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="flex items-start gap-3 text-[15px] font-semibold text-ink">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs text-accent">?</span>
                    {item.q}
                  </span>
                  <svg
                    className="chevron h-5 w-5 flex-shrink-0 text-ink-dimmer transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </summary>
                <p className="mt-3 pl-9 text-[14.5px] leading-relaxed text-ink-dim">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-dim">
          ¿Tienes preguntas o inquietudes?{" "}
          <a href="#final-cta" className="font-semibold text-accent underline-offset-4 hover:underline">
            Escríbenos
          </a>
        </p>
      </div>
    </section>
  );
}

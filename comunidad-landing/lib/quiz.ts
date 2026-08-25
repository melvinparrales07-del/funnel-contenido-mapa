import type { LeadData } from "./types";

export interface QuizQuestion {
  key: keyof Pick<
    LeadData,
    "businessStage" | "businessType" | "monthlyRevenue" | "biggestProblem" | "ninetyDayGoal"
  >;
  question: string;
  helper?: string;
  options: string[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    key: "businessStage",
    question: "¿En qué etapa estás actualmente?",
    options: [
      "Estoy empezando desde cero",
      "Ya tengo una idea de negocio",
      "Ya vendo un servicio",
      "Ya vendo cursos o productos digitales",
      "Ya tengo un negocio y quiero escalarlo",
    ],
  },
  {
    key: "businessType",
    question: "¿Qué describe mejor lo que vendes o quieres vender?",
    options: [
      "Coaching o consultoría",
      "Cursos o productos digitales",
      "Servicios de marketing",
      "Servicios profesionales",
      "Agencia",
      "Ecommerce",
      "Software / SaaS",
      "Negocio local",
      "Todavía no lo tengo definido",
    ],
  },
  {
    key: "monthlyRevenue",
    question: "¿Cuánto genera actualmente tu negocio al mes?",
    helper: "Esta información solo se utiliza para recomendarte contenido relevante.",
    options: [
      "Todavía $0",
      "Menos de $500",
      "$500 – $1,000",
      "$1,000 – $3,000",
      "$3,000 – $5,000",
      "$5,000 – $10,000",
      "$10,000+",
    ],
  },
  {
    key: "biggestProblem",
    question: "¿Cuál es tu mayor obstáculo actualmente?",
    options: [
      "No sé qué contenido crear",
      "Me cuesta publicar consistentemente",
      "Tengo contenido pero casi nadie interactúa",
      "No sé cómo conseguir clientes",
      "Tengo audiencia pero no sé monetizarla",
      "Tengo demasiada información y poca ejecución",
      "No tengo una oferta clara",
      "Otro",
    ],
  },
  {
    key: "ninetyDayGoal",
    question: "¿Qué quieres conseguir en los próximos 90 días?",
    options: [
      "Publicar contenido consistentemente",
      "Conseguir mis primeros clientes",
      "Llegar a mis primeros $1,000 online",
      "Crear o mejorar mi oferta",
      "Construir una audiencia",
      "Generar más leads",
      "Escalar mis ventas",
      "Tener un sistema claro de crecimiento",
    ],
  },
];

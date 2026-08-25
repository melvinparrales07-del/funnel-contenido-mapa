export interface Recommendation {
  title: string;
  description: string;
}

export const RECOMMENDATIONS: Record<string, Recommendation> = {
  "No sé qué contenido crear": {
    title: "100 ideas de contenido para emprendedores",
    description: "Una lista lista para usar cuando no sepas qué publicar hoy.",
  },
  "Me cuesta publicar consistentemente": {
    title: "Sistema de contenido en lote",
    description: "Un método simple para planear y grabar varias piezas de una sola vez.",
  },
  "Tengo contenido pero casi nadie interactúa": {
    title: "Ganchos que detienen el scroll",
    description: "Ajustes de formato y gancho para que tu contenido conecte de verdad.",
  },
  "No sé cómo conseguir clientes": {
    title: "Cómo convertir contenido en conversaciones",
    description: "El puente entre publicar y empezar a vender.",
  },
  "Tengo audiencia pero no sé monetizarla": {
    title: "De seguidores a clientes",
    description: "Cómo activar a la audiencia que ya construiste con tu primera oferta.",
  },
  "Tengo demasiada información y poca ejecución": {
    title: "Reto de ejecución de 5 días",
    description: "Menos consumo, más publicación — paso a paso.",
  },
  "No tengo una oferta clara": {
    title: "Framework para crear tu primera oferta",
    description: "Define qué vendes y a quién, sin complicarlo.",
  },
  Otro: {
    title: "Empieza aquí: guía general de la comunidad",
    description: "Un punto de partida mientras identificamos tu ruta ideal.",
  },
};

export const DEFAULT_RECOMMENDATION: Recommendation = RECOMMENDATIONS.Otro;

export function getRecommendation(biggestProblem?: string): Recommendation {
  if (!biggestProblem) return DEFAULT_RECOMMENDATION;
  return RECOMMENDATIONS[biggestProblem] ?? DEFAULT_RECOMMENDATION;
}

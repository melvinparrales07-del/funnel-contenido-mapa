# Paleta y estilo del funnel

Sistema de diseño aprobado para las páginas de este proyecto (landing/opt-in,
gracias, y cualquier página nueva del funnel). Reutilizar estos tokens en vez
de inventar colores nuevos, salvo que el usuario pida explícitamente otro estilo.

## Color

```css
:root {
  --bg: #0a0908;           /* fondo, negro cálido (no negro puro) */
  --bg-panel: #14100c;     /* tarjetas / paneles */
  --border: #2b241b;       /* bordes sutiles */
  --ink: #f3efe6;          /* texto principal, blanco cálido */
  --ink-dim: #a89f8f;      /* texto secundario */
  --ink-dimmer: #71685a;   /* texto terciario / trust lines */

  --gold: #d7ac57;         /* acento primario: CTAs, links, énfasis */
  --gold-bright: #f2cc7c;  /* dorado claro: hover, glow, texto en cursiva */
  --gold-ink: #17130b;     /* texto sobre fondo dorado */

  --green: #46cf94;        /* SOLO estados de éxito/confirmación */
  --green-bg: #10251c;
  --green-border: #204a34;
}
```

Reglas de uso:
- **Dorado** = acción primaria (botones CTA, links, números/marcas de énfasis). Botones usan degradado `linear-gradient(135deg, var(--gold-bright), var(--gold))` con `box-shadow` tipo glow (`0 10px 30px -10px rgba(215,172,87,0.55)`).
- **Verde** = únicamente confirmación/éxito (badge de "listo", checks de logro). No usar verde como acento decorativo ni mezclarlo con el dorado en el mismo elemento.
- Nunca usar colores fríos (azules, morados) ni el verde lima/neón de la primera versión — se descartó a favor de esta paleta cálida.

## Tipografía

- **Titulares (h1, h2):** `Fraunces` (serif, Google Fonts), peso 600, con `text-wrap: balance`. La palabra clave de énfasis va en `<em>` → itálica, peso 500, color `var(--gold-bright)`.
- **Cuerpo, UI, labels, nav:** `Inter`, pesos 400–900 según el elemento.
- Import conjunto:
  `https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;0,900;1,500;1,600&family=Inter:wght@400;500;600;700;800;900&display=swap`

## Detalles de marca

- Fondo con un resplandor radial sutil detrás del titular del hero (`.hero::before`, `radial-gradient` con el color de acento de esa página al ~18-20% de opacidad, `filter: blur` implícito por el propio gradiente).
- Tarjetas: `background: var(--bg-panel)`, `border: 1px solid var(--border)`, `border-radius: 16px`.
- Kickers/badges: pill *outline* (borde de color + fondo transparente o `--bg-panel`), no relleno sólido.
- Sin testimonios, cifras o "prueba social" inventadas — solo copy honesto sobre el contenido real del recurso.

## Páginas existentes que usan esta paleta

- `entrega-pdf.html` — opt-in del PDF "100 ideas de contenido"
- `gracias.html` — entrega + upsell
- `wordpress-html-widget-1-optin.html` / `wordpress-html-widget-2-gracias.html` — mismas páginas empaquetadas para pegar en un widget HTML de Elementor Pro

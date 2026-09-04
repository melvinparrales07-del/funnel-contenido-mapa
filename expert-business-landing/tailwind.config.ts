import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050505",
          alt: "#111111",
          card: "#181818",
        },
        ink: {
          DEFAULT: "#ffffff",
          dim: "#b8b8b8",
          dimmer: "#7a7a7a",
        },
        accent: {
          DEFAULT: "#22d06b",
          bright: "#3ee888",
          ink: "#052913",
          soft: "rgba(34,208,107,0.12)",
        },
        border: { DEFAULT: "rgba(255,255,255,0.08)" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.25rem" },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.7)",
        glow: "0 0 40px -8px rgba(34,208,107,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Expert Business™ — Convierte tu expertise en una oferta propia",
  description:
    "Para profesionales de marketing y consultores que ya venden su expertise: convierte lo que sabes en una Oferta Expert™ propia, sin empezar de cero.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

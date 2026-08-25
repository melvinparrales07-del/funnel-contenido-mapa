import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/context/ModalContext";
import { LeadModal } from "@/components/modal/LeadModal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Comunidad Gratuita — Construye tu negocio digital",
  description:
    "Únete gratis a una comunidad para emprendedores que quieren crear contenido con dirección, atraer una audiencia y convertirla en oportunidades reales de negocio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <ModalProvider>
          {children}
          <LeadModal />
        </ModalProvider>
      </body>
    </html>
  );
}

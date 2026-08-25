"use client";

import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

export function SiteHeader() {
  const { openModal } = useModal();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <span className="text-sm font-bold uppercase tracking-widest text-ink">
          La Comunidad
        </span>
        <Button variant="secondary" onClick={openModal} className="px-5 py-2.5 text-sm">
          Entrar Gratis
        </Button>
      </div>
    </header>
  );
}

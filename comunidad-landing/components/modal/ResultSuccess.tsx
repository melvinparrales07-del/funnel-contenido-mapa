"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

export function ResultSuccess({ name }: { name: string }) {
  const router = useRouter();
  const { closeModal } = useModal();

  function handleEnter() {
    closeModal();
    router.push("/comunidad");
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="text-center"
    >
      <span className="text-5xl">🎉</span>
      <h2 className="mt-5 text-2xl font-bold text-ink">Tu acceso está listo</h2>
      <p className="mt-3 text-base text-ink-dim">
        Gracias, <span className="font-semibold text-ink">{name || "emprendedor"}</span>. Ya
        puedes entrar a la comunidad.
      </p>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-dim">
        Dentro encontrarás recursos, entrenamientos y herramientas para ayudarte a avanzar según
        la etapa en la que estás.
      </p>

      <Button onClick={handleEnter} className="mt-8 w-full">
        Entrar a la Comunidad →
      </Button>
    </motion.div>
  );
}

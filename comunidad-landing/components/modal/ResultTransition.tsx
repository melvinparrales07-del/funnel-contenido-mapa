"use client";

import { motion } from "framer-motion";

export function ResultTransition() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-14 text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="h-10 w-10 rounded-full border-2 border-accent/25 border-t-accent"
      />
      <p className="text-sm font-medium text-ink-dim">Preparando tu acceso…</p>
    </div>
  );
}

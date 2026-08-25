"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { QuizQuestion } from "@/lib/quiz";
import { ProgressBar } from "./ProgressBar";

interface QuizStepProps {
  question: QuizQuestion;
  questionNumber: number;
  total: number;
  onSelect: (value: string) => void;
  onBack: () => void;
}

const SELECT_DELAY_MS = 250;

export function QuizStep({ question, questionNumber, total, onSelect, onBack }: QuizStepProps) {
  const [pending, setPending] = useState<string | null>(null);

  function handleSelect(option: string) {
    if (pending) return;
    setPending(option);
    window.setTimeout(() => onSelect(option), SELECT_DELAY_MS);
  }

  return (
    <motion.div
      key={question.key}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <ProgressBar current={questionNumber} total={total} />

      <h2 className="mt-6 text-balance text-xl font-bold leading-snug text-ink sm:text-2xl">
        {question.question}
      </h2>
      {question.helper && <p className="mt-2 text-xs text-ink-dim">{question.helper}</p>}

      <div className="mt-6 flex flex-col gap-2.5">
        {question.options.map((option) => {
          const isSelected = pending === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              disabled={pending !== null}
              className={`w-full rounded-xl border px-5 py-3.5 text-left text-sm font-medium transition-all duration-150 sm:text-base
                ${
                  isSelected
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border bg-black/30 text-ink hover:border-accent/40 hover:bg-white/5"
                }
                disabled:cursor-not-allowed`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-6 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
      >
        ← Atrás
      </button>
    </motion.div>
  );
}

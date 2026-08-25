"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { saveLeadData } from "@/lib/leadData";
import { QUIZ_QUESTIONS } from "@/lib/quiz";
import { LeadForm } from "./LeadForm";
import { QuizStep } from "./QuizStep";
import { ResultTransition } from "./ResultTransition";
import { ResultSuccess } from "./ResultSuccess";

type Phase = "lead" | "quiz" | "transition" | "success";

const TRANSITION_DURATION_MS = 1500;

export function LeadModal() {
  const { isOpen, closeModal } = useModal();
  const [phase, setPhase] = useState<Phase>("lead");
  const [quizIndex, setQuizIndex] = useState(0);
  const [name, setName] = useState("");

  // Reset the flow every time the modal is freshly opened.
  useEffect(() => {
    if (isOpen) {
      setPhase("lead");
      setQuizIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (phase !== "transition") return;
    const timer = window.setTimeout(() => setPhase("success"), TRANSITION_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  function handleLeadSubmit(data: { name: string; email: string; marketingConsent: boolean }) {
    saveLeadData(data);
    setName(data.name);
    setPhase("quiz");
    setQuizIndex(0);
  }

  function handleQuizSelect(value: string) {
    const question = QUIZ_QUESTIONS[quizIndex];
    saveLeadData({ [question.key]: value });

    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizIndex((i) => i + 1);
    } else {
      setPhase("transition");
    }
  }

  function handleQuizBack() {
    if (quizIndex === 0) {
      setPhase("lead");
    } else {
      setQuizIndex((i) => i - 1);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-border bg-bg-section p-6 shadow-soft sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-dim transition-colors hover:bg-white/10 hover:text-ink"
            >
              ✕
            </button>

            {phase === "lead" && <LeadForm onSubmit={handleLeadSubmit} />}

            {phase === "quiz" && (
              <QuizStep
                key={quizIndex}
                question={QUIZ_QUESTIONS[quizIndex]}
                questionNumber={quizIndex + 1}
                total={QUIZ_QUESTIONS.length}
                onSelect={handleQuizSelect}
                onBack={handleQuizBack}
              />
            )}

            {phase === "transition" && <ResultTransition />}

            {phase === "success" && <ResultSuccess name={name} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

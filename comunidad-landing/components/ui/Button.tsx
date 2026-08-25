"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-black hover:bg-accent-bright shadow-glow hover:shadow-[0_0_50px_-6px_rgba(62,207,142,0.5)]",
  secondary:
    "bg-white/5 text-ink border border-border hover:bg-white/10",
  ghost: "bg-transparent text-ink-dim hover:text-ink",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold
          transition-all duration-200 ease-out active:scale-[0.98]
          disabled:cursor-not-allowed disabled:opacity-50
          ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

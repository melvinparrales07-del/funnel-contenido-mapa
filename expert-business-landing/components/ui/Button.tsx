import { AnchorHTMLAttributes } from "react";

interface CtaButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  subtext?: string;
}

/**
 * Primary CTA button. Renders as a link that smooth-scrolls to the final
 * conversion section. Swap `href` for a real checkout/booking URL once
 * one exists — this is intentionally not wired to a fake purchase flow.
 */
export function CtaButton({ subtext, className = "", children, ...props }: CtaButtonProps) {
  return (
    <a
      {...props}
      className={`group block w-full rounded-xl bg-gradient-to-b from-accent-bright to-accent px-6 py-4 text-center
        shadow-glow transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      <span className="block text-[15px] font-bold leading-tight text-accent-ink sm:text-base">{children}</span>
      {subtext && <span className="mt-1 block text-[11.5px] font-medium text-accent-ink/80">{subtext}</span>}
    </a>
  );
}

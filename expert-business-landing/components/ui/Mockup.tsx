/**
 * Abstract placeholder visual standing in for real product screenshots.
 * Deliberately stylized (not a fake UI screenshot) so it reads honestly
 * as "artwork to be replaced," per the brief.
 */
export function Mockup({
  icon,
  label,
  className = "",
  tall = false,
}: {
  icon: string;
  label: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg
        ${tall ? "aspect-[4/5]" : "aspect-[16/10]"} ${className}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      <span className="text-4xl" aria-hidden="true">
        {icon}
      </span>
      <span className="mt-3 px-4 text-center text-xs font-semibold uppercase tracking-wide text-ink-dimmer">
        {label}
      </span>
    </div>
  );
}

export function Badge({ children, tone = "accent" }: { children: React.ReactNode; tone?: "accent" | "dark" }) {
  if (tone === "dark") {
    return (
      <span className="inline-block rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-bg">
        {children}
      </span>
    );
  }
  return (
    <span className="inline-block rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-accent">
      {children}
    </span>
  );
}

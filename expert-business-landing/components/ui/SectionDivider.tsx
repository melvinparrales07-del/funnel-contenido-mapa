/**
 * Wavy divider between sections of alternating background shade —
 * mirrors the curved section transitions in the reference layout.
 * `from` is this divider's own background (matches the section above it);
 * `to` is the wave fill (matches the section below it).
 */
export function SectionDivider({ from, to }: { from: string; to: string }) {
  return (
    <div className="h-12 w-full sm:h-16" style={{ background: from }} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-full">
        <path d="M0,40 C240,75 480,5 720,40 C960,75 1200,5 1440,40 L1440,80 L0,80 Z" fill={to} />
      </svg>
    </div>
  );
}

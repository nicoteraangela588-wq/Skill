const PARTNERS = [
  { id: "cimes", name: "Trail des Cimes", initials: "TC" },
  { id: "vertical", name: "Vertical Club", initials: "VC" },
  { id: "traversee", name: "Grande Traversée", initials: "GT" },
  { id: "skimo", name: "Alpine Skimo Series", initials: "AS" },
  { id: "refuge-cup", name: "Refuge Cup", initials: "RC" },
];

function PartnerMark({ initials, name }: { initials: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-slate-400">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        role="img"
        aria-label={name}
        className="shrink-0"
      >
        <title>{name}</title>
        <circle
          cx="15"
          cy="15"
          r="13.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <text
          x="15"
          y="15"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="10"
          fontFamily="var(--font-display)"
          fontWeight="600"
          fill="currentColor"
        >
          {initials}
        </text>
      </svg>
      <span className="hidden font-display text-sm font-medium tracking-tight sm:inline">
        {name}
      </span>
    </span>
  );
}

export function PartnerStrip() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-sm text-slate-400 sm:text-left">
          Sur le terrain avec les organisateurs de courses et de raids en montagne
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:justify-between">
          {PARTNERS.map((partner) => (
            <PartnerMark key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

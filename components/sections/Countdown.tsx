"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-12-05T08:00:00+01:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Secondes" },
];

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft());
    const immediate = window.setTimeout(tick, 0);
    const interval = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(immediate);
      window.clearInterval(interval);
    };
  }, []);

  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <section className="border-t border-line bg-graphite">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-alpine-white md:text-3xl">
          Ouverture de la saison
        </h2>
        <p className="mt-3 text-sm text-alpine-white/60">
          Rendez-vous au Refuge du Grand Col, le 5 décembre.
        </p>

        <div
          className="mt-10 flex items-center justify-center gap-3 sm:gap-5"
          role="timer"
          aria-live="polite"
          aria-label={`${display.days} jours, ${display.hours} heures, ${display.minutes} minutes et ${display.seconds} secondes avant l'ouverture de la saison`}
        >
          {UNITS.map((unit) => (
            <div
              key={unit.key}
              className="flex w-16 flex-col items-center rounded-control border border-alpine-white/15 bg-alpine-white/5 py-4 sm:w-20"
            >
              <span className="font-display text-3xl font-semibold tabular-nums text-alpine-white sm:text-4xl">
                {String(display[unit.key]).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[11px] text-alpine-white/50">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

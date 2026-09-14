"use client";

import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { reviews } from "@/lib/reviews";
import { ReviewCard } from "@/components/ReviewCard";

export function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    scrollerRef.current?.scrollBy({
      left: direction * 340,
      behavior: "smooth",
    });
  }

  return (
    <section id="carnet" className="border-t border-line bg-alpine-mist">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[42ch]">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-4xl">
              Extraits de carnet de sortie
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Ce que nos formules tiennent vraiment, raconté par ceux qui les
              testent sur le terrain.
            </p>
          </div>

          <div className="flex gap-2 self-start sm:self-end">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Sortie précédente"
              className="flex h-10 w-10 items-center justify-center rounded-control border border-line text-graphite transition-colors hover:border-ice hover:text-ice"
            >
              <CaretLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Sortie suivante"
              className="flex h-10 w-10 items-center justify-center rounded-control border border-line text-graphite transition-colors hover:border-ice hover:text-ice"
            >
              <CaretRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar mt-10 flex snap-x gap-5 overflow-x-auto pb-2"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

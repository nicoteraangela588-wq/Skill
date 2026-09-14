import Image from "next/image";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-card border border-line bg-alpine-paper sm:w-[320px]">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={review.image}
          alt={`${review.name} en sortie, ${review.context}`}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-[15px] leading-relaxed text-graphite">
          &ldquo;{review.quote}&rdquo;
        </p>
        <p className="mt-auto text-sm text-slate-400">
          {review.name} - {review.context}
        </p>
      </div>
    </article>
  );
}

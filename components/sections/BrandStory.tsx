import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const COMMITMENTS = [
  "Testé en conditions réelles, pas seulement en laboratoire",
  "Développé avec des guides, skieurs et traileurs",
  "Recharges pensées pour réduire le plastique à usage unique",
];

export function BrandStory() {
  return (
    <section id="presentation" className="border-t border-line bg-alpine-mist">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-line lg:aspect-[3/4]">
            <Image
              src="https://picsum.photos/seed/allterra-story-workshop/1000/1250"
              alt="Un guide de montagne testant les soins Allterra sur le terrain"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="max-w-[22ch] font-display text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-4xl">
              Née sur les sentiers, pas en laboratoire de beauté.
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-slate">
              Allterra est né d&apos;une frustration simple : aucun soin ne
              tenait sous nos gants, notre sueur et notre vent de face. Nous
              avons développé Shield avec des guides, des skieurs et des
              traileurs, pour des formules qui protègent vraiment, sans
              jamais coller.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {COMMITMENTS.map((commitment) => (
                <li
                  key={commitment}
                  className="flex items-start gap-3 text-sm text-graphite"
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-forest"
                  />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

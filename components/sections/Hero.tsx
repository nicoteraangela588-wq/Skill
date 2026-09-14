import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <h1 className="max-w-[16ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-graphite md:text-6xl">
            Le bouclier qui protège votre peau, du vent au sommet.
          </h1>
          <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-slate md:text-lg">
            Des formules non collantes, testées en conditions extrêmes, pensées
            pour le ski, l&apos;escalade et le trail.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#points-forts"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-control bg-ice px-6 py-3.5 text-sm font-medium text-alpine-white transition-colors hover:bg-ice-600 active:scale-[0.98]"
            >
              Découvrir Shield
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="#collections"
              className="inline-flex items-center whitespace-nowrap rounded-control border border-line px-6 py-3.5 text-sm font-medium text-graphite transition-colors hover:border-ice hover:text-ice"
            >
              Voir les collections
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-line lg:aspect-[3/4]">
          <Image
            src="https://picsum.photos/seed/allterra-hero-ascent/1200/1500"
            alt="Skieuse de randonnée en ascension, visage exposé au vent de crête"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

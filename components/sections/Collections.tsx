import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { collections } from "@/lib/products";

const IMAGES: Record<string, string> = {
  depart: "https://picsum.photos/seed/allterra-collection-depart/800/1000",
  ascension: "https://picsum.photos/seed/allterra-collection-ascension/800/1100",
  refuge: "https://picsum.photos/seed/allterra-collection-refuge/800/1000",
};

const OFFSETS: Record<string, string> = {
  depart: "",
  ascension: "lg:mt-10",
  refuge: "",
};

export function Collections() {
  return (
    <section id="collections" className="border-t border-line bg-alpine-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h2 className="max-w-[28ch] font-display text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-4xl">
          Du départ du sentier jusqu&apos;au refuge
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {collections.map((collection) => (
            <div key={collection.id} className={OFFSETS[collection.id]}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-line">
                <Image
                  src={IMAGES[collection.id]}
                  alt={`Collection ${collection.name} - ${collection.terrain}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs text-slate-400">{collection.terrain}</p>
                <h3
                  className="mt-1 font-display text-xl font-semibold"
                  style={{ color: collection.accent }}
                >
                  {collection.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {collection.description}
                </p>
                <a
                  href="#boutique"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-graphite transition-colors hover:text-ice"
                >
                  Explorer {collection.name}
                  <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

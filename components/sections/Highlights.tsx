import Image from "next/image";
import { Backpack, Handshake, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function Highlights() {
  return (
    <section id="points-forts" className="border-t border-line bg-alpine-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h2 className="max-w-[24ch] font-display text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-4xl">
          Nos points forts
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[190px]">
          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-card border border-line sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <Image
              src="https://picsum.photos/seed/allterra-highlight-texture/900/900"
              alt="Application d'un baume Allterra sur les mains en extérieur"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-display text-xl font-semibold text-alpine-white">
                Textures qui ne collent jamais
              </h3>
              <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-alpine-white/85">
                Absorbées en quelques secondes, même sous les gants ou le
                casque.
              </p>
            </div>
          </div>

          <div className="col-span-1 row-span-1 rounded-card border border-line bg-ice-100 p-6 sm:col-span-1 lg:col-span-2">
            <ShieldCheck size={28} weight="duotone" className="text-ice" />
            <h3 className="mt-4 font-display text-lg font-semibold text-graphite">
              Résistance à toute épreuve
            </h3>
            <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-slate">
              Tient face au vent, au froid et à cinq heures de sueur, sans
              repasse.
            </p>
          </div>

          <div className="col-span-1 row-span-1 rounded-card border border-line bg-forest-100 p-6">
            <Backpack size={28} weight="duotone" className="text-forest" />
            <h3 className="mt-4 font-display text-lg font-semibold text-graphite">
              Pensé pour le sac
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Un format qui s&apos;accroche, ne fuit pas et ne s&apos;écrase
              pas.
            </p>
          </div>

          <div className="col-span-1 row-span-1 rounded-card border border-line bg-graphite p-6">
            <Handshake size={28} weight="duotone" className="text-alpine-white" />
            <h3 className="mt-4 font-display text-lg font-semibold text-alpine-white">
              Conçu avec le terrain
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-alpine-white/70">
              Développé avec des guides et des organisateurs de courses en
              montagne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

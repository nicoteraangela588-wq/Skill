import {
  EnvelopeSimple,
  InstagramLogo,
  Mountains,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import { collections } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-line bg-alpine-mist">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-graphite">
              <Mountains size={22} weight="fill" className="text-ice" />
              ALLTERRA
            </div>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-slate">
              Des soins qui tiennent le vent, le froid et l&apos;effort, du
              départ du sentier jusqu&apos;au refuge.
            </p>
            <div className="mt-6 flex items-center gap-3 text-slate">
              <a
                href="#"
                aria-label="Allterra sur Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-control border border-line transition-colors hover:border-ice hover:text-ice"
              >
                <InstagramLogo size={18} />
              </a>
              <a
                href="#"
                aria-label="Allterra sur YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-control border border-line transition-colors hover:border-ice hover:text-ice"
              >
                <YoutubeLogo size={18} />
              </a>
              <a
                href="#"
                aria-label="Allterra sur TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-control border border-line transition-colors hover:border-ice hover:text-ice"
              >
                <TiktokLogo size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-graphite">Collections</h3>
            <ul className="mt-4 space-y-3">
              {collections.map((collection) => (
                <li key={collection.id}>
                  <a
                    href="#collections"
                    className="text-sm text-slate transition-colors hover:text-ice"
                  >
                    {collection.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#boutique"
                  className="text-sm text-slate transition-colors hover:text-ice"
                >
                  Toute la boutique
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-graphite">Assistance</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate transition-colors hover:text-ice"
                >
                  Livraison
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate transition-colors hover:text-ice"
                >
                  Retours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate transition-colors hover:text-ice"
                >
                  Questions fréquentes
                </a>
              </li>
              <li>
                <a
                  href="mailto:bonjour@allterra.fr"
                  className="inline-flex items-center gap-1.5 text-sm text-slate transition-colors hover:text-ice"
                >
                  <EnvelopeSimple size={14} />
                  bonjour@allterra.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-graphite">Allterra</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#presentation"
                  className="text-sm text-slate transition-colors hover:text-ice"
                >
                  Notre histoire
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate transition-colors hover:text-ice"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate transition-colors hover:text-ice"
                >
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Allterra. Fabriqué pour les sentiers, les faces et les refuges.</p>
          <p>Conçu avec des guides et des organisateurs de courses en montagne.</p>
        </div>
      </div>
    </footer>
  );
}

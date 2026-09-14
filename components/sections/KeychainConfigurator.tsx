"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Trash } from "@phosphor-icons/react";
import { collections, getProductsByCollection } from "@/lib/products";
import { useKeychain } from "@/components/KeychainProvider";

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 0 && /[A-Za-zÀ-ÿ]/.test(part[0]))
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export function KeychainConfigurator() {
  const { charms, total, addCharm, removeCharm, clear } = useKeychain();

  return (
    <section
      id="configurateur"
      className="border-t border-line bg-alpine-mist"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-[46ch]">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-4xl">
            Composez votre porte-clé
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Cliquez sur les mini-recharges de chaque collection pour voir votre
            porte-clé se composer, étape par étape.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {collections.map((collection) => (
              <div key={collection.id}>
                <h3 className="font-display text-sm font-semibold text-graphite">
                  {collection.name}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {collection.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {getProductsByCollection(collection.id).map((product) => {
                    const variant = product.variants.rechargeMiniature;
                    return (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() =>
                          addCharm({
                            productId: product.id,
                            name: product.name,
                            accent: product.accent,
                            formatLabel: variant.label,
                            price: variant.price,
                          })
                        }
                        className="group flex w-16 flex-col items-center gap-1.5 text-center"
                      >
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-full text-xs font-semibold text-alpine-white transition-transform group-hover:scale-105 group-active:scale-95"
                          style={{ backgroundColor: product.accent }}
                        >
                          {initials(product.name)}
                        </span>
                        <span className="text-[11px] leading-tight text-slate">
                          {variant.price.toFixed(2).replace(".", ",")} €
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col rounded-card border border-line bg-alpine-paper p-6 md:p-10">
            <div className="mx-auto h-2.5 w-40 rounded-full border-2 border-graphite/70" />

            <div className="mt-8 flex min-h-[140px] flex-1 flex-wrap items-start justify-center gap-x-6 gap-y-8">
              {charms.length === 0 && (
                <p className="mt-6 max-w-[28ch] text-center text-sm text-slate-400">
                  Cliquez sur une recharge pour commencer votre porte-clé.
                </p>
              )}
              <AnimatePresence initial={false}>
                {charms.map((charm) => (
                  <motion.button
                    key={charm.cartId}
                    type="button"
                    layout
                    initial={{ opacity: 0, scale: 0.4, y: -16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    onClick={() => removeCharm(charm.cartId)}
                    aria-label={`Retirer ${charm.name} du porte-clé`}
                    className="group flex flex-col items-center gap-1.5"
                  >
                    <span className="h-4 w-px bg-slate-200" aria-hidden />
                    <span
                      className="relative flex h-12 w-12 items-center justify-center rounded-full text-xs font-semibold text-alpine-white shadow-sm"
                      style={{ backgroundColor: charm.accent }}
                    >
                      {initials(charm.name)}
                      <span className="absolute inset-0 flex items-center justify-center rounded-full bg-graphite/0 text-alpine-white opacity-0 transition-opacity group-hover:bg-graphite/50 group-hover:opacity-100">
                        <Trash size={16} />
                      </span>
                    </span>
                    <span className="max-w-[8ch] text-center text-[11px] leading-tight text-slate-400">
                      {charm.name}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
              <div>
                <p className="text-xs text-slate-400">Total du porte-clé</p>
                <p className="font-display text-xl font-semibold text-graphite">
                  {total.toFixed(2).replace(".", ",")} €
                </p>
              </div>
              <button
                type="button"
                onClick={clear}
                disabled={charms.length === 0}
                className="inline-flex items-center gap-2 rounded-control border border-line px-4 py-2.5 text-sm text-slate transition-colors hover:border-ice hover:text-ice disabled:opacity-40 disabled:hover:border-line disabled:hover:text-slate"
              >
                <Trash size={16} />
                Vider
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import {
  largeProductsGrid,
  miniatureProductsGrid,
  refillsGrid,
} from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const TABS = [
  { id: "normal", label: "Format normal", grid: largeProductsGrid },
  { id: "miniature", label: "Miniature", grid: miniatureProductsGrid },
  { id: "recharge", label: "Recharge", grid: refillsGrid },
] as const;

export function Boutique() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>(
    "normal",
  );
  const active = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

  return (
    <section id="boutique" className="border-t border-line bg-alpine-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[40ch]">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-4xl">
              La boutique
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Le même soin, trois formats : pour la maison, pour le sac, et
              pour la recharge.
            </p>
          </div>

          <div className="flex gap-1 self-start rounded-control border border-line bg-alpine-mist p-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-control px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-alpine-paper text-graphite shadow-sm"
                    : "text-slate hover:text-graphite"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {active.grid.map(({ product, variant }) => (
            <ProductCard
              key={`${product.id}-${variant.format}`}
              product={product}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

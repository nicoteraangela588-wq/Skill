import Image from "next/image";
import type { Product, ProductVariant } from "@/lib/products";
import { AddToKeychainButton } from "./AddToKeychainButton";

interface ProductCardProps {
  product: Product;
  variant: ProductVariant;
}

export function ProductCard({ product, variant }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-line bg-alpine-paper">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
        <span
          className="absolute left-3 top-3 rounded-control px-2 py-1 text-[11px] font-medium text-alpine-white"
          style={{ backgroundColor: product.accent }}
        >
          {variant.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-base font-semibold leading-snug text-graphite">
            {product.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate">
            {product.tagline}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold text-graphite">
              {variant.price.toFixed(2).replace(".", ",")} €
            </span>
            <span className="text-xs text-slate-400">{variant.volume}</span>
          </div>
        </div>
        <AddToKeychainButton
          productId={product.id}
          name={product.name}
          accent={product.accent}
          formatLabel={variant.label}
          price={variant.price}
          className="w-full"
        />
      </div>
    </article>
  );
}

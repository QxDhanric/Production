"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-smoke shadow-soft-lift">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          {product.hoverImage ? (
            <Image
              src={product.hoverImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          {product.badge ? (
            <span className="absolute left-4 top-4 bg-bone px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
              {product.badge}
            </span>
          ) : null}
          <span className="absolute bottom-4 left-4 translate-y-4 text-[10px] font-bold uppercase tracking-[0.24em] text-bone opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Quick View
          </span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">{product.category}</p>
            <h3 className="mt-2 font-sans text-lg font-black uppercase tracking-[0.06em] text-ink">
              {product.name}
            </h3>
            <p className="mt-1 font-body text-sm text-charcoal/70">{product.color}</p>
          </div>
          <p className="font-mono text-sm text-ink">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.article>
  );
}

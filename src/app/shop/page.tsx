import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop QxDhanric premium luxury streetwear, including hoodies, tees, caps, and accessories.",
};

const filters = ["All", "Hoodies", "T-Shirts", "Accessories", "New", "Best Sellers"];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Premium streetwear, cut for confidence."
        body="Explore QxDhanric essentials in washed black, bone, charcoal, and the signature muted lime accent."
        image="/generated/hero-campaign.png"
      />
      <section className="bg-bone px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Catalog"
            title="All Pieces"
            body="A tight luxury assortment built around oversized silhouettes, clean marks, and daily wearability."
          />
          <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={
                  index === 0
                    ? "shrink-0 bg-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-bone"
                    : "shrink-0 border border-ink/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:border-ink"
                }
              >
                {filter}
              </button>
            ))}
          </div>
          <ProductGrid products={products} priorityFirst />
        </div>
      </section>
    </>
  );
}

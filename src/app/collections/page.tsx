import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { collections, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore QxDhanric collections across core uniforms, new drops, neutral luxury streetwear, and accessories.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Streetwear systems with a luxury point of view."
        body="Each collection is narrow by design: clear silhouettes, disciplined color, and an identity that lands without noise."
      />
      <section className="bg-bone px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Explore" title="Collection Rooms" />
          <div className="grid gap-4 md:grid-cols-2">
            {collections.map((collection) => (
              <article id={collection.slug} key={collection.slug} className="grid overflow-hidden rounded-card bg-ink text-bone lg:grid-cols-2">
                <div className="relative min-h-[330px]">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-h-[330px] flex-col justify-end p-7">
                  <p className="eyebrow text-lime">{collection.eyebrow}</p>
                  <h2 className="mt-3 font-sans text-3xl font-black uppercase leading-none tracking-[0.05em]">
                    {collection.name}
                  </h2>
                  <p className="mt-5 font-body text-sm leading-7 text-bone/70">{collection.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#E1DCD2] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Curated" title="Collection Picks" href="/shop" />
          <ProductGrid products={products.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}

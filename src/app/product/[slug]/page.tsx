import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { formatPrice } from "@/lib/utils";
import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | QxDhanric`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.slug !== product.slug && item.collection === product.collection)
    .concat(products.filter((item) => item.slug !== product.slug))
    .slice(0, 4);

  return (
    <>
      <section className="bg-bone px-5 pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-[0.22fr_1fr]">
            <div className="hidden gap-4 sm:grid">
              {[product.image, product.hoverImage ?? "/generated/hangtag-lifestyle.png"].map((image) => (
                <div key={image} className="relative aspect-square overflow-hidden rounded-card bg-smoke">
                  <Image src={image} alt="" fill sizes="140px" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="relative min-h-[560px] overflow-hidden rounded-card bg-smoke shadow-luxury">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="eyebrow text-lime">{product.collection}</p>
            <h1 className="mt-5 font-sans text-5xl font-black uppercase leading-[0.92] tracking-[0.04em] text-ink sm:text-7xl">
              {product.name}
            </h1>
            <p className="mt-5 font-mono text-xl text-ink">{formatPrice(product.price)}</p>
            <p className="mt-7 max-w-xl font-body text-lg leading-8 text-charcoal/78">{product.description}</p>

            <div className="mt-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-ink">Color</p>
              <div className="inline-flex border border-ink/15 px-4 py-3 font-body text-sm text-charcoal">
                {product.color}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-ink">Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="grid h-12 min-w-12 place-items-center border border-ink/15 px-4 text-xs font-bold uppercase tracking-[0.12em] text-ink transition hover:border-ink hover:bg-ink hover:text-bone"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-[1fr_auto]">
              <button className="min-h-14 bg-ink px-8 text-xs font-bold uppercase tracking-[0.22em] text-bone transition hover:bg-charcoal">
                Add To Cart
              </button>
              <ButtonLink href="/checkout" variant="outline">
                Checkout
              </ButtonLink>
            </div>

            <div className="mt-10 border-t border-ink/12 pt-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-ink">Details</h2>
              <ul className="mt-5 grid gap-3 font-body text-sm leading-7 text-charcoal/78">
                {product.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-3 h-px w-6 bg-lime" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E1DCD2] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Complete The Uniform" title="Related Pieces" href="/shop" />
          <ProductGrid products={related} />
        </div>
      </section>
    </>
  );
}

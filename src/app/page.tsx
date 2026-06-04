import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn, ParallaxPanel, Stagger, StaggerItem } from "@/components/Motion";
import { FeatureStrip } from "@/components/FeatureStrip";
import { LifestyleBanner } from "@/components/LifestyleBanner";
import { Newsletter } from "@/components/Newsletter";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { collections, featurePillars, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop QxDhanric premium streetwear. Minimal luxury hoodies, tees, caps, and brand objects designed for confidence and individuality.",
};

const featuredProducts = products.slice(0, 4);
const bestSellers = products.filter((product) => product.isBestSeller).slice(0, 4);
const newArrivals = products.filter((product) => product.isNew).slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-bone px-5 pb-14 pt-32 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_20%,rgba(181,196,74,0.18),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.34),transparent_52%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_0.98fr_0.95fr] lg:items-center">
          <FadeIn className="max-w-xl pt-8 lg:pt-0">
            <p className="eyebrow mb-6 text-lime">QxDhanric Online</p>
            <h1 className="font-sans text-5xl font-black uppercase leading-[0.9] tracking-[0.04em] text-ink sm:text-7xl lg:text-7xl">
              Be You.
              <span className="block text-lime">Own It.</span>
            </h1>
            <div className="mt-6 h-px w-56 bg-lime" />
            <p className="mt-7 max-w-md font-body text-lg leading-8 text-charcoal">
              Premium streetwear designed to inspire confidence and individuality.
            </p>
            <ButtonLink href="/shop" className="mt-9">
              Shop Now
            </ButtonLink>
          </FadeIn>

          <FadeIn delay={0.08} className="relative mx-auto w-full max-w-xl">
            <Image
              src="/generated/qxdhanric-logo-black.png"
              alt="QxDhanric logo"
              width={849}
              height={773}
              priority
              className="mx-auto h-auto w-full object-contain mix-blend-multiply"
            />
          </FadeIn>

          <ParallaxPanel className="relative min-h-[430px] overflow-hidden rounded-card bg-ink shadow-luxury md:min-h-[560px]">
            <Image
              src="/products/qx-signature-hoodie-black.png"
              alt="Featured QxDhanric signature black hoodie"
              fill
              priority
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </ParallaxPanel>
        </div>
      </section>

      <FeatureStrip />

      <section className="bg-bone px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Explore" title="New Collection" href="/shop" />
          <ProductGrid products={featuredProducts} priorityFirst />
        </div>
      </section>

      <section className="overflow-hidden bg-ink px-5 py-20 text-bone md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow mb-5 text-lime">Brand Philosophy</p>
            <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl">
              For those who do not follow the culture, but build their own.
            </h2>
            <p className="mt-7 max-w-xl font-body text-lg leading-8 text-bone/72">
              QxDhanric is a mindset of authenticity, confidence, and progress.
              Every piece is designed to feel clean, intentional, and quietly
              powerful.
            </p>
            <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
              {featurePillars.map((pillar) => (
                <StaggerItem key={pillar.label} className="border-t border-bone/14 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone">{pillar.label}</h3>
                  <p className="mt-3 font-body text-sm leading-6 text-bone/62">{pillar.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>
          <FadeIn delay={0.1} className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[390px] overflow-hidden rounded-card bg-charcoal shadow-luxury sm:col-span-2">
              <Image
                src="/brand/brand-board-02.png"
                alt="QxDhanric brand board and hangtag"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="border border-bone/12 p-6">
              <p className="eyebrow text-lime">Palette</p>
              <p className="mt-4 font-body text-sm leading-7 text-bone/68">
                80% bone and black. 15% charcoal. 5% muted lime for exact moments
                of energy.
              </p>
            </div>
            <div className="border border-bone/12 p-6">
              <p className="eyebrow text-lime">Slogan</p>
              <p className="mt-4 font-sans text-2xl font-black uppercase tracking-[0.08em]">
                Be You. Own It.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-bone px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Most Wanted"
            title="Best Sellers"
            body="Signature essentials with sharp contrast, premium hand feel, and a confident brand presence."
            href="/shop"
          />
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      <section className="bg-[#E1DCD2] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Fresh Drop"
            title="New Arrivals"
            body="New pieces across graphic essentials, bone neutrals, and accessory styling."
            href="/collections"
          />
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      <section className="bg-bone px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Collections"
            title="Shop By Mood"
            body="Four focused directions, one premium identity system."
            href="/collections"
          />
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <StaggerItem key={collection.slug}>
                <Link href={`/collections#${collection.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-ink">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
                      <p className="eyebrow text-lime">{collection.eyebrow}</p>
                      <h3 className="mt-2 font-sans text-2xl font-black uppercase tracking-[0.06em]">
                        {collection.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <LifestyleBanner />
      <Newsletter />
    </>
  );
}

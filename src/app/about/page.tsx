import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { featurePillars } from "@/data/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the QxDhanric brand philosophy: bold, confident, modern, premium, minimal, and creative luxury streetwear.",
};

const guide = [
  ["Brand Name", "QxDhanric"],
  ["Tagline", "Be You. Own It."],
  ["Personality", "Bold, confident, modern, premium, minimal, creative"],
  ["Audience", "18-35, streetwear enthusiasts, entrepreneurs, creators"],
  ["Visual Keywords", "Luxury, streetwear, minimalism, confidence, editorial"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A mindset of authenticity and progress."
        body="QxDhanric exists for people building their own identity in public: creators, founders, and streetwear obsessives who understand restraint."
        image="/brand/brand-board-02.png"
      />
      <section className="bg-bone px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow mb-5 text-lime">The Brand</p>
            <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] text-ink sm:text-6xl">
              Minimal streetwear with a high-end pulse.
            </h2>
            <p className="mt-7 font-body text-lg leading-8 text-charcoal/78">
              The brand language uses bone, black, charcoal, and muted lime with
              disciplined spacing. The goal is premium perception without losing
              the directness that makes streetwear powerful.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative min-h-[520px] overflow-hidden rounded-card bg-ink shadow-luxury">
            <Image
              src="/brand/brand-board-01.png"
              alt="QxDhanric brand identity system"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>
      <section className="bg-ink px-5 py-16 text-bone md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-10 max-w-4xl">
            <p className="eyebrow mb-5 text-lime">Brand Guide</p>
            <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl">
              Be You. Own It.
            </h2>
          </FadeIn>
          <div className="grid gap-px overflow-hidden rounded-card bg-bone/12 md:grid-cols-2">
            {guide.map(([label, value]) => (
              <div key={label} className="bg-ink p-6">
                <p className="eyebrow text-lime">{label}</p>
                <p className="mt-4 font-body text-lg leading-8 text-bone/78">{value}</p>
              </div>
            ))}
          </div>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-4">
            {featurePillars.map((pillar) => (
              <StaggerItem key={pillar.label} className="border border-bone/12 p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone">{pillar.label}</h3>
                <p className="mt-4 font-body text-sm leading-7 text-bone/64">{pillar.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn, ParallaxPanel } from "@/components/Motion";

export function LifestyleBanner() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-24 text-bone md:py-32">
      <div className="absolute inset-0 opacity-30">
        <Image src="/generated/brand-hero-board.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/40" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <FadeIn>
          <p className="eyebrow mb-5 text-lime">Lifestyle</p>
          <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl">
            Built for the ones who make their own room.
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-8 text-bone/74">
            QxDhanric is more than a brand. It is a mindset of authenticity,
            confidence, and progress for people who do not follow the culture,
            but build their own.
          </p>
          <ButtonLink href="/about" variant="dark" className="mt-9">
            Our Philosophy
          </ButtonLink>
        </FadeIn>
        <ParallaxPanel className="relative min-h-[360px] overflow-hidden rounded-card shadow-luxury md:min-h-[520px]">
          <Image
            src="/generated/hangtag-lifestyle.png"
            alt="QxDhanric premium hangtag on black fabric"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </ParallaxPanel>
      </div>
    </section>
  );
}

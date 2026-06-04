import Image from "next/image";
import { FadeIn } from "@/components/Motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
};

export function PageHero({ eyebrow, title, body, image = "/generated/brand-hero-board.png" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink px-5 pb-20 pt-36 text-bone md:pb-28 md:pt-44">
      <div className="absolute inset-0 opacity-25">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/42" />
      <FadeIn className="relative mx-auto max-w-7xl">
        <p className="eyebrow mb-5 text-lime">{eyebrow}</p>
        <h1 className="max-w-5xl font-sans text-5xl font-black uppercase leading-[0.9] tracking-[0.04em] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl font-body text-lg leading-8 text-bone/74">{body}</p>
      </FadeIn>
    </section>
  );
}

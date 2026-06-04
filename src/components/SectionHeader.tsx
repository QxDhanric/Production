import Link from "next/link";
import { FadeIn } from "@/components/Motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  href?: string;
  action?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  href,
  action = "View All",
  align = "left",
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={
        align === "center"
          ? "mx-auto mb-10 max-w-3xl text-center md:mb-14"
          : "mb-9 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between"
      }
    >
      <div className={align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}>
        {eyebrow ? <p className="eyebrow mb-3 text-lime">{eyebrow}</p> : null}
        <h2 className="font-sans text-3xl font-black uppercase leading-[0.95] tracking-[0.05em] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {body ? <p className="mt-5 max-w-2xl font-body text-base leading-7 text-charcoal/80">{body}</p> : null}
      </div>
      {href ? (
        <Link
          href={href}
          className="w-fit border-b border-ink pb-2 text-xs font-bold uppercase tracking-[0.22em] text-ink transition hover:border-lime hover:text-lime"
        >
          {action}
        </Link>
      ) : null}
    </FadeIn>
  );
}

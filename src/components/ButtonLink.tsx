import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "ghost";
};

export function ButtonLink({ children, className, variant = "primary", ...props }: ButtonLinkProps) {
  const variants = {
    primary: "bg-ink text-bone hover:bg-charcoal",
    dark: "bg-bone text-ink hover:bg-lime",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-bone",
    ghost: "text-ink hover:text-lime",
  };

  return (
    <Link
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-none px-7 text-xs font-bold uppercase tracking-[0.22em] transition duration-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

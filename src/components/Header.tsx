"use client";

import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-bone">
      <div className="hidden h-10 items-center justify-center bg-graphite/95 text-[11px] font-bold uppercase tracking-[0.45em] md:flex">
        <span>Be You.</span>
        <span className="mx-3 text-lime">Own It.</span>
      </div>
      <nav className="border-b border-bone/10 bg-ink/86 px-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6">
          <Link href="/" aria-label="QxDhanric home" className="flex items-center">
            <Image
              src="/generated/qxdhanric-logo-light.png"
              alt="QxDhanric"
              width={132}
              height={120}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-xs font-bold uppercase tracking-[0.22em] text-bone/86 transition hover:text-lime",
                    active && "text-bone",
                  )}
                >
                  {link.label}
                  {active ? <span className="absolute -bottom-1 left-0 h-px w-full bg-lime" /> : null}
                </Link>
              );
            })}
          </div>
          <div className="hidden items-center gap-6 lg:flex">
            <Link href="/account" aria-label="Account" className="transition hover:text-lime">
              <User className="h-5 w-5" strokeWidth={1.7} />
            </Link>
            <button aria-label="Search" className="transition hover:text-lime">
              <Search className="h-5 w-5" strokeWidth={1.7} />
            </button>
            <Link href="/cart" aria-label="Cart" className="relative transition hover:text-lime">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.7} />
              <span className="absolute -right-3 -top-3 grid h-5 w-5 place-items-center rounded-full bg-lime text-[10px] font-bold text-ink">
                1
              </span>
            </Link>
          </div>
          <button
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center border border-bone/15 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-ink px-5 py-6 text-bone lg:hidden"
        >
          <div className="flex items-center justify-between">
            <Image
              src="/generated/qxdhanric-logo-light.png"
              alt="QxDhanric"
              width={120}
              height={110}
              className="h-14 w-auto object-contain"
            />
            <button aria-label="Close menu" className="grid h-11 w-11 place-items-center border border-bone/15" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-14 grid gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-4xl font-black uppercase tracking-[0.06em] text-bone"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 flex gap-4">
            <Link href="/account" className="flex-1 border border-bone/15 py-4 text-center text-xs font-bold uppercase tracking-[0.22em]">
              Account
            </Link>
            <Link href="/cart" className="flex-1 bg-bone py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-ink">
              Cart
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

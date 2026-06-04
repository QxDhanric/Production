"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-ink px-5 py-20 text-bone md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="eyebrow mb-4 text-lime">Private List</p>
          <h2 className="max-w-4xl font-sans text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl lg:text-7xl">
            First access to drops, edits, and quiet releases.
          </h2>
        </div>
        <form className="rounded-card border border-bone/15 bg-bone/5 p-3 backdrop-blur">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              placeholder="email@domain.com"
              className="min-h-14 flex-1 bg-transparent px-4 font-body text-base text-bone outline-none placeholder:text-bone/45"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-bone px-6 text-xs font-bold uppercase tracking-[0.22em] text-ink transition hover:bg-lime"
            >
              Join
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign in to your QxDhanric account to track orders and manage your profile.",
};

export default function AccountPage() {
  return (
    <section className="grid min-h-screen bg-bone px-5 pb-20 pt-36 md:pt-44 lg:grid-cols-2">
      <div className="mx-auto flex w-full max-w-xl flex-col justify-center">
        <p className="eyebrow mb-5 text-lime">Account</p>
        <h1 className="font-sans text-5xl font-black uppercase leading-none tracking-[0.04em] text-ink sm:text-7xl">
          Member Access
        </h1>
        <p className="mt-7 font-body text-lg leading-8 text-charcoal/76">
          Track orders, save your sizing, and receive first access to limited
          QxDhanric drops.
        </p>
      </div>
      <div className="mx-auto mt-12 w-full max-w-md rounded-card bg-[#E1DCD2] p-6 md:p-9 lg:mt-0 lg:self-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-ink">Sign In</h2>
        <form className="mt-7 grid gap-5">
          <input className="luxury-input" type="email" placeholder="Email address" />
          <input className="luxury-input" type="password" placeholder="Password" />
          <button className="min-h-14 bg-ink px-8 text-xs font-bold uppercase tracking-[0.22em] text-bone transition hover:bg-charcoal">
            Sign In
          </button>
        </form>
        <ButtonLink href="/shop" variant="outline" className="mt-4 w-full">
          Create Account
        </ButtonLink>
      </div>
    </section>
  );
}

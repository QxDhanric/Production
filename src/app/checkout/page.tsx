import type { Metadata } from "next";
import { LockKeyhole } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout for QxDhanric premium streetwear.",
};

const item = products[0];

export default function CheckoutPage() {
  return (
    <section className="bg-bone px-5 pb-20 pt-36 md:pt-44">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="eyebrow mb-5 text-lime">Checkout</p>
          <h1 className="font-sans text-5xl font-black uppercase leading-none tracking-[0.04em] text-ink sm:text-7xl">
            Secure Details
          </h1>
          <form className="mt-10 grid gap-8 rounded-card bg-[#E1DCD2] p-6 md:p-9">
            <fieldset className="grid gap-5 md:grid-cols-2">
              <legend className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-ink">Contact</legend>
              <input className="luxury-input md:col-span-2" placeholder="Email address" type="email" />
              <input className="luxury-input" placeholder="First name" />
              <input className="luxury-input" placeholder="Last name" />
            </fieldset>
            <fieldset className="grid gap-5 md:grid-cols-2">
              <legend className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-ink">Shipping</legend>
              <input className="luxury-input md:col-span-2" placeholder="Street address" />
              <input className="luxury-input" placeholder="City" />
              <input className="luxury-input" placeholder="Postal code" />
              <input className="luxury-input" placeholder="Country" />
              <input className="luxury-input" placeholder="State" />
            </fieldset>
            <button className="flex min-h-14 items-center justify-center gap-3 bg-ink px-8 text-xs font-bold uppercase tracking-[0.22em] text-bone transition hover:bg-charcoal">
              <LockKeyhole className="h-4 w-4" />
              Pay Now
            </button>
          </form>
        </div>
        <aside className="h-fit rounded-card bg-ink p-7 text-bone lg:sticky lg:top-36">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-lime">Summary</h2>
          <div className="mt-7 flex justify-between gap-6 border-b border-bone/12 pb-6">
            <div>
              <p className="font-sans text-xl font-black uppercase tracking-[0.06em]">{item.name}</p>
              <p className="mt-2 font-body text-sm text-bone/60">Washed Black / L / Qty 1</p>
            </div>
            <p className="font-mono text-sm">{formatPrice(item.price)}</p>
          </div>
          <div className="mt-6 grid gap-4 font-body text-sm text-bone/72">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(item.price)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between border-t border-bone/12 pt-5 text-base font-bold text-bone">
              <span>Total</span>
              <span>{formatPrice(item.price)}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

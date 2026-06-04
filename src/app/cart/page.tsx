import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your QxDhanric cart before checkout.",
};

const cartItem = products[0];

export default function CartPage() {
  return (
    <section className="bg-bone px-5 pb-20 pt-36 md:pt-44">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-5 text-lime">Cart</p>
        <h1 className="font-sans text-5xl font-black uppercase leading-none tracking-[0.04em] text-ink sm:text-7xl">
          Your Uniform
        </h1>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.42fr]">
          <div className="rounded-card border border-ink/12 bg-[#E1DCD2] p-5">
            <div className="grid gap-6 md:grid-cols-[180px_1fr_auto] md:items-center">
              <div className="relative aspect-square overflow-hidden rounded-card bg-smoke">
                <Image src={cartItem.image} alt={cartItem.name} fill sizes="180px" className="object-cover" />
              </div>
              <div>
                <p className="eyebrow text-lime">{cartItem.category}</p>
                <h2 className="mt-3 font-sans text-2xl font-black uppercase tracking-[0.06em] text-ink">
                  {cartItem.name}
                </h2>
                <p className="mt-2 font-body text-sm text-charcoal/72">Washed Black / L / Qty 1</p>
                <Link href="/shop" className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-ink underline underline-offset-8">
                  Continue Shopping
                </Link>
              </div>
              <p className="font-mono text-lg text-ink">{formatPrice(cartItem.price)}</p>
            </div>
          </div>
          <aside className="rounded-card bg-ink p-7 text-bone">
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-lime">Order Summary</h2>
            <div className="mt-8 grid gap-4 font-body text-sm text-bone/72">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(cartItem.price)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between border-t border-bone/12 pt-5 text-base font-bold text-bone">
                <span>Total</span>
                <span>{formatPrice(cartItem.price)}</span>
              </div>
            </div>
            <ButtonLink href="/checkout" variant="dark" className="mt-8 w-full">
              Checkout
            </ButtonLink>
          </aside>
        </div>
      </div>
    </section>
  );
}

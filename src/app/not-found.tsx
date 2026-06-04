import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-bone px-5 text-center">
      <div>
        <p className="eyebrow mb-5 text-lime">404</p>
        <h1 className="font-sans text-5xl font-black uppercase tracking-[0.04em] text-ink">
          Page Not Found
        </h1>
        <Link
          href="/shop"
          className="mt-8 inline-flex min-h-12 items-center justify-center bg-ink px-7 text-xs font-bold uppercase tracking-[0.22em] text-bone"
        >
          Back To Shop
        </Link>
      </div>
    </section>
  );
}

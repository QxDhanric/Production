import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/account", label: "Account" },
];

export function Footer() {
  return (
    <footer className="bg-graphite px-5 py-14 text-bone">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/generated/qxdhanric-logo-light.png"
            alt="QxDhanric"
            width={180}
            height={164}
            className="h-24 w-auto object-contain"
          />
          <p className="mt-6 max-w-sm font-body text-sm leading-7 text-bone/62">
            Modern luxury streetwear designed to inspire confidence and
            individuality. Be You. Own It.
          </p>
        </div>
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-lime">Navigate</h3>
          <div className="grid gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-body text-sm text-bone/72 transition hover:text-lime">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-lime">Studio</h3>
          <p className="font-body text-sm leading-7 text-bone/72">
            QxDhanric Online
            <br />
            EST. 2024
            <br />
            Premium streetwear for creators.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-bone/12 pt-6 text-xs uppercase tracking-[0.2em] text-bone/50 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 QxDhanric</p>
        <p>Bone / Black / Charcoal / Muted Lime</p>
      </div>
    </footer>
  );
}

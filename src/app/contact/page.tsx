import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact QxDhanric for customer care, collaborations, wholesale, and brand inquiries.",
};

const cards = [
  { icon: Mail, label: "Customer Care", value: "care@qxdhanric.online" },
  { icon: MessageCircle, label: "Collaborations", value: "studio@qxdhanric.online" },
  { icon: MapPin, label: "Based Online", value: "Worldwide shipping" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the studio."
        body="For order support, collaborations, wholesale conversations, or creative partnerships, reach out below."
      />
      <section className="bg-bone px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="rounded-card border border-ink/12 p-6">
                  <Icon className="h-7 w-7 text-lime" strokeWidth={1.5} />
                  <h2 className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-ink">{card.label}</h2>
                  <p className="mt-3 font-body text-sm leading-7 text-charcoal/78">{card.value}</p>
                </div>
              );
            })}
          </div>
          <form className="rounded-card bg-[#E1DCD2] p-6 md:p-9">
            <div className="grid gap-5 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-ink">First Name</span>
                <input className="luxury-input" placeholder="Alex" />
              </label>
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-ink">Last Name</span>
                <input className="luxury-input" placeholder="Morgan" />
              </label>
              <label className="md:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-ink">Email</span>
                <input type="email" className="luxury-input" placeholder="email@domain.com" />
              </label>
              <label className="md:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-ink">Message</span>
                <textarea className="luxury-input min-h-40 py-4" placeholder="Tell us what you need." />
              </label>
            </div>
            <button className="mt-6 min-h-14 bg-ink px-8 text-xs font-bold uppercase tracking-[0.22em] text-bone transition hover:bg-charcoal">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

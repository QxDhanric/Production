import { Crown, Globe2, Leaf, Shirt } from "lucide-react";
import { featurePillars } from "@/data/products";

const icons = [Crown, Shirt, Leaf, Globe2];

export function FeatureStrip() {
  return (
    <section className="bg-ink text-bone">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {featurePillars.map((pillar, index) => {
          const Icon = icons[index] ?? Crown;
          return (
            <div key={pillar.label} className="flex gap-5 border-b border-bone/15 pb-6 last:border-0 sm:border-b-0 lg:border-r lg:pr-8 lg:last:border-r-0">
              <Icon className="mt-1 h-8 w-8 shrink-0 text-lime" strokeWidth={1.5} />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em]">{pillar.label}</h3>
                <p className="mt-2 font-body text-sm leading-6 text-bone/72">{pillar.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

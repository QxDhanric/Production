import type { Product } from "@/types/product";
import { Stagger, StaggerItem } from "@/components/Motion";
import { ProductCard } from "@/components/ProductCard";

type ProductGridProps = {
  products: Product[];
  priorityFirst?: boolean;
};

export function ProductGrid({ products, priorityFirst = false }: ProductGridProps) {
  return (
    <Stagger className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <StaggerItem key={product.slug}>
          <ProductCard product={product} priority={priorityFirst && index === 0} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

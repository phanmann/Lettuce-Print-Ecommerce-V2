import { ProductCard } from '@/components/shop/ProductCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { products } from '@/lib/data';
export default async function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const filtered = params.category ? products.filter((product) => product.category === params.category) : products;
  return <main className="section"><div className="container"><SectionHeading kicker="Shop" title="Quick-order print products with cleaner buying paths." copy="Use this section for standard, repeatable products. If a job starts getting unusual, move the customer into the quote flow instead of forcing a complicated configurator." /><div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div></div></main>;
}

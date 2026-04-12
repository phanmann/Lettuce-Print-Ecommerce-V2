import { products } from '@/lib/data';
import { ProductCard } from '@/components/shop/ProductCard';
export function FeaturedProducts() {
  return <section className="section"><div className="container"><div style={{marginBottom:28}}><span className="kicker">Best sellers</span><h2 className="display" style={{fontSize:'clamp(40px,6vw,72px)',margin:'14px 0'}}>Pre-configured products with fast paths to checkout.</h2></div><div className="product-grid">{products.filter((product) => product.featured).slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div></div></section>;
}

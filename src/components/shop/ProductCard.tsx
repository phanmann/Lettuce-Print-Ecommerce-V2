import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatCurrency } from '@/lib/pricing';
export function ProductCard({ product }: { product: Product }) {
  return <article className="card product-card"><Image src={product.image} alt={product.name} width={1200} height={900} /><div className="product-card-body"><div className="meta-row"><span className="badge">{product.turnaround}</span><span className="muted">From {formatCurrency(product.startingPrice)}</span></div><h3 style={{margin:'14px 0 8px',fontSize:28}} className="display">{product.name}</h3><p className="eyebrow">{product.shortDescription}</p><div style={{display:'flex',gap:10,marginTop:18}}><Link href={`/product/${product.slug}`} className="button button-primary">Order now</Link><Link href="/quote" className="button button-outline">Custom quote</Link></div></div></article>;
}

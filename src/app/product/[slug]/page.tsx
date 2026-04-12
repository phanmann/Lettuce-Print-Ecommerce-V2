import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AddToCartForm } from './AddToCartForm';
import { getProductBySlug } from '@/lib/data';
import { formatCurrency } from '@/lib/pricing';
export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <main className="section"><div className="container hero-grid"><div><Image src={product.image} alt={product.name} width={1200} height={900} className="card" /></div><div><span className="kicker">From {formatCurrency(product.startingPrice)}</span><h1 className="display" style={{fontSize:'clamp(46px,8vw,84px)',margin:'16px 0'}}>{product.name}</h1><p className="eyebrow">{product.description}</p><div className="notice" style={{margin:'20px 0'}}><strong>{product.turnaround}</strong><div className="muted">Standard products should feel fast to buy. If your specs get unusual, route into quote instead of forcing every variable here.</div></div><AddToCartForm product={product} /></div></div></main>;
}

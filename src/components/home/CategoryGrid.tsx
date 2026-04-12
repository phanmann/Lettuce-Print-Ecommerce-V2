import Link from 'next/link';
import { categories } from '@/lib/data';
const colorMap = { pink:'var(--pink)', yellow:'var(--yellow)', blue:'var(--blue)', green:'var(--green)', cream:'var(--cream)' } as const;
export function CategoryGrid() {
  return <section className="section"><div className="container"><div style={{marginBottom:24}}><span className="kicker">Shop categories</span><h2 className="display" style={{fontSize:'clamp(40px,6vw,72px)',margin:'14px 0'}}>Built for quick ordering.</h2></div><div className="product-grid">{categories.map((category) => <Link key={category.slug} href={`/shop?category=${category.slug}`} className="card" style={{padding:24,background:colorMap[category.color],minHeight:220}}><div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:172}}><div><span className="badge">Order now</span><h3 className="display" style={{fontSize:34,margin:'18px 0 8px'}}>{category.title}</h3><p className="eyebrow" style={{color:category.color==='green' ? 'rgba(255,255,255,.9)' : 'var(--muted)'}}>{category.subtitle}</p></div><strong>Browse →</strong></div></Link>)}</div></div></section>;
}

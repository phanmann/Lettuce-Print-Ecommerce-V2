import { testimonials } from '@/lib/data';
export function SocialProof() {
  return <section className="section"><div className="container"><span className="kicker">Social proof</span><h2 className="display" style={{fontSize:'clamp(40px,6vw,72px)',margin:'14px 0 24px'}}>Trusted by operators who need speed without looking cheap.</h2><div className="product-grid">{testimonials.map((item) => <div key={item.name} className="card" style={{padding:24}}><p className="eyebrow" style={{minHeight:120}}>{item.quote}</p><div className="hr" /><strong>{item.name}</strong><div className="muted">{item.role}</div></div>)}</div></div></section>;
}

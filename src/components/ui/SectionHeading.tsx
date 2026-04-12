export function SectionHeading({ kicker, title, copy }: { kicker?:string; title:string; copy?:string; }) {
  return <div style={{marginBottom:28}}>{kicker ? <span className="kicker">{kicker}</span> : null}<h2 className="display" style={{fontSize:'clamp(42px,6vw,72px)',margin:'14px 0 10px'}}>{title}</h2>{copy ? <p className="eyebrow" style={{maxWidth:700}}>{copy}</p> : null}</div>;
}

import Link from 'next/link';
import { blogPosts } from '@/lib/data';
export default function BlogPage() { return <main className="section"><div className="container"><h1 className="display" style={{fontSize:'clamp(42px,8vw,82px)'}}>Blog</h1><div className="table-list" style={{marginTop:24}}>{blogPosts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="card" style={{padding:24}}><div className="muted">{post.date}</div><h2 className="display" style={{fontSize:36,margin:'8px 0'}}>{post.title}</h2><p className="eyebrow">{post.excerpt}</p></Link>)}</div></div></main>; }

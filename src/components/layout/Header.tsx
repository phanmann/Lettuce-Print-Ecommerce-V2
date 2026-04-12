'use client';
import Link from 'next/link';
import { useCart } from '@/components/cart/CartContext';
export function Header() {
  const { itemCount } = useCart();
  return <header className="header"><div className="container header-inner"><Link href="/" className="brand">🥬 Lettuce Print</Link><nav className="nav"><Link href="/shop">Shop</Link><Link href="/quote">Custom Quote</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></nav><div style={{display:'flex',gap:10}}><Link href="/quote" className="button button-outline">Get a Quote</Link><Link href="/cart" className="button button-primary">Cart ({itemCount})</Link></div></div></header>;
}

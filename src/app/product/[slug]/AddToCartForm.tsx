'use client';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/types';
import { calculateUnitPrice, formatCurrency } from '@/lib/pricing';
import { useCart } from '@/components/cart/CartContext';
export function AddToCartForm({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(product.options.quantities[0]);
  const [size, setSize] = useState(product.options.sizes[0]);
  const [finish, setFinish] = useState(product.options.finishes[0]);
  const [cartQuantity, setCartQuantity] = useState(1);
  const { addItem } = useCart();
  const router = useRouter();
  const unitPrice = useMemo(() => calculateUnitPrice(product.startingPrice, quantity), [product.startingPrice, quantity]);
  const total = unitPrice * cartQuantity;
  return <div className="card" style={{padding:24}}><div className="form-grid"><label>Quantity tier<select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>{product.options.quantities.map((value) => <option key={value} value={value}>{value}</option>)}</select></label><label>Size<select value={size} onChange={(e) => setSize(e.target.value)}>{product.options.sizes.map((value) => <option key={value} value={value}>{value}</option>)}</select></label><label>Finish<select value={finish} onChange={(e) => setFinish(e.target.value)}>{product.options.finishes.map((value) => <option key={value} value={value}>{value}</option>)}</select></label><label>Number of sets<input type="number" min={1} value={cartQuantity} onChange={(e) => setCartQuantity(Number(e.target.value) || 1)} /></label></div><div className="hr" /><div className="meta-row"><div><div className="muted">Estimated total</div><strong style={{fontSize:28}}>{formatCurrency(total)}</strong></div><div style={{display:'flex',gap:10,flexWrap:'wrap'}}><button className="button button-primary" onClick={() => addItem({ id:`${product.slug}-${quantity}-${size}-${finish}`, productSlug:product.slug, name:product.name, quantity, size, finish, unitPrice, cartQuantity, image:product.image })}>Add to cart</button><button className="button button-outline" onClick={() => router.push('/quote')}>Need something custom?</button></div></div></div>;
}

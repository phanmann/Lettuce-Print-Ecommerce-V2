'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { CartItem } from '@/lib/types';
type CartContextType = { items:CartItem[]; addItem:(item:CartItem)=>void; removeItem:(id:string)=>void; clearCart:()=>void; itemCount:number; subtotal:number; };
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { const saved = window.localStorage.getItem('lp-cart'); if (saved) setItems(JSON.parse(saved)); }, []);
  useEffect(() => { window.localStorage.setItem('lp-cart', JSON.stringify(items)); }, [items]);
  const value = useMemo(() => ({
    items,
    addItem: (item:CartItem) => setItems((current) => { const existing = current.find((entry) => entry.id === item.id); return existing ? current.map((entry) => entry.id === item.id ? { ...entry, cartQuantity: entry.cartQuantity + item.cartQuantity } : entry) : [...current, item]; }),
    removeItem: (id:string) => setItems((current) => current.filter((entry) => entry.id !== id)),
    clearCart: () => setItems([]),
    itemCount: items.reduce((sum, item) => sum + item.cartQuantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.unitPrice * item.cartQuantity, 0)
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart must be used within CartProvider'); return context; }

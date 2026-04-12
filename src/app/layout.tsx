import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/cart/CartContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
export const metadata: Metadata = { title:'Lettuce Print | Brooklyn Print Shop & Design Studio', description:'A modern hybrid e-commerce and quote website for fast-turn printing in NYC.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider><Header />{children}<Footer /></CartProvider></body></html>;
}

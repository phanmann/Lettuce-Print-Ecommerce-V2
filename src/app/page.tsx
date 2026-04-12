import { Hero } from '@/components/home/Hero';
import { SplitPath } from '@/components/home/SplitPath';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { HowItWorks } from '@/components/home/HowItWorks';
import { SocialProof } from '@/components/home/SocialProof';
import { FinalCta } from '@/components/home/FinalCta';
export default function HomePage() { return <main><Hero /><SplitPath /><CategoryGrid /><FeaturedProducts /><HowItWorks /><SocialProof /><FinalCta /></main>; }

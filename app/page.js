import Header from '@/components/Header/header';
import HeroSection from '@/components/Hero/hero';
import FeaturesSection from '@/components/Features/features';
import DealsSection from '@/components/Deals/deals';

import "./page.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className='main-grid'>
        <HeroSection />
        <FeaturesSection />
        <DealsSection />
      </main>
    </>
  );
}

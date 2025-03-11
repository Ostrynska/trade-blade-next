import Header from '@/components/Header/header';
import HeroSection from '@/components/Hero/hero';
import FeaturesSection from '@/components/Features/features';

import "./page.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className='main-grid'>
        <HeroSection />
        <FeaturesSection />
      </main>
    </>
  );
}

import Header from '@/components/Header/header';
import HeroSection from '@/components/Hero/hero';

import "./page.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className='main-grid'>
        <HeroSection/>
      </main>
    </>
  );
}

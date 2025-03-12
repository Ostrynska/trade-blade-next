import Header from '@/components/Header/header';
import HeroSection from '@/components/Hero/hero';
import FeaturesSection from '@/components/Features/features';
import DealsSection from '@/components/Deals/deals';
import AboutSection from '@/components/About/about';
import PricingSection from '@/components/Pricing/pricing';
import FAQSection from '@/components/FAQ/faq';
import CTASection from '@/components/ CTA/cta';
import Footer from '@/components/Footer/footer';
import "./page.css";


export default function Home() {
  return (
    <>
      <Header />
      <main className='main-grid'>
        <HeroSection />
        <FeaturesSection />
        <DealsSection />
        <AboutSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer/>
    </>
  );
}

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

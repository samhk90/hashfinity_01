import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import FeatureSection from '@/components/FeatureSection';
import EmpoweringSection from '@/components/EmpoweringSection';
import VendorSection from '@/components/VendorSection';
import SolutionsSection from '@/components/SolutionsSection';
import FAQSection from '@/components/FAQSection';
import HappyClientsSection from '@/components/HappyClientsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <FeatureSection />
        <EmpoweringSection />
        <FAQSection />
        <HappyClientsSection />
        <VendorSection />
        <SolutionsSection />

      </main>
      <Footer />
    </div>
  );
}

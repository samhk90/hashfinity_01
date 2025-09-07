import { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import FeatureSection from '@/components/FeatureSection';
import EmpoweringSection from '@/components/EmpoweringSection';
import VendorSection from '@/components/VendorSection';
import SolutionsSection from '@/components/SolutionsSection';
import FAQSection from '@/components/FAQSection';
import HappyClientsSection from '@/components/HappyClientsSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Custom Software Development Services | Web & Mobile Apps",
  description: "Professional software development company offering custom web applications, mobile apps, SaaS solutions, and digital transformation services. Expert developers using Flutter, React, Node.js, and modern tech stacks.",
  keywords: [
    "custom software development",
    "web application development",
    "mobile app development",
    "SaaS development",
    "Flutter app development",
    "React development services",
    "Node.js development",
    "API development and integration",
    "e-commerce development",
    "startup technology solutions",
    "business automation software",
    "digital transformation consulting",
    "cloud application development",
    "database design and development",
    "UI/UX design services"
  ],
  openGraph: {
    title: "Custom Software Development Services | Hashfinity",
    description: "Transform your business with custom software solutions. We develop web apps, mobile apps, and SaaS platforms using modern technologies like Flutter, React, and Node.js.",
    url: "https://hashfinity.tech",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Hashfinity - Custom Software Development Services",
      },
    ],
  },
  twitter: {
    title: "Custom Software Development Services | Hashfinity",
    description: "Transform your business with custom software solutions. We develop web apps, mobile apps, and SaaS platforms using modern technologies.",
  },
  alternates: {
    canonical: "https://hashfinity.tech",
  },
};

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

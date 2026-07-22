import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FleetPreview from '@/components/home/FleetPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FleetPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}

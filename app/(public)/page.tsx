import HeroSection from '@/components/home/HeroSection';
import PopularDestinations from '@/components/home/PopularDestinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}

import HomeStatBanner from '@/components/HomeStatBanner';
import Hero from '@/sections/Home/Hero';
import HomeCTA from '@/sections/Home/HomeCTA';
import HowItWorks from '@/sections/Home/HowItWorks';
import Testimonials from '@/sections/Home/Testimonials';
import WhyUs from '@/sections/Home/WhyUs';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <WhyUs />
      <HomeStatBanner />
      <Testimonials />
      <HomeCTA />
    </div>
  );
}

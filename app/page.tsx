import HomeStatBanner from '@/components/HomeStatBanner';
import Hero from '@/sections/Home/Hero';
import HowItWorks from '@/sections/Home/HowItWorks';
import WhyUs from '@/sections/Home/WhyUs';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <WhyUs />
      <HomeStatBanner />
    </div>
  );
}

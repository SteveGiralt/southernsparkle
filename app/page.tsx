import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Pricing />

      <AboutSectionOne />
    </>
  );
}

import Hero from "@/components/homePage/Hero";          // hero banner section
import Features from "@/components/homePage/Features";  // features grid section
import Popular from "@/components/homePage/Popular";    // popular products section

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Popular />
    </>
  );
}
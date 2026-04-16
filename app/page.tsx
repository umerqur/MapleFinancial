import { BRM } from "@/components/BRM";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Testimonial } from "@/components/Testimonial";
import { TrustBar } from "@/components/TrustBar";
import { ValueProps } from "@/components/ValueProps";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50 text-pine-900">
      <Nav />
      <Hero />
      <Marquee />
      <TrustBar />
      <ValueProps />
      <Products />
      <BRM />
      <Process />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}

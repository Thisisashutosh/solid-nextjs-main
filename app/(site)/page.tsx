import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Steps from "@/components/Steps"
import WhyUs from "@/components/WhyUs"
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "My DawaiWala",
  description: "Welcome to My Dawai Wala, one stop to all your medine needs",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      {/* <Steps /> */}
      <Steps/>
      <WhyUs/>
      <Categories />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}

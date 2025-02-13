import About from "@/sections/About";
import Cta from "@/sections/Cta";
import Faq from "@/sections/Faq";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

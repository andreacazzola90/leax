import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Process from "@/components/About/Process";
import ProcessLeax from "@/components/About/ProcessLeax";
import Timeline from "@/components/About/Timeline";
import WhoWeAre from "@/components/About/WhoWeAre";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LEAX | Localizziamo risorse per un futuro di risparmo",
  description: "LEAX è un’azienda di servizi specializzata nella ricerca perdite e nel risanamento di reti private. ",
  // other metadata
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <AboutSectionTwo />
      <WhoWeAre />
      <ProcessLeax />

      <Timeline />
      
      {/* <Features /> */}
      
      {/* <Brands /> */}
      
      <Testimonials />
      <AboutSectionOne />
      
      
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}

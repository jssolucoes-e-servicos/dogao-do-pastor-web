import React from "react";
import { Metadata } from "next";
import NavBar from "@/components/LandPage/common/NavBar";
import FooterSection from "@/components/LandPage/sections/FooterSection";
import HeroSection from "@/components/LandPage/sections/HeroSection";
import NewsletterSection from "@/components/LandPage/sections/NewsletterSection";
import ServiceSection from "@/components/LandPage/sections/ServiceSection";
import TeamSection from "@/components/LandPage/sections/TeamSection";
import TestimonialSection from "@/components/LandPage/sections/TestimonialSection";
import VideoPlayerSection from "@/components/LandPage/sections/VideoPlayerSection";
import HeroVideoSection from "@/components/LandPage/sections/HeroVideo";
export const metadata: Metadata = {
  title:
    " Acelera By Vera Inteligência artificial a favor dos seus negócios! Quer transformar sua incorporadora em uma máquina de vendas",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col w-full bg-[#F1F2F3]">
      <NavBar />
      <div className="pb-4 scroll-margin w-full bg-white px-[10rem]" id="anchor_home">
          <HeroSection />
        </div>
      <div className="mt-24 md:32 lg:mt-8 px-4  md:px-[1rem]  w-[1900px] ">
      
        <div className="py-24 scroll-margin" id="anchor_solution">
          <ServiceSection />
        </div>
        <div className="py-24 scroll-margin" id="anchor_quemsomos">
          <VideoPlayerSection />
        </div>
        <div className="py-2 scroll-margin" id="anchor_quemsomos">
          <HeroVideoSection />
        </div>
        <div className="py-24 ">
          <TestimonialSection />
        </div>
        <div className="py-24 ">
          <TeamSection />
        </div>
        {/* <div className="py-24 scroll-margin" id="anchor_contact">
          <NewsletterSection />
        </div> */}
      
      </div>
      <div className="pt-1 w-full bg-white px-[10rem]">
          <FooterSection />
        </div>
    </main>
  );
}


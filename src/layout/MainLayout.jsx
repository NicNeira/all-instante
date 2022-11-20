import React from "react";
import { Categories } from "../components/content/Categories";
import { PromoSection } from "../components/content/PromoSection";
import { Footer } from "../components/footer/Footer";
import HeroSection2 from "../components/herosection/HeroSection2";
import { Navbar3 } from "../components/Navbar/Navbar3";

export const MainLayout = () => {
  return (
    <div className="isolate bg-white">
      <Navbar3 />
      <HeroSection2 />
      <PromoSection />
      <Categories />
      <Footer />
    </div>
  );
};

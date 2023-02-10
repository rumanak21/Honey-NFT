import React from "react";
import AboutSection from "./AboutSection";
import BrandingSection from "./BrandingSection";
import HerroSection from "./HerroSection";
import HotBidsSection from "./HotBidsSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-tertiary w-4/5">
    <Navbar></Navbar>
    <HerroSection></HerroSection>
    <BrandingSection></BrandingSection>
    <AboutSection></AboutSection>
    <HotBidsSection></HotBidsSection>
    </div>
  );
};

export default Home;

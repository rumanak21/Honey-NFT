import React from "react";
import AboutSection from "./AboutSection";
import BrandingSection from "./BrandingSection";
import HerroSection from "./HerroSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-tertiary">
    <Navbar></Navbar>
    <HerroSection></HerroSection>
    <BrandingSection></BrandingSection>
    <AboutSection></AboutSection>
    </div>
  );
};

export default Home;

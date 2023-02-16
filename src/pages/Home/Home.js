import React from "react";
import AboutSection from "./AboutSection";
import BrandingSection from "./BrandingSection";
import CreatorPage from "./CreatorPage";
import HerroSection from "./HerroSection";
import HotBidsSection from "./HotBidsSection";
import MoreNFT from "./MoreNFT";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-tertiary w-4/5">
    <Navbar></Navbar>
    <HerroSection></HerroSection>
    <BrandingSection></BrandingSection>
    <AboutSection></AboutSection>
    <HotBidsSection></HotBidsSection>
    <MoreNFT></MoreNFT>
    <CreatorPage/>
    </div>
  );
};

export default Home;

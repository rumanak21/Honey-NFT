import React from "react";
import AboutSection from "./AboutSection";
import BrandingSection from "./BrandingSection";
import CollectNFT from "./CollectNFT";
import CreatorPage from "./CreatorPage";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import HerroSection from "./HerroSection";
import HotBidsSection from "./HotBidsSection";
import MoreNFT from "./MoreNFT";
import Navbar from "./Navbar";
import QuestionSection from "./QuestionSection";
import SummarySection from "./SummarySection";


const Home = () => {
  return (
    <div className="bg-tertiary w-4/5" >
    <Navbar></Navbar>
    <HerroSection></HerroSection>
    <BrandingSection></BrandingSection>
    <AboutSection></AboutSection>
    <HotBidsSection></HotBidsSection>
    <MoreNFT></MoreNFT>
    <CreatorPage/>
    <QuestionSection></QuestionSection>
    <CollectNFT/>
    <SummarySection/>
    <Footer/>
    <FooterBottom/>
    </div>
  );
};

export default Home;

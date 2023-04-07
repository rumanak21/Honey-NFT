import React from "react";
import AboutSection from "../About/AboutSection";
import BrandingSection from "../BrandSection/BrandingSection";
import CollectNFT from "../AllNFT/CollectNFT";
import CreatorPage from "../Creators/CreatorPage";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";
import HerroSection from "../HerroSection/HerroSection";
import HotBidsSection from "../BidSection/HotBidsSection";
import MoreNFT from "../AllNFT/MoreNFT";
import Navbar from "../Navbar/Navbar";
import QuestionSection from "../FAQ/QuestionSection";
import SummarySection from "../Sumary/SummarySection";


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

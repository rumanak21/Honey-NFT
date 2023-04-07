import React from "react";
import logo1 from "../../../img/Binance_logo logo.svg";
import logo3 from "../../../img/Ethereum logo.svg";
import logo2 from "../../../img/Logo_of_Blockchain.io logo.svg";

const BrandingSection = () => {
  return (
    <div className="flex flex-col-3 gap-20 mb-20 justify-center content-center">
      <img className="w-48" src={logo1} alt="" />
      <img  className="w-40" src={logo3} alt="" />
      <img className="w-56" src={logo2} alt="" />
      
    </div>
  );
};

export default BrandingSection;

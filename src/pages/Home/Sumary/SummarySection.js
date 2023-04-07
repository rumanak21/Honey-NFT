import { faPalette, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import artWorks from "../../../img/artworks.png";

const SummarySection = () => {
  return (
    <div className="flex items-center justify-center gap-20 m-20">
      <div className=" flex flex-col items-center justify-center  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <p className="text-4xl font-bold ">300k</p>
        <p className="font-bold text-base mb-3 text-[#818388]">Users Active</p>
      </div>
      <div className=" flex flex-col items-center justify-center  ">
        <img className=" w-5 " src={artWorks} alt="Art Works Icon" />

        <p className="text-4xl font-bold ">52,5k</p>
        <p className="font-bold text-base mb-3 text-[#818388]">Artworks</p>
      </div>
      <div className=" flex flex-col items-center justify-center  ">
        <FontAwesomeIcon icon={faPalette} />
        <p className="text-4xl font-bold ">17,5k</p>
        <p className="font-bold text-base mb-3 text-[#818388]">Artists</p>
      </div>
      <div className=" flex flex-col items-center justify-center  ">
        <FontAwesomeIcon  icon={faWallet} />
        <p className="text-4xl font-bold ">35.58</p>
        <p className="font-bold text-base mb-3 text-[#818388]">ETH Spent</p>
      </div>
    </div>
  );
};

export default SummarySection;

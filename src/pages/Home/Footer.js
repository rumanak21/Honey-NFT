import {
  faDiscord,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "./../../img/HoneyNFT.png";

const Footer = () => {
  return (
    <footer className=" footer p-10 gap-20 text-base-content border-t border-b border-[#2D2E36] ">
      <div>
        <span className="">
          <img src={logo} alt="NFT Logo" />
        </span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-base font-bold mb-3 text-[#818388] ">
              Get the lastes Updates
            </span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full h-15 pr-16 text-base mb-3 bg-[#1B1A21] text-[#818388] font-bold "
            />
            <button className="btn btn-secondary bg-gradient-to-r border-none from-primary to-secondary absolute top-0 -right-10 rounded-2xl w-32 h-10 ">
              Email Me!
            </button>
          </div>
        </div>
      </div>
      <div>
        <span className="text-2xl font-bold ">CryptoKet</span>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          How it Works
        </a>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          Contact Us
        </a>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          Explore
        </a>
      </div>
      <div>
        <span className="text-2xl font-bold ">Support</span>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          Help center
        </a>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          Legal
        </a>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          Privacy policy
        </a>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          Terms of service
        </a>
      </div>
      <div>
        <span className="text-2xl font-bold ">Contact</span>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          +8801 777777777
        </a>
        <a className="text-base font-bold mb-3 text-[#818388]  link link-hover">
          nft@nft.com
        </a>
        <div className="flex gap-4 ">
          <FontAwesomeIcon className="text-2xl" icon={faTwitter} />
          <FontAwesomeIcon className="text-2xl" icon={faTelegram} />
          <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
          <FontAwesomeIcon className="text-2xl" icon={faDiscord} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import hero_pic1 from "./../../img/header-img1.png";
import hero_pic2 from "./../../img/header-img2.png";
import hero_pic3 from "./../../img/header-img3.png";
import hero_pic4 from "./../../img/header-img4.png";
import hero_pic5 from "./../../img/header-img5.png";
import hero_pic6 from "./../../img/header-img6.png";
import hero_pic7 from "./../../img/header-img7.png";

const HerroSection = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse w-4/5 ">
        <div className="flex flex-row gap-4 flex-row-reverse justify-center justify-items-center">
          <div>
            <img className="mt-10 rounded bg-[#110C0C]" src={hero_pic1} />
          </div>
          <div>
            <img className="mb-4" src={hero_pic2} />
            <img className="mb-4" src={hero_pic3} />
            <img className="rounded" src={hero_pic4} />
          </div>
          <div>
            <img className="mb-4" src={hero_pic5} />
            <img className="mb-4" src={hero_pic6} />
            <img className="mb-4" src={hero_pic7} />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            <p>Create, Sell & Collect </p> <n />
            <p>Your Own Creative </p> <n />
            <p>
              <span className=" text-secondary ">NFT</span>
            </p>
          </h1>
          <p className="py-6 text-base font-bold text-[#818388]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <button className="btn border-secondary text-secondary hover:text-white  hover:bg-gradient-to-t from-primary to-secondary w-36 h-10 mr-5">
            Explore Now
          </button>
          <button className="btn border-secondary text-secondary hover:text-white hover:bg-gradient-to-t from-primary to-secondary w-36 h-10 ">
            Sell NFT
          </button>
          <div className="mt-6 flex flex-col-3 gap-8">
            <div className="">
              <p className=" text-3xl font-bold  ">70k+</p>
              <p className=" text-base font-bold text-[#818388] ">Artworks</p>
            </div>
            <div className="">
              <p className=" text-3xl font-bold  ">20k+</p>
              <p className=" text-base font-bold text-[#818388]">Artists</p>
            </div>
            <div className="">
              <p className=" text-3xl font-bold  ">99k+</p>
              <p className=" text-base font-bold text-[#818388]">Aucations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerroSection;

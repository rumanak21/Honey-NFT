import React from "react";
import about_pic1 from "../../../img/about-img1.png";
import about_pic2 from "../../../img/about-img2.png";
import about_pic3 from "../../../img/about-img3.png";

const AboutSection = () => {
  return (
    <div className=" mx-auto mb-20 ">
      <div className=" mb-10 ">
        <h2 className=" text-center text-4xl bold">About Us</h2>
        <p className=" mx-auto text-center text-base font-bold text-[#818388] w-6/12 pt-3 ">
          Here you can learn more about NFT. In deleniti eaque aut repudiandae
          et a id nisi.
        </p>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="">
            <img className="mb-8 w-48 ml-12 " src={about_pic3} alt="" />
            <img className="w-28 ml-32" src={about_pic2} alt="" />
          </div>
          <div>
            <img className="ml-6 w-40 " src={about_pic1} alt="" />
          </div>
          <div className=" ml-20 w-6/12">
            <h1 className="text-2xl font-bold">Box Office News!</h1>
            <p className="py-6 text-base font-bold text-[#818388]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat
              ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
            <button className="btn bg-gradient-to-t from-primary to-secondary w-36 h-10 ">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

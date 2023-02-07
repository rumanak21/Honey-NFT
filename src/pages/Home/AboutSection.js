import React from "react";
import about_pic1 from "./../../img/about-img1.png";
import about_pic2 from "./../../img/about-img2.png";
import about_pic3 from "./../../img/about-img3.png";

const AboutSection = () => {
  return (
    <div className=" w-4/5 mx-auto ">
      <div>
        <h2>About</h2>
        <p>Here you can learn more about NFT</p>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img src={about_pic3} alt="" />
            <img src={about_pic2} alt="" />
          </div>
          <div>
            <img src={about_pic1} alt="" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

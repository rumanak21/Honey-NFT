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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
        <img
          src={hero_pic1}
        />
        <img
          src={hero_pic2}
        />
        <img
          src={hero_pic3}
        />
        <img
          src={hero_pic4}
        />
        <img
          src={hero_pic5}
        />
        <img
          src={hero_pic6}
        />
        <img
          src={hero_pic7}
        />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HerroSection;

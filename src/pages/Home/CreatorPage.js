import React from "react";
import hot_pic1 from "./../../img/bids-img1.png";
import pro_pic2 from "./../../img/John Vipe.png";
import pro_pic1 from "./../../img/Mere Lin.png";
import pro_pic3 from "./../../img/Mr Helentin.png";

const CreatorPage = () => {
  return (
    <div className="m-5">
      <h1 className="text-3xl text-center font-bold ">Top Creator</h1>
      <p className=" text-base text-center font-bold text-[#818388] mt-5 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex justify-center gap-2 mt-10">
        <div className="card w-72 bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={hot_pic1} alt="Sassy Bull" />
          </figure>
          <div className="avatar justify-center relative ">
            <div className="w-20 absolute -top-10 rounded-full">
              <img src={pro_pic1} />
            </div>
          </div>
          <div className="m-5">
            <h2 className="mb-2 text-center mt-6">Mere Lin</h2>
            <div>
              <p className="text-base text-center font-bold mb-3 text-[#818388] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="card-actions justify-end m-2">
              <button className="btn btn-block border-secondary text-secondary hover:text-white hover:bg-gradient-to-t from-primary to-secondary">
                +Follow
              </button>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={hot_pic1} alt="Sassy Bull" />
          </figure>
          <div className="avatar justify-center relative ">
            <div className="w-20 absolute -top-10 rounded-full">
              <img src={pro_pic2} />
            </div>
          </div>
          <div className="m-5">
            <h2 className="mb-2 text-center mt-6">John Vipe</h2>
            <div>
              <p className="text-base text-center font-bold mb-3 text-[#818388] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="card-actions justify-end m-2">
              <button className="btn btn-block border-secondary text-secondary hover:text-white hover:bg-gradient-to-t from-primary to-secondary">
                +Follow
              </button>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={hot_pic1} alt="Sassy Bull" />
          </figure>
          <div className="avatar justify-center relative ">
            <div className="w-20 absolute -top-10 rounded-full">
              <img src={pro_pic3} />
            </div>
          </div>
          <div className="m-5">
            <h2 className="mb-2 text-center mt-6">Mr Helentin</h2>
            <div>
              <p className="text-base text-center font-bold mb-3 text-[#818388] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="card-actions justify-end m-2">
              <button className="btn btn-block border-secondary text-secondary hover:text-white hover:bg-gradient-to-t from-primary to-secondary">
                +Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn border-secondary text-secondary w-36 h-10 m-10 hover:text-white hover:bg-gradient-to-t from-primary to-secondary">
          Show me more
        </button>
      </div>
    </div>
  );
};

export default CreatorPage;

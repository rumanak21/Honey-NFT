import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";
import hot_pic1 from "./../../img/bids-img1.png";
import hot_pic2 from "./../../img/bids-img2.png";
import hot_pic3 from "./../../img/bids-img3.png";
import Crown from "./../../img/Crown.png";
import eth from "./../../img/Eth.png";
import pro_pic1 from "./../../img/pro-pic1.png";
import pro_pic2 from "./../../img/pro-pic2.png";
import pro_pic3 from "./../../img/pro-pic3.png";

const HotBidsSection = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold ">Hot Bids</h1>
      <p className=" text-base font-bold text-[#818388] mt-5 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-wrap gap-8">
        <div className="card w-80 bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={hot_pic1} alt="Sassy Bull" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 ">
              <div className="w-6/12 mt-3 ">
                <h2 className="mb-3">Sassy Bull</h2>
                <div>
                  <div className="flex mb-3 items-center">
                    <div className="w-20 rounded-xl">
                      <img src={pro_pic1} alt="user pic" />
                    </div>
                    <p className=" text-center text-base pl-1">@jhonartist</p>
                    <CheckBadgeIcon className=" text-center pl-1 w-8 text-center text-blue-500 "></CheckBadgeIcon>
                  </div>

                  <p className="text-base font-bold text-[#818388] ">
                    Reserve price
                  </p>
                  <div className="flex text-sm font-bold text-[#818388] items-center ">
                    <img className="" src={eth} alt="" />
                    <p className="ml-0.5">ETH 9.31</p>
                    <p className="ml-0.5">($29,8846)</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pl-3 text-center ">
                <p className="text-base font-bold text-[#818388]">
                  Auction Ends in
                </p>
                <div className="flex flex-col-3 p-2">
                  <div>
                    <p className="font-bold">09</p>
                    <p className="text-base font-bold text-[#818388] pr-2">
                      Hours
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mr-2 ">15</p>
                    <p className="text-base font-bold text-[#818388] pr-2">
                      Mins
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">23</p>
                    <p className="text-base font-bold text-[#818388]">Secs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end m-2">
              <div className="card-actions justify-end m-2">
                <button className="btn bg-gradient-to-t from-primary to-secondary w-34 h-10 ">
                  <div className="flex items-center">
                    <img src={Crown} alt="" />{" "}
                    <span className="ml-2">Place Bid</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={hot_pic2} alt="White Art" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 ">
              <div className="w-6/12 mt-3 ">
                <h2 className="mb-3">White Art</h2>
                <div>
                  <div className="flex mb-3 items-center">
                    <div className="w-20 rounded-xl">
                      <img src={pro_pic2} alt="user pic" />
                    </div>
                    <p className=" text-center text-base pl-1">@jduuensc</p>
                    <CheckBadgeIcon className=" text-center pl-1 w-8 text-center text-blue-500 "></CheckBadgeIcon>
                  </div>
                  <p className="text-base font-bold text-[#818388] ">
                    Reserve price
                  </p>
                  <div className="flex text-sm font-bold text-[#818388] items-center ">
                    <img className="" src={eth} alt="" />
                    <p className="ml-0.5">ETH 9.73</p>
                    <p className="ml-0.5">($75,8463)</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pl-3 text-center ">
                <p className="text-base font-bold text-[#818388]">
                  Auction Ends in
                </p>
                <div className="flex flex-col-3 p-2">
                  <div>
                    <p className="font-bold">09</p>
                    <p className="text-base font-bold text-[#818388] pr-2">
                      Hours
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mr-2 ">15</p>
                    <p className="text-base font-bold text-[#818388] pr-2">
                      Mins
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">23</p>
                    <p className="text-base font-bold text-[#818388]">Secs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end m-2">
              <div className="card-actions justify-end m-2">
                <button className="btn bg-gradient-to-t from-primary to-secondary w-34 h-10 ">
                  <div className="flex items-center">
                    <img src={Crown} alt="" />{" "}
                    <span className="ml-2">Place Bid</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={hot_pic3} alt="Colour art" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 ">
              <div className="w-6/12 mt-3 ">
                <h2 className="mb-3">Colour art</h2>
                <div>
                  <div className="flex mb-3 items-center">
                    <div className="w-20 rounded-xl">
                      <img src={pro_pic3} alt="user pic" />
                    </div>
                    <p className=" text-center text-base pl-1">@hasyrgsh</p>
                    <CheckBadgeIcon className=" text-center pl-1 w-8 text-center text-blue-500 "></CheckBadgeIcon>
                  </div>

                  <p className="text-base font-bold text-[#818388] ">
                    Reserve price
                  </p>
                  <div className="flex text-sm font-bold text-[#818388] items-center ">
                    <img className="" src={eth} alt="" />
                    <p className="ml-0.5">ETH 5.81</p>
                    <p className="ml-0.5">($21,6743)</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pl-3 text-center ">
                <p className="text-base font-bold text-[#818388]">
                  Auction Ends in
                </p>
                <div className="flex flex-col-3 p-2">
                  <div>
                    <p className="font-bold">09</p>
                    <p className="text-base font-bold text-[#818388] pr-2">
                      Hours
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mr-2 ">15</p>
                    <p className="text-base font-bold text-[#818388] pr-2">
                      Mins
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">23</p>
                    <p className="text-base font-bold text-[#818388]">Secs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end m-2">
              <button className="btn bg-gradient-to-t from-primary to-secondary w-34 h-10 ">
                <div className="flex items-center">
                  <img src={Crown} alt="" />{" "}
                  <span className="ml-2">Place Bid</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn border-secondary text-secondary w-36 h-10 m-10 hover:text-white hover:bg-gradient-to-t from-primary to-secondary">
          Veiw All
        </button>
      </div>
    </div>
  );
};

export default HotBidsSection;

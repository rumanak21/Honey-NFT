import React from "react";
import Crown from "./../../img/Crown.png";
import eth from "./../../img/Eth.png";
import moreNFT_pic1 from "./../../img/moreNFTs-1.png";
import moreNFT_pic2 from "./../../img/moreNFTs-2.png";
import moreNFT_pic3 from "./../../img/moreNFTs-3.png";
import moreNFT_pic4 from "./../../img/moreNFTs-4.png";
import moreNFT_pic5 from "./../../img/moreNFTs-5.png";
import moreNFT_pic6 from "./../../img/moreNFTs-6.png";
import moreNFT_pic7 from "./../../img/moreNFTs-7.png";
import moreNFT_pic8 from "./../../img/moreNFTs-8.png";

const MoreNFT = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center ">
        Discover More <span>NFT</span>s
      </h1>
      <div className=" flex justify-center gap-5 mt-10 mb-10 relative ">
        <button className="btn btn-active bg-gradient-to-t from-primary to-secondary">
          All Categories
        </button>
        <button className="btn bg-white bg-opacity-10 hover:bg-gradient-to-t from-primary to-secondary">
          Art
        </button>
        <button className="btn bg-white bg-opacity-10 hover:bg-gradient-to-t from-primary to-secondary">
          Celebrities
        </button>
        <button className="btn bg-white bg-opacity-10 hover:bg-gradient-to-t from-primary to-secondary">
          Gaming
        </button>
        <button className="btn bg-white bg-opacity-10 hover:bg-gradient-to-t from-primary to-secondary">
          Soprt
        </button>
        <button className="btn bg-white bg-opacity-10 hover:bg-gradient-to-t from-primary to-secondary">
          Music
        </button>
        <button className="btn bg-white bg-opacity-10 hover:bg-gradient-to-t from-primary to-secondary">
          Crypto
        </button>
        <button className="btn bg-gradient-to-t from-primary to-secondary absolute bottom-0 right-0">
          All Filters
        </button>
      </div>
      <div className=" grid grid-cols-4 gap-5 ">
        <div className="card  bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={moreNFT_pic1} alt="Red Line" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
              <div className="flex mb-3 items-center mr-2">
                <p className=" text-center text-base">Red Line</p>
              </div>
              <div className="card-actions m-2">
                <div className="card-actions m-2">
                  <button className="btn bg-gradient-to-t from-primary to-secondary w-25 text-xs	">
                    <div className="flex items-center">
                      <img className="w-4" src={Crown} alt="" />
                      <span className="pl-1">Place Bid</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-base font-bold text-[#818388] text-center ">Reserve price</p>
            <div className="flex text-sm font-bold text-[#818388] items-center justify-center ">
              <img className="" src={eth} alt="" />
              <p className="ml-0.5">ETH 9.31</p>
              <p className="ml-0.5">($29,8846)</p>
            </div>
          </div>
        </div>
        <div className="card  bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={moreNFT_pic2} alt="Blue Fire" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
              <div className="flex mb-3 items-center mr-2">
                <p className=" text-center text-base">Blue Fire</p>
              </div>
              <div className="card-actions m-2">
                <div className="card-actions m-2">
                  <button className="btn bg-gradient-to-t from-primary to-secondary w-25 text-xs	">
                    <div className="flex items-center">
                      <img className="w-4" src={Crown} alt="" />
                      <span className="pl-1">Place Bid</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-base font-bold text-[#818388] text-center ">Reserve price</p>
            <div className="flex text-sm font-bold text-[#818388] items-center justify-center ">
              <img className="" src={eth} alt="" />
              <p className="ml-0.5">ETH 9.31</p>
              <p className="ml-0.5">($29,8846)</p>
            </div>
          </div>
        </div>
        <div className="card  bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={moreNFT_pic3} alt="Green Glass" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
              <div className="flex mb-3 items-center mr-2">
                <p className=" text-center text-base">Green Glass</p>
              </div>
              <div className="card-actions m-2">
                <div className="card-actions m-2">
                  <button className="btn bg-gradient-to-t from-primary to-secondary w-25 text-xs	">
                    <div className="flex items-center">
                      <img className="w-4" src={Crown} alt="" />
                      <span className="pl-1">Place Bid</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-base font-bold text-[#818388] text-center ">Reserve price</p>
            <div className="flex text-sm font-bold text-[#818388] items-center justify-center ">
              <img className="" src={eth} alt="" />
              <p className="ml-0.5">ETH 9.31</p>
              <p className="ml-0.5">($29,8846)</p>
            </div>
          </div>
        </div>
        <div className="card  bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={moreNFT_pic4} alt="Hi Colour" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
              <div className="flex mb-3 items-center mr-2">
                <p className=" text-center text-base">Hi Colour</p>
              </div>
              <div className="card-actions m-2">
                <div className="card-actions m-2">
                  <button className="btn bg-gradient-to-t from-primary to-secondary w-25 text-xs	">
                    <div className="flex items-center">
                      <img className="w-4" src={Crown} alt="" />
                      <span className="pl-1">Place Bid</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-base font-bold text-[#818388] text-center ">Reserve price</p>
            <div className="flex text-sm font-bold text-[#818388] items-center justify-center ">
              <img className="" src={eth} alt="" />
              <p className="ml-0.5">ETH 9.31</p>
              <p className="ml-0.5">($29,8846)</p>
            </div>
          </div>
        </div>
        <div className="card  bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={moreNFT_pic5} alt="Super Red" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
              <div className="flex mb-3 items-center mr-2">
                <p className=" text-center text-base">Super Red</p>
              </div>
              <div className="card-actions m-2">
                <div className="card-actions m-2">
                  <button className="btn bg-gradient-to-t from-primary to-secondary w-25 text-xs	">
                    <div className="flex items-center">
                      <img className="w-4" src={Crown} alt="" />
                      <span className="pl-1">Place Bid</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-base font-bold text-[#818388] text-center ">Reserve price</p>
            <div className="flex text-sm font-bold text-[#818388] items-center justify-center ">
              <img className="" src={eth} alt="" />
              <p className="ml-0.5">ETH 9.31</p>
              <p className="ml-0.5">($29,8846)</p>
            </div>
          </div>
        </div>
        <div className="card  bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={moreNFT_pic6} alt="Glassy White" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
              <div className="flex mb-3 items-center mr-2">
                <p className=" text-center text-base">Glassy White</p>
              </div>
              <div className="card-actions m-2">
                <div className="card-actions m-2">
                  <button className="btn bg-gradient-to-t from-primary to-secondary w-25 text-xs	">
                    <div className="flex items-center">
                      <img className="w-4" src={Crown} alt="" />
                      <span className="pl-1">Place Bid</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-base font-bold text-[#818388] text-center ">Reserve price</p>
            <div className="flex text-sm font-bold text-[#818388] items-center justify-center ">
              <img className="" src={eth} alt="" />
              <p className="ml-0.5">ETH 9.31</p>
              <p className="ml-0.5">($29,8846)</p>
            </div>
          </div>
        </div>
        <div className="card  bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={moreNFT_pic7} alt="Pink Banana" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
              <div className="flex mb-3 items-center mr-2">
                <p className=" text-center text-base">Pink Banana</p>
              </div>
              <div className="card-actions m-2">
                <div className="card-actions m-2">
                  <button className="btn bg-gradient-to-t from-primary to-secondary w-25 text-xs	">
                    <div className="flex items-center">
                      <img className="w-4" src={Crown} alt="" />
                      <span className="pl-1">Place Bid</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-base font-bold text-[#818388] text-center ">Reserve price</p>
            <div className="flex text-sm font-bold text-[#818388] items-center justify-center ">
              <img className="" src={eth} alt="" />
              <p className="ml-0.5">ETH 9.31</p>
              <p className="ml-0.5">($29,8846)</p>
            </div>
          </div>
        </div>
        <div className="card  bg-white bg-opacity-10 shadow-xl">
          <figure>
            <img src={moreNFT_pic8} alt="Colour Play" />
          </figure>
          <div>
            <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
              <div className="flex mb-3 items-center mr-2">
                <p className=" text-center text-base">Colour Play</p>
              </div>
              <div className="card-actions m-2">
                <div className="card-actions m-2">
                  <button className="btn bg-gradient-to-t from-primary to-secondary w-25 text-xs	">
                    <div className="flex items-center">
                      <img className="w-4" src={Crown} alt="" />
                      <span className="pl-1">Place Bid</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-base font-bold text-[#818388] text-center ">Reserve price</p>
            <div className="flex text-sm font-bold text-[#818388] items-center justify-center ">
              <img className="" src={eth} alt="" />
              <p className="ml-0.5">ETH 9.31</p>
              <p className="ml-0.5">($29,8846)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreNFT;

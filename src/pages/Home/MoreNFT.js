import React, { useEffect, useState } from "react";
import Crown from "./../../img/Crown.png";
import eth from "./../../img/Eth.png";

const MoreNFT = () => {
  const [allData, setallData] = useState([]);
  useEffect(() => {
    fetch("morenft.json")
      .then((res) => res.json())
      .then((data) => setallData(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center ">
        Discover More <span className=" text-secondary ">NFT</span>s
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
        {allData.map((data) => (
          <div key={data.id} className="card  bg-white bg-opacity-10 shadow-xl">
            <figure>
              <img src={data.picture} alt="Red Line" />
            </figure>
            <div>
              <div className=" flex flex-col-2 pl-3 pr-3 justify-center ">
                <div className="flex mb-3 items-center ">
                  <p className=" text-center text-sm">{data.name}</p>
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
              <p className="text-base font-bold text-[#818388] text-center ">
                Reserve price
              </p>
              <div className="flex text-sm font-bold text-[#818388] items-center justify-center pb-5 ">
                <img src={eth} alt="" />
                <p className="ml-0.5">ETH {data.priceeth}</p>
                <p className="ml-0.5">({data.priceusd})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn border-secondary text-secondary w-36 h-10 m-10 hover:text-white hover:bg-gradient-to-t from-primary to-secondary">
          More NFTs
        </button>
      </div>
    </div>
  );
};

export default MoreNFT;

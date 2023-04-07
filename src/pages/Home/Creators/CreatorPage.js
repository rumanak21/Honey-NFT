import React, { useEffect, useState } from "react";

const CreatorPage = () => {
  const [allData, setallData] = useState([]);
  useEffect(() => {
    fetch("creatordata.json")
      .then((res) => res.json())
      .then((data) => setallData(data));
  }, []);
  return (
    <div className="m-5">
      <h1 className="text-3xl text-center font-bold ">Top Creator</h1>
      <p className=" text-base text-center font-bold text-[#818388] mt-5 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex justify-center gap-2 mt-10">
        {allData.map((data) => (
          <div key={data.id} className="card w-72 bg-white bg-opacity-10 shadow-xl">
            <figure>
              <img src={data.picture} alt="Blue Yellow" />
            </figure>
            <div className="avatar justify-center relative ">
              <div className="w-20 absolute -top-10 rounded-full">
                <img src={data.propic1} alt="Female" />
              </div>
            </div>
            <div className="m-5">
              <h2 className="mb-2 text-center mt-6">{data.name}</h2>
              <div>
                <p className="text-base text-center font-bold mb-3 text-[#818388] ">
                  {data.text}
                </p>
              </div>

              <div className="card-actions justify-end m-2">
                <button className="btn btn-block border-secondary text-secondary hover:text-white hover:bg-gradient-to-t from-primary to-secondary">
                  +Follow
                </button>
              </div>
            </div>
          </div>
        ))}
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

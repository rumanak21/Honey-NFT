import React from "react";

const HotBidsSection = () => {
  return (
    <div className="bg-gray-200 p-10">
      <h1 className="text-5xl font-bold text-center">Heading</h1>
      <p className="text-xl font-medium text-center mt-5">Subheading</p>
      <div className="flex flex-wrap mt-10">
        <div className="w-full md:w-1/3 p-5">
          <img src="https://via.placeholder.com/500x500" alt="Image 1" />
          <div className="mt-5">
            <p className="text-lg font-medium">User Name</p>
            <img
              src="https://via.placeholder.com/50x50"
              alt="User Pic"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <p className="text-sm mt-5">Text 1</p>
        </div>
        <div className="w-full md:w-1/3 p-5">
          <img src="https://via.placeholder.com/500x500" alt="Image 2" />
          <div className="mt-5">
            <p className="text-lg font-medium">User Name</p>
            <img
              src="https://via.placeholder.com/50x50"
              alt="User Pic"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <p className="text-sm mt-5">Text 2</p>
        </div>
        <div className="w-full md:w-1/3 p-5">
          <img src="https://via.placeholder.com/500x500" alt="Image 3" />
          <div className="mt-5">
            <p className="text-lg font-medium">User Name</p>
            <img
              src="https://via.placeholder.com/50x50"
              alt="User Pic"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <p className="text-sm mt-5">Text 3</p>
        </div>
      </div>
    </div>
  );
};

export default HotBidsSection;

import React from "react";

const Home = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" text-[#030812] menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 "
          >
            <li>
              <a>Collections</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
              Feature
              </a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a>Collections</a>
          </li>
          <li tabIndex={0}>
            <a>
              Feature
            </a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-t from-primary to-secondary ">Select Wallet</a>
      </div>
    </div>
  );
};

export default Home;

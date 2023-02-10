import React from 'react';
import img from "./../../img/HoneyNFT.png";

const Navbar = () => {
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
              <a className="justify-between">Feature</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img width={120} src={img} alt="" />
        </a>
      </div>

      <div className="form-control w-4/5 max-w-xs ml-20">
        
        <input
        
          type="search"
          placeholder=" &#128269; Search Items and Collections"
          className="input input-bordered w-full h-9 max-w-xs text-black "
        />
      </div>

      <div className=" navbar-center hidden lg:flex ml-24 ">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a>Collections</a>
          </li>
          <li tabIndex={0}>
            <a>Feature</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-gradient-to-t from-primary to-secondary text-white ">
          Select Wallet
        </a>
      </div>
    </div>
    );
};

export default Navbar;
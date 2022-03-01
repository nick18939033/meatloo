import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  PhoneIcon,
  MailOpenIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className=" top-0 sticky flex flex-col z-50">
      <div className=" duration-[1s]   space-y-0 flex flex-col  top-0 sticky z-50 overflow-hidden">
        <div className=" flex justify-between bg-yellow-400 items-center p-3 lg:py-3  z-[70] overflow-x-hidden">
          {/* Left */}
          <div className=" flex items-center ml-5 p-0">
            <Link to="/">
             <img src="https://www.licious.in/img/default/licious-logo.svg" className=" w-28" />
            </Link>
          </div>

          {/* Center */}
          <div className=" hidden lg:flex flex-grow  flex-shrink max-w-xl max-h-12 bg-stone-800 rounded-lg">
            <input
              type="text"
              className="bg-gray-100  w-[100%] rounded-l-md focus:outline-none p-4"
            />
            <SearchIcon className="h-14 p-4 self-center text-white" />
          </div>

          {/* Right */}
          <div className="flex space-x-3 md:space-x-5 mr-5 cursor-pointer ">
            {/* First */}

            <div className="flex items-center text-xs md:text-base">
              <Link to="/login">
                <UserIcon className="h-14 p-4 text-white hover:text-gray-300 duration-[1s] bg-gray-700 rounded-full" />
              </Link>
              <div className="hidden md:flex flex-col ml-3">
                {userInfo ? (
                  <h1 className=" text-sm md:text-md normal-case">
                    Hello, {userInfo.name}
                  </h1>
                ) : (
                  <h1 className=" text-sm md:text-md normal-case">
                    Hello, Guest
                  </h1>
                )}
                <span className="normal-case text-base md:text-base">
                  Sign In
                </span>
              </div>
            </div>

            {/* Second */}
            <Link to='/cart' >
            <div className=" text-xs md:text-base flex items-center whitespace-nowrap" >
              <ShoppingBagIcon className="h-14 p-4 bg-red-400 duration-[0.5s] rounded-full hover:bg-yellow-400" />
              <div className=" hidden md:flex  flex-col ml-3">
                <h1 className="text-base normal-case">My Cart</h1>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex lg:hidden w-full max-h-12 bg-red-400 shadow-lg">
        <input
          type="text"
          className="bg-white text-black w-[100%] focus:outline-none p-4"
          placeholder="Search"
        />
        <SearchIcon className="h-14 p-4 self-center text-black" />
      </div>
    </div>
  );
}

export default Header;

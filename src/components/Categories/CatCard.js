import React from "react";
import { Link } from "react-router-dom";

function CatCard({ image, name }) {
  return (
    <div className=" max-w-[10rem] md:max-w-md lg:max-w-[30rem] bg-transparent overflow-hidden flex flex-col justify-center m-1 cursor-pointer">
      <Link
        className=" w-full self-center flex flex-col "
        to={name.toLowerCase()}
      >
        <div className=" overflow-hidden" >
          <img
            src={image}
            className=" w-[100%] h-24 z-10 object-cover  lg:h-56  duration-[0.5s] hover:scale-105"
          />
        </div>
        <div className="bg-gray-100 w-full flex justify-center">
          <span className="self-center text-black z-40  text-base md:text-lg whitespace-nowrap py-1  font-bold">
            {name}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default CatCard;

import React from "react";

function WhyCard({ title, image, className }) {
  return (
    <div className="flex shadow-lg mb-5 item border shad  bg-white   items-center justify-center p-2 rounded-2xl max-w-[80%] lg:max-w-[18%]">
      <img
        src={image}
        className="w-16 h-16"
      />
      <div className=" flex flex-col ml-3 justify-start text-md font-bold   w-[45%]">
        <h1 className="  ">{title}</h1>
        <span className="text-red-500 whitespace-nowrap mt-1">Know More</span>
      </div>
    </div>
  );
}

export default WhyCard;

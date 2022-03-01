import { useState } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import WhyCard from "./WhyCard";
import "./styles.css";

const Why = () => {
  return (
    <div className=" flex flex-col items-center py-12 mx-3  my-5 rounded-lg">
      <h1 className=" text-3xl mb-4 " >Why Buy From Us</h1>
      <div className="horizontal-scroll  lg:justify-center space-x-12 scrollbar-thin scrollbar scrollbar-thumb-stone-800 scrollbar-track-gray-300">
        <WhyCard
          image="https://cdn-icons-png.flaticon.com/512/1460/1460639.png"
          title="Farm Fresh EveryDay"
        />
        <WhyCard
          image="https://cdn-icons-png.flaticon.com/512/2422/2422027.png"
          title="Fresh Cut After Order"
        />
        <WhyCard
          image="https://cdn-icons-png.flaticon.com/512/3643/3643948.png"
          title="Safe And Hygenic"
        />
        <WhyCard
          image="https://cdn-icons-png.flaticon.com/512/3165/3165146.png"
          title="100% Halal"
        />
      </div>
    </div>
  );
};

export default Why;

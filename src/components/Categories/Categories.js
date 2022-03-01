import React from "react";
import CatCard from "./CatCard";

function Categories() {
  return (
    <div className=" flex flex-col items-center mb-9  lg:px-20 bg-white py-5 my-5">
      <h1 className="text-3xl mb-5 ">Shop By Categories</h1>
      
      <div className=" grid justify-center gap-10 gap-x-2  lg:grid-cols-3 xl:grid-cols-4  md:grid-cols-4 grid-cols-3  lg:mx-10">
        <CatCard
          image="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          name="Chicken"
        />
        <CatCard
          image="https://media.istockphoto.com/photos/fresh-salmon-steak-with-a-variety-of-seafood-and-herbs-picture-id1156027693?b=1&k=20&m=1156027693&s=170667a&w=0&h=qCsf_ogKY4_CFyl4x_RO260YYHH-AEMXKcCgYu1ALrM="
          name="Sea Food"
        />
        <CatCard
          image="https://thumbs.dreamstime.com/b/raw-mutton-meat-bacground-raw-mutton-meat-bacground-macro-shot-150972990.jpg"
          name="Mutton"
        />
        <CatCard
          image="https://wallpapercave.com/wp/wp3280028.jpg"
          name="Egg"
        />
        <CatCard
          image="https://wallpapercave.com/wp/wp2689240.jpg"
          name="Spices"
        />
        <CatCard
          image="https://media.istockphoto.com/photos/set-of-different-dip-sauces-picture-id1297420372?b=1&k=20&m=1297420372&s=170667a&w=0&h=doPh0-2oxA0WKK_6bGEewNUOeWc9qMv44-vFwaj3rrY="
          name="Sauces"
        />
        <CatCard
          image="https://assets.tendercuts.in/category/S/u/0cf4f2ee-b32f-4e44-a2f3-a8c8a6c30663.jpg"
          name="Super Savers"
        />
        <CatCard
          image="https://assets.tendercuts.in/category/C/o/93297d4a-ca28-4af8-8b7e-0967e9ff3317.jpg"
          name="Combo"
        />
      </div>
    </div>
  );
}

export default Categories;

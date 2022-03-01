import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import { listProducts } from "../redux/actions/productActions";

const Categories = () => {
  const dispatch = useDispatch();
  const [filterProducts, setFilterProducts] = useState("chicken");
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
 
  const url = window.location.href;
  useEffect(() => {

    if(url.includes('chicken')){
      setFilterProducts('chicken')
    }
    if(url.includes('mutton')){
      setFilterProducts('mutton')
    }
    if(url.includes('spices')){
      setFilterProducts('spices')
    }
    if(url.includes('egg')){
      setFilterProducts('egg')
    }
    if(url.includes('sauces')){
      setFilterProducts('sauces')
    }
  });

  const filterData = products.filter((product) =>
    product.category.toLowerCase().includes(filterProducts.toLowerCase())
  );

  useEffect(() => {
    console.log(filterData);
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className=" flex  flex-col items-center lg:px-36 p-10 ">
      <span className=" cursor-pointer text-xl">
        <Link to="/">Home</Link> {">"} <span className=" capitalize" >{filterProducts}</span>{" "}
        <div className=" grid lg:grid-cols-3  xl:grid-cols-4  md:grid-cols-2 grid-cols-1 space-x-4">
        {filterData.map((product) => {
          return( <ProductCard product={product} key={product._id} />);
        })}
        </div>
      </span>
    </div>
  );
};

export default Categories;

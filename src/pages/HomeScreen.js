import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import BestSellers from "../components/BestSellers/BestSellers";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header";
import LatestProducts from "../components/LatestProducts/LatestProducts";
import Loader from "../components/Loader";
import Why from "../components/Why/Why";
import { listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const latestProducts = products.splice(1, 4);
  const bestSellers = products.splice(10, 14);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      <Banner />
      <Why />
      <center>
      {loading ? <Loader /> : <BestSellers products={bestSellers} />}
      </center>
      <center>
        {loading ? <Loader /> : <LatestProducts products={latestProducts} />}
      </center>

      <Categories />
    </div>
  );
};

export default HomeScreen;

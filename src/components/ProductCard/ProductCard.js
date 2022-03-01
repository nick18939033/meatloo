import React from "react";
import Rating from "../Ratings/Rating";
import "./styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
const ProductCard = ({ product, small }) => {
  const params = useParams();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    navigate(`/cart/${product._id}?qty=${1}`);
  };
  return (
    <div
      className={`cursor-pointer shadow-md item  duration-[1s] mb-8 flex items-center flex-col mt-5 bg-gray-50    rounded-2xl ${
        small === true && " max-w-[270px]"
      }`}
    >
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          className=" w-[100%] object-cover h-56 rounded-t-2xl"
        />
      </Link>
      <div className=" px-3 py-4 text-sm md:text-md lg:text-lg  space-y-2">
        <div className="flex justify-between space-x-4">
          <Link to={`/product/${product._id}`}>
            <h4 className=" text-sm font-bold ">{product.name}</h4>
          </Link>
          <div className=" font-semibold text-gray-500 flex items-center">
            <p className=" text-base ">₹{product.price}</p>
          </div>
        </div>
        <div className="">
          <div className="flex text-gray-500   flex-row space-x-20 items-center whitespace-nowrap text-sm ">
            <p>Net wt:{product.netWeight}</p>
            <p className="mr-9">Gross:{product.gross}</p>
          </div>
        </div>

        <Rating value={product.rating} text={`${product.numReviews} reviews`} />

        <div className="flex  mt-5 whitespace-nowrap text-sm md:text-base lg:text-lg">
          <nav onClick={addToCartHandler}>
            <ul>
              <li>
                Add to Cart
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

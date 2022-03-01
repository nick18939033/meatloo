import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Ratings/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../redux/actions/productActions";
import "../components/ProductCard/styles.css";
const ProductScreen = ({ history }) => {
  const [qty, setQty] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params]);

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  return (
    <div className=" bg-[#F7F6F6] h-[87vh]">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="flex flex-col bg-white shadow-lg lg:mx-14 xl:mx-52 space-y-2">
          <div className=" px-5 pt-5">
            <Link to="/">Home</Link> {">"}
            <span className=" capitalize whitespace-nowrap ml-3">
              {product.name}
            </span>
          </div>
          <div className="lg:flex lg:flex-row flex flex-col">
            <div className=" rounded-lg flex p-9 lg:w-[50%] justify-start">
              <img src={product.image} className=" rounded-lg shadow-md " />
            </div>
            <div className="lg:w-[50%] flex-col p-9 space-y-4">
              <h1 className=" text-2xl">{product.name}</h1>
              <p className=" text-sm text-gray-400">{product.description}</p>
              <div className="flex justify-between">
                <p className="text-lg ">Net wt:{product.netWeight}</p>
                <p className="text-lg ">Gross:{product.gross}</p>
              </div>

              <div className="flex justify-between" >
                <h1 className="text-lg" >
                  Status :
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </h1>

                {product.countInStock > 0 && (
                  <div>
                    <div className="flex" >
                      <h1 className="text-lg" >Qty:</h1>
                      <div className="" >
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option className=" text-lg" key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-lg ">₹:{product.price}</p>
                <nav onClick={addToCartHandler} >
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
        </div>
      )}
    </div>
  );
};

export default ProductScreen;

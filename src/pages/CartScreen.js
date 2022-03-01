import React, { useEffect } from "react";
import { Link, useMatch, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { useLocation, useParams } from "react-router-dom";
import "../components/ProductCard/styles.css";
import Total from "../components/Total";
const CartScreen = ({ history }) => {
  const { id } = useParams();
  const { search } = useLocation();
  const [searchParms] = useSearchParams();

  const productId = id;
  const qty = search ? Number(search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      console.log(productId);
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div className=" flex flex-col">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col  shadow-md my-10">
          <div className="lg:w-3/4 w-[100%] bg-white lg:px-10 px-2 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {cartItems.length} Item
              </h2>
            </div>
            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
            <div className="flex justify-between mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>

              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Weight
              </h3>
            </div>
            {cartItems.map((item) => {
              return (
                <div key={item.product} className="flex  w-[100%] my-8">
                  <div className="w-[38%] lg:w-[20%]">
                    <img
                      className=""
                      src={item.image}
                      classNameName="object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow space-y-4">
                    <span className="font-bold text-sm ">{item.name}</span>
                    <span className=" capitalize whitespace-nowrap text-sm lg:text-base text-red">
                      Category :{" "}
                      <Link className="text-red-500" to={`/${item.category}`}>
                        {" "}
                        {item.category}
                      </Link>
                    </span>
                    <span
                      onClick={() => removeFromCartHandler(item.product)}
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </span>
                  </div>

                  <span className="text-center w-[11%] font-semibold text-sm">
                    <div className="flex justify-center w-1/5">
                      <div>
                        <div className="flex">
                          <div className="">
                            <select
                              value={item.qty}
                              onChange={(e) =>
                                dispatch(
                                  addToCart(
                                    item.product,
                                    Number(e.target.value)
                                  )
                                )
                              }
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                          <h1 className="">kg</h1>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              );
            })}
          </div>

          <Total item={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartScreen;

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const CartItem = ({ item,removeItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex  w-[100%] my-8">
      <div className=" w-[20%]">
        <img
          className=""
          src={item.image}
          classNameName="object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <span className="font-bold text-sm whitespace-nowrap">{item.name}</span>
        <span className=" capitalize text-red" >{item.category}</span>
        <span onClick={removeItem(item.product)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">
          Remove
        </span>
      </div>
      <div className="flex justify-center w-1/5">
        <div>
          <div className="flex">
            <h1 className="text-lg">Qty:</h1>
            <div className="">
              <select
                value={item.qty}
                onChange={(e) =>
                  dispatch(addToCart(item.product, Number(e.target.value)))
                }
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ₹{item.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">{}</span>
    </div>
  );
};

export default CartItem;

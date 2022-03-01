import React from "react";

const Total = ({item}) => {
  return (
    <div className="lg:w-1/4 w-full px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items {item.length}</span>
        <span className="font-semibold text-sm"></span>
      </div>

      <div className="border-t flex justify-center flex-col mt-8 w-full" >
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>
            ₹{" "}
            {item
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </span>
        </div>
        <nav className="flex justify-center">
          <ul>
            <li>
              Checkout
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Total;

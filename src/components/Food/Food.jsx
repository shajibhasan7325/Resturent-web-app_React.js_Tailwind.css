import React, { useState } from "react";
import { data } from "../../Data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);
  // filer type burger pizza
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  // filter type price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className=" max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-orange-500 ">
        {" "}
        Top Rated Menu Items
      </h1>
      {/* Filter Rows */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* item filter */}
        <div>
          <p className="font-bold text-gray-700 ">Filter Type</p>
          <div className="flex flex-wrap justify-between ">
            <button
              onClick={() => setFoods(data)}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salads")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* price filter */}
        <div>
          <p className="font-bold text-gray-700 ">Filter Price</p>
          <div className=" flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 text-orange-500 border-orange-600 hover:bg-orange-600 hover: hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Foods */}
      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="duration-300 border rounded-lg shadow-lg hover:scale-110"
          >
            <img
              className=" w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold ">{item.name}</p>
              <p>
                <span className="p-1 text-white bg-orange-500 rounded-full ">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;

import React from "react";
import { categories } from "../../Data/data";

const Footer = () => {
  return (
    <div className=" max-w-[1660px px-4 py-12]">
      <h1 className="text-4xl font-bold text-center text-orange-600 ">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 gap-6 py-6 md:grid-cols-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-gray-100 rounded-lg "
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-20 " src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

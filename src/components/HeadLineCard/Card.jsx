import React from "react";

const Card = ({ title, title2, img }) => {
  return (
    <div className="relative rounded-xl">
      {/* overly */}
      <div className="absolute w-full h-full text-white bg-black/50 rounded-xl">
        <p className="px-2 pt-4 text-2xl font-bold ">{title}</p>
        <p className="px-2 mt-2">{title2}</p>
        <button className="absolute mx-1 text-black bg-white border-white bottom-3 ">
          order now
        </button>
      </div>
      <img
        className=" max-h-[160px] w-full  md:max-h-[200px] object-cover rounded-xl"
        src={img}
        alt=""
      />
    </div>
  );
};

export default Card;

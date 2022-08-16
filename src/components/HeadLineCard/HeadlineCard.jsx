import React from "react";
import Card from "./Card";

const HeadlineCard = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <Card
        title="Sun's Out, BOGO's Out"
        title2="Through 8/26"
        img="https://images.pexels.com/photos/5929763/pexels-photo-5929763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        title="Sun's Out, BOGO's Out"
        title2="Through 8/26"
        img="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        title="Sun's Out, BOGO's Out"
        title2="Through 8/26"
        img="https://images.pexels.com/photos/2987564/pexels-photo-2987564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
};

export default HeadlineCard;

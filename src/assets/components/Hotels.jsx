import React from "react";
import Card from "./Card";
import IMAGES from "../../Images/Images";

const Hotels = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="ml-52 text-black  mb-4 ">Hotels Loved by guests</h1>
      <div className="flex justify-center gap-5 ">
        <Card
          className="card-container"
          img={IMAGES.Image9}
          place="Amna Suraka"
          city="Slemani"
          price="99.99 $ a night "
          rating="9.5"
        />
        <Card
          className="card-container"
          img={IMAGES.Image10}
          place="Amna Suraka"
          city="Slemani"
          price="139 $ a night "
          rating="9.1"
        />
        <Card
          className="card-container"
          img={IMAGES.Image11}
          place="Amna Suraka"
          city="Slemani"
          price="119 $ a night "
          rating="9.9"
        />
        <Card
          className="card-container"
          img={IMAGES.Image12}
          place="Amna Suraka"
          city="Slemani"
          price="120 $ a night "
          rating="9.3"
        />
      </div>
    </div>
  );
};

export default Hotels;

import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white shadow-2xl p-4 flex flex-col relative w-[250px] rounded-2xl ">
      <img className="w-full rounded-xl h-[200px]" src={props.img} />
      <p className="absolute top-5 left-5 bg-green-300 text-green-900 p-2 rounded-full bg-opacity-50	">
        {props.rating}
      </p>
      <h1 className="mt-2">{props.place}</h1>
      <h2 className="text-gray-500">{props.city}</h2>
      <h1 className="text-black text-2xl">{props.price}</h1>
    </div>
  );
};

export default Card;

import React from "react";
import IMAGES from "../../Images/Images";
const Places = () => {
  return (
    <div className="m-5 h-[100vh] text-black flex flex-col justify-center items-center mt-[-130px] ">
      <div className="">
        <h1 className="mb-5"> Popular destinations </h1>
        <div className=" flex justify-center gap-10 ">
          <div className="relative">
            <h1 className="absolute bottom-5 left-5 bg-gray-500 rounded-full bg-opacity-50 p-2 text-white">
              Lebnon
            </h1>
            <img className="w-[290px] h-full rounded-2xl" src={IMAGES.Image2} />
          </div>

          <div>
            <div className="flex flex-col gap-4 relative">
              <h1 className="absolute bottom-5 left-5 bg-gray-500 rounded-full bg-opacity-50 p-2 text-white">
                Lebnon
              </h1>
              <h1 className="absolute top-[130px] left-5 bg-gray-400 rounded-full bg-opacity-50 p-2 text-white">
                Greek
              </h1>
              <img
                className="w-[290px] h-full rounded-2xl"
                src={IMAGES.Image3}
              />
              <img
                className="w-[290px] h-full rounded-2xl justify-self-end mt-10"
                src={IMAGES.Image4}
              />
            </div>
          </div>

          <div className="relative">
            <h1 className="absolute bottom-5 left-5 bg-gray-500 rounded-full bg-opacity-50 p-2 text-white">
              Lebnon
            </h1>
            <img className="w-[290px] h-full rounded-2xl" src={IMAGES.Image5} />
          </div>

          <div className="relative">
            <h1 className="absolute bottom-5 left-5 bg-gray-500 rounded-full bg-opacity-50 p-2 text-white">
              Lebnon
            </h1>
            <img className="w-[290px] h-full rounded-2xl" src={IMAGES.Image6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;

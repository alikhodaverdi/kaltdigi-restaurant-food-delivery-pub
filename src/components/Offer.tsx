import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="relative bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerbackground.jpg')] bg-cover md:h-[70vh]">
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-0"></div>

      {/* text container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 relative z-10">
        <h1 className="text-white text-5xl font-bold xl:text-6xl ">
          پیشنهاد ویژه امروز
        </h1>
        <p className="text-white xl:text-xl">
          خوشمزه‌ترین غذاها با تخفیف ویژه. همین الان سفارش بده!
        </p>

        <CountDown />
        <button className="bg-[#FF0B55] text-white rounded-md py-3 px-6">
          سفارش
        </button>
      </div>

      {/* image container */}
      <div className="relative w-full flex-1 md:h-full z-10">
        <Image alt="offer" src={"/offer.jpg"} fill className="object-cover" />
      </div>
    </div>
  );
};

export default Offer;

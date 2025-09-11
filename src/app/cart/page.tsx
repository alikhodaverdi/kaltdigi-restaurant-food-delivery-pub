import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-rem)] md:h-[calc(100vh-9rem)] flex flex-col text-[#FF0B55] lg:flex-row">
      {/* Products Container */}
      <div className="h-1/2 p-2 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        {/* single item container */}
        <div className="flex items-center justify-between mb-4 ">
          <Image alt="" src={"/slide.jpg"} width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold"></h1>

            <span>Large</span>
          </div>

          <h2 className="font-bold ">792.6558</h2>
          <span className="cursor-pointer">x</span>
        </div>
        {/* single item container */}
        <div className="flex items-center justify-between mb-4 ">
          <Image alt="" src={"/slide.jpg"} width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold"></h1>

            <span>Large</span>
          </div>

          <h2 className="font-bold ">792.6558</h2>
          <span className="cursor-pointer">x</span>
        </div>
        {/* single item container */}
        <div className="flex items-center justify-between mb-4 ">
          <Image alt="" src={"/slide.jpg"} width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold"></h1>

            <span>Large</span>
          </div>

          <h2 className="font-bold ">792.6558</h2>
          <span className="cursor-pointer">x</span>
        </div>
      </div>
      {/* Payment Conainer */}
      <div className="h-1/2 p-2 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2">
        <div className="flex justify-between">
          <span className="">هزینه خدمات</span>
          <span className="">$0</span>
        </div>
        <div className="flex justify-between">
          <span className="">هزینه ارسال</span>
          <span className="text-green-500">رایگان</span>
        </div>

        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">جمع کل ( 3 آیتم)</span>
          <span className="">$81.70</span>
        </div>

        <button className="bg-[#FF0B55] text-white p-3 w-1/2  rounded-md self-end">
          پرداخت
        </button>
      </div>
    </div>
  );
};

export default CartPage;

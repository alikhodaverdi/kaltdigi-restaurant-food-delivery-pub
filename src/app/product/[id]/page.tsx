import { singleProduct } from "@/components/data";
import Price from "@/components/Price";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className=" p-4 lg:px-4 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-5 md:items-center">
      {/* image container */}
      {singleProduct?.img && (
        <div className="relative  w-full h-1/2  md:h-[70%]">
          <Image src={"/pizza/2.jpg"} alt="" className="object-contain" fill />
        </div>
      )}
      {/* text container */}
      <div className="h-1/2 flex md:h-[70%] flex-col gap-4 md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.price}</p>

        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>

      <div></div>
    </div>
  );
};

export default SingleProductPage;

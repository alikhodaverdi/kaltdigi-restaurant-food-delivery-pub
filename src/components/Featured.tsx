import Image from "next/image";
import React from "react";

import { feauredProduct } from "@/components/data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* rapper */}
      <div className=" w-max flex">
        {/* single item */}

        {feauredProduct.map((item, index) => (
          <div
            key={index}
            className=" w-screen h-[60vh] flex flex-col p-4 items-center justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw xl:w-[33vh] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
              {item.img && (
                <Image
                  alt="de"
                  className="object-cover rounded-md"
                  src={item.img}
                  fill
                />
              )}
            </div>

            {/* TEXT CONTAINER */}

            <div className=" flex-1 justify-center flex items-center text-center flex-col gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                اضافه کردن به سبد
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

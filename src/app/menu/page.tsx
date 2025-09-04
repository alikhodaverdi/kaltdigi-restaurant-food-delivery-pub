import { menue } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center ">
      {menue.map((category, index) => (
        <Link
          href={`/menu/${category.slug}`}
          key={index}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{
            backgroundImage: `url(${category.img})`,
          }}
        >
          <div className={`text-${category.color} w-1/2 text-white`}>
            <h1 className="uppercase bg-gray-600/10 w-fit  drop-shadow-2xl shadow-2xl backdrop-blur-sm rounded-md p-1 font-bold text-3xl">
              {category.title}
            </h1>
            <p className="text-sm my-8 bg-gray-600/10 drop-shadow-2xl shadow-2xl backdrop-blur-sm rounded-md p-1">
              {category.desc}
            </p>
            <button
              className={`hidden 2xl:block bg-${category.color} bg-white text-red-500 py-2 px-4 rounded`}
            >
              نمایش
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;

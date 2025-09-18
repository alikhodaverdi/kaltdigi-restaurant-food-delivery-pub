import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/product?cat=${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);

  return (
    <div className="flex flex-wrap text-[#FF0B55]">
      {products.map((item, index) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 md:w-1/2 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
          key={index}
          href={`/product/${item.id}`}
        >
          {/* Image container */}

          <div className="relative h-[80%]">
            {item.img && (
              <Image src={item.img} alt="" fill className="object-contain" />
            )}
          </div>
          {/* Text container */}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">{item.price}</h2>
            <button className="hidden  group-hover:block uppercase bg-[#FF0B55] text-white p-2 rounded-md">
              اضافه کردن به سبد
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;

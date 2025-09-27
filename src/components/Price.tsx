"use client";
import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product?.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const { addtoCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  const handleCart = () => {
    addtoCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("محصول به سبد اضافه شد!");
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold">${total}</h2>
      {/* options container */}
      <div className="flex gap-4">
        {product?.options?.length &&
          product?.options?.map((option, index) => (
            <button
              key={option.title}
              className=" min-w-[6rem] cursor-pointer p-2 ring-1 ring-red-400 rounded-md"
              style={{
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* quantity and add button container */}
      <div className="flex justify-between items-center">
        {/* quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>مقدار</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev + 1 : 9))}
              className="cursor-pointer"
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              className="cursor-pointer"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* Cart button */}

        <button
          onClick={handleCart}
          className="uppercase bg-[#FF0B55] md:w-64 w-60 text-white p-3 ring-1 ring-red-500"
        >
          افزودن به سبد کارت
        </button>
      </div>
    </div>
  );
};

export default Price;

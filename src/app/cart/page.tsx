"use client";

import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckOut = async () => {
    if (!session) {
      router.push("/home");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.expires.email,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-rem)] md:h-[calc(100vh-9rem)] flex flex-col text-[#FF0B55] lg:flex-row">
      {/* Products Container */}
      <div className="h-1/2 p-2 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        {/* single item container */}
        {products.map((item) => (
          <div
            className="flex items-center justify-between mb-4 "
            key={item.id}
          >
            {item.img && (
              <Image alt="" src={item.img} width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">
                {item.title} x {item.quantity}
              </h1>

              <span>{item.optionTitle}</span>
            </div>

            <h2 className="font-bold ">{item.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              x
            </span>
          </div>
        ))}
      </div>
      {/* Payment Conainer */}
      <div className="h-1/2 p-2 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2">
        <div className="flex justify-between">
          <span className="">هزینه خدمات ({totalItems})</span>
          <span className="">${totalPrice}</span>
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

        <button
          onClick={handleCheckOut}
          className="bg-[#FF0B55] text-white p-3 w-1/2 hover:cursor-pointer  rounded-md self-end"
        >
          پرداخت
        </button>
      </div>
    </div>
  );
};

export default CartPage;

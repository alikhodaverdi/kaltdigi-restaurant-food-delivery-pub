"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "طعم بی‌نظیر غذاهای سنتی ایرانی",
    image: "/slide.jpg",
  },
  {
    id: 2,
    title: "تجربه‌ای خاص از غذاهای بین‌المللی",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "تازه‌ترین مواد اولیه با بهترین کیفیت",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setcurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex font-yekan flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* text container */}

      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-[#FF0B55] font-bold ">
        <h1 className="text-5xl  text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-[#FF0B55] uppercase py-4 px-8 text-white">
          الان سفارش دهید
        </button>
      </div>

      {/* image container */}
      <div className="w-full flex-1 relative  ">
        <Image
          src={data[currentSlide].image}
          fill
          alt=""
          priority
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Slider;

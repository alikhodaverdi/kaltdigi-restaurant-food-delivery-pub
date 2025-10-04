"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddPage = () => {
  const { data: session, status } = useSession();

  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    price: 0,
    catSlug: 0,
  });

  const [option, setOption] = useState({
    title: "",
    additionalPrice: 0,
  });
  const router = useRouter();

  if (status == "loading") {
    return <p>Loading ...</p>;
  }

  //   if (status === "unauthenticated" || !session?.user.isAdmin) {
  //     router.push("/");
  //   }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <form action="">
        <h1>افزودن محصول جدید</h1>
        <div>
          <label htmlFor="">عنوان</label>
          <input onChange={handleChange} type="text" name="title" />
        </div>
        <div>
          <label htmlFor="">عنوان</label>
          <textarea onChange={handleChange} name="Description" />
        </div>

        <div>
          <label htmlFor="">قیمت</label>
          <input onChange={handleChange} type="number" name="price" />
        </div>

        <div>
          <label htmlFor="">دسته بندی</label>
          <input onChange={handleChange} type="text" name="category" />
        </div>

        <div>
          <label htmlFor="">تنظیمات بیشتر</label>
          <div>
            <input
              onChange={changeOption}
              type="text"
              placeholder="عنوان"
              name="title"
            />
            <input
              onChange={changeOption}
              type="number"
              placeholder="قیمت"
              name="additionalPrice"
            />
          </div>
          <button>افزودن تنظیمات</button>
        </div>

        <div>
          <span>کوچک</span>
          <span>2</span>
        </div>
      </form>
    </div>
  );
};

export default AddPage;

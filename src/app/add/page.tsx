"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type Option = {
  title: string;
  additionalPrice: number;
};

const AddPage = () => {
  const { data: session, status } = useSession();

  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);
  const [file, setFile] = useState<File>();

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

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const item = (target.files as FileList)[0];
    setFile(item);
  };
  const upload = async () => {
    const data = new FormData();
    data.append("file", file!);
    data.append("upload_preset", "resturant");

    const res = await fetch("https://api.cloudinary.com/v1_1/du7bex0ov/image", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: data,
    });

    const resData = await res.json();

    return resData.url;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = await upload();

      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          img: url,
          ...inputs,
          options,
        }),
      });

      const data = await res.json();

      router.push(`/product/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>افزودن محصول جدید</h1>

        <div>
          <label htmlFor="">تصویر</label>
          <input type="file" onChange={handleChangeImg} />
        </div>
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
          <input onChange={handleChange} type="text" name="catSlug" />
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
          <div onClick={() => setOptions((prev) => [...prev, option])}>
            افزودن تنظیمات
          </div>
        </div>

        <div>
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setOptions(options.filter((opt) => opt.title !== item.title))
              }
            >
              <span>{item.title}</span>
              <span>${item.additionalPrice}</span>
            </div>
          ))}
        </div>

        <button type="submit" className="">
          ارسال
        </button>
      </form>
    </div>
  );
};

export default AddPage;

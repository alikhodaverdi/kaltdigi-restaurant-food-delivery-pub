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
    if (!file) throw new Error("No file selected");

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "resturan");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/du7bex0ov/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Cloudinary upload failed: ${err}`);
    }

    const resData = await res.json();
    return resData.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // const url = await upload();

      const res = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        // body: JSON.stringify({
        //   // img: url,
        //   ...inputs,
        //   options,
        // }),
        body: JSON.stringify({
          title: inputs.title,
          desc: inputs.desc,
          price: Number(inputs.price),
          catSlug: inputs.catSlug,
          options: options,
          img: "/placeholder.jpg",
        }),
      });

      const data = await res.json();

      console.log(data);

      // router.push(`/product/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl border border-gray-100"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
          افزودن محصول جدید 🛍️
        </h1>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2">تصویر</label>
          <input
            type="file"
            onChange={handleChangeImg}
            className="block w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-4 
          file:rounded-lg file:border-0 file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
          />
        </div>

        {/* عنوان */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">عنوان</label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="نام محصول..."
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        {/* توضیحات */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">توضیحات</label>
          <textarea
            onChange={handleChange}
            name="Description"
            rows={4}
            placeholder="توضیح مختصر درباره محصول..."
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        {/* قیمت */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">قیمت (تومان)</label>
          <input
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="مثلاً 250000"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        {/* دسته‌بندی */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">دسته‌بندی</label>
          <input
            onChange={handleChange}
            type="text"
            name="catSlug"
            placeholder="مثلاً electronics"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        {/* تنظیمات بیشتر */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-3">تنظیمات بیشتر</label>
          <div className="flex gap-3 mb-3">
            <input
              onChange={changeOption}
              type="text"
              placeholder="عنوان تنظیم"
              name="title"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            <input
              onChange={changeOption}
              type="number"
              placeholder="قیمت اضافه"
              name="additionalPrice"
              className="w-1/3 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => setOptions((prev) => [...prev, option])}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all"
          >
            افزودن تنظیمات
          </button>
        </div>

        {/* نمایش تنظیمات اضافه‌شده */}
        <div className="mb-6">
          {options.length > 0 && (
            <div className="space-y-2">
              {options.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-indigo-100 transition"
                  onClick={() =>
                    setOptions(
                      options.filter((opt) => opt.title !== item.title)
                    )
                  }
                >
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-sm text-gray-600">
                    +{item.additionalPrice} تومان
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* دکمه ارسال */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all"
        >
          ارسال محصول
        </button>
      </form>
    </div>
  );
};

export default AddPage;

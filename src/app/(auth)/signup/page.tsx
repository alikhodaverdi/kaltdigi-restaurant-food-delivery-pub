"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:3000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("خطا در انجام عملیات");
      }
      setFormData({ name: "", email: "", password: "" });

      toast.success("ثبت نام با موفقیت انجام شد.");
    } catch (error) {
      console.log(error);

      toast.error("خطا در انجام عملیات");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="bg-white border-[#FF0B55] border shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          فرم ثبت نام
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 ">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              name="name"
              placeholder="نام خود را وارد نمایید"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF0B55] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              ایمیل
            </label>
            <input
              type="email"
              name="email"
              placeholder="ایمیل خود را وارد نمایید"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF0B55] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              گذرواژه
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF0B55] focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {loading ? "در حال ثبت...." : "ثبت نام"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

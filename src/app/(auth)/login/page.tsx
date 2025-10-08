"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if (status === "loading") return <p>Loading...</p>;

  if (status === "authenticated") {
    router.push("/");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Sending to NextAuth:", formData);

    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("ورود موفقیت‌آمیز 👌");
    }
  };

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/login.jpg" alt="login" className="object-cover" fill />
        </div>

        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">ورود به حساب</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="ایمیل"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-200 p-3 rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="رمز عبور"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-gray-200 p-3 rounded-md"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md"
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>
          </form>

          <div className="flex flex-col gap-3">
            <button
              className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
              onClick={() => signIn("google")}
            >
              <AiFillGoogleCircle className="w-6 h-6" />
              <span>ورود با گوگل</span>
            </button>
            <button
              className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md"
              onClick={() => toast.info("Facebook login not configured")}
            >
              <AiFillFacebook className="w-6 h-6 text-blue-600" />
              <span>ورود با فیسبوک</span>
            </button>
          </div>

          <p className="text-sm">
            حساب کاربری ندارید؟{" "}
            <Link href="/register" className="underline text-orange-500">
              ثبت‌نام کنید
            </Link>
          </p>

          <p className="text-sm">
            مشکل در ورود؟{" "}
            <Link className="underline" href={"/"}>
              تماس با ما
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

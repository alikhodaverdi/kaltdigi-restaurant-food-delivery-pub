"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  console.log("data : " + data);
  console.log("status : " + status);

  if (status === "loading") {
    return <p> Loading ...</p>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center ">
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src={"/login.jpg"} className="object-cover" fill alt="" />
        </div>
        {/* FROM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">خوش آمدید</h1>
          <p>رستوران اغذیه با امکان سفارش انواع غذاهای خارجی و ایرانی</p>

          <button
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
            onClick={() => signIn("google")}
          >
            <AiFillGoogleCircle className="w-6 h-6 " />
            <span>ورود با گوگل</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <AiFillFacebook className="w-6 h-6 text-blue-600" />
            <span>ورود با فیسبوک</span>
          </button>
          <p className="text-sm">
            مشکل در هنگام ورود{" "}
            <Link className="underline" href={"/"}>
              {" "}
              تماس با ما
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

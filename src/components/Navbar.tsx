import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { BiPhone } from "react-icons/bi";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-[#FF0B55] p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* left links */}
      <div className="hidden  flex-1 md:flex gap-4">
        <Link href={"/"}>خانه</Link>
        <Link href={"/menu"}>منو</Link>
        <Link href={"/"}>فرم تماس</Link>
      </div>
      {/* Logo */}
      <div className=" text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"} className="text-3xl">
          رستوران میهمان
        </Link>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* right links */}

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 mt-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md ">
          <BiPhone />
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">ورود</Link>
        ) : (
          <Link href="/orders">سفارش</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;

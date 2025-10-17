import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { BiPhone } from "react-icons/bi";
import UserLinks from "./UserLinks";

const Navbar = () => {
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
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;

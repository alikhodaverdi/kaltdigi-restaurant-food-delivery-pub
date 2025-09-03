import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { BiPhone } from "react-icons/bi";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 md:h-24 uppercase text-red-500 items-center p-4 flex justify-between border-b-2 border-b-red-500">
      {/* left links */}
      <div className="hidden flex-1 md:flex gap-4">
        <Link href={"/"}>خانه</Link>
        <Link href={"/"}>منو</Link>
        <Link href={"/"}>فرم تماس</Link>
      </div>
      {/* Logo */}
      <div className=" text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>اغذیه</Link>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* right links */}

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute lg:static flex top-3 r-2 items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <BiPhone />
          <span>123645</span>
        </div>
        <Link href={"/"}>ورود</Link>

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;

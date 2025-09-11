"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  const links = [
    { id: 1, title: "خانه", url: "/" },
    { id: 2, title: "منو", url: "/menu" },
    { id: 3, title: "ساعت کاری", url: "/" },
    { id: 4, title: "تماس با ما", url: "/" },
  ];
  return (
    <div>
      {!open ? (
        <FaBarsStaggered className="w-5 h-5" onClick={() => setOpen(true)} />
      ) : (
        <IoMdClose className="w-5 h-5" onClick={() => setOpen(false)} />
      )}

      {open && (
        <div className="bg-[#FF0B55] xl:px-40 lg:px-20 lx:px-40 w-full z-10 text-white text-3xl flex-col gap-8 absolute left-0 flex justify-center items-center top-24 h-[calc(100vh-6rem)]">
          {links.map((item, index) => (
            <Link onClick={() => setOpen(false)} key={index} href={item.url}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link href={"/login"}>ورود</Link>
          ) : (
            <Link href={"/orders"}>سفارش ها</Link>
          )}
          <Link href={"/cart"}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

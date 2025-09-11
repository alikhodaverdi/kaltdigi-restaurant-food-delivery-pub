import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-2">
      <span>سبد خرید (3)</span>
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <CiShoppingCart className="w-7 h-7 pb-1" />
      </div>
    </Link>
  );
};

export default CartIcon;

"use client";
import { useCartStore } from "@/utils/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartIcon = () => {
  const { products, totalItems } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <Link href="/cart" className="flex items-center gap-2">
      <span>سبد خرید ({totalItems})</span>
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <CiShoppingCart className="w-7 h-7 pb-1" />
      </div>
    </Link>
  );
};

export default CartIcon;

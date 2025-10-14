"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartIcon = () => {
  const { data: session, status } = useSession();

  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <Link href="/cart" className="flex items-center gap-2">
      {status === "authenticated" && (
        <>
          <div className="relative w-8 h-8 md:w-5 md:h-5">
            <CiShoppingCart className="w-7 h-7 pb-1" />
          </div>
          {session?.user.isAdmin ? (
            <button className="p-1 bg-red-500 text-white rounded-md">
              افزودن محصول
            </button>
          ) : (
            <span>سبد خرید ({totalItems})</span>
          )}
        </>
      )}
    </Link>
  );
};

export default CartIcon;

"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartIcon = () => {
  const { data: session, status } = useSession();
  const { totalItems } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  if (status !== "authenticated") return null;

  return (
    <div className="flex gap-5 items-center">
      <Link href="/cart" className="flex items-center gap-2">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <CiShoppingCart className="w-7 h-7 pb-1" />
        </div>
        <span>سبد خرید ({totalItems})</span>
      </Link>

      {session?.user.isAdmin && (
        <button
          onClick={() => router.push("/add")}
          className="p-1 hover:cursor-pointer bg-red-500 text-white rounded-md"
        >
          افزودن محصول
        </button>
      )}
    </div>
  );
};

export default CartIcon;

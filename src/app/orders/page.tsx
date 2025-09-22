"use client";

import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/orders");
      if (!res.ok) throw new Error("Failed to fetch orders");
      const json = await res.json();
      return Array.isArray(json) ? json : [];
    },
  });

  if (isLoading || status === "loading") {
    return "Loading ...";
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead className="">
          <tr className="text-left">
            <th className="hidden md:block"> شناسه سفارش </th>
            <th>تاریخ</th>
            <th>قیمت </th>
            <th className="hidden md:block">محصولات</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: OrderType) => (
            <tr className="text-sm md:text-base  bg-red-50">
              <td className="hidden md:block py-6 px-1">12334565</td>
              <td className="py-6 px-1">1405.05.05</td>
              <td className="py-6 px-1">12.50</td>
              <td className="hidden md:block py-6 px-1">پیتزا مارگاریتا</td>
              <td>در حال ارسال</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

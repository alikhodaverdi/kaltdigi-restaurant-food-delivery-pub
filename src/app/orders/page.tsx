"use client";

import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { TbTrash } from "react-icons/tb";

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

  const handleUpdate = (e, id) => {};
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
              <td className="hidden md:block py-6 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="py-6 px-1">{item.price}</td>
              <td className="py-6 px-1">{item.products[0].title}</td>
              <td className="hidden md:block py-6 px-1">پیتزا مارگاریتا</td>
              {session?.user?.isAdmin ? (
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 ring-1 ring-red-100 rounded-md"
                    ></input>
                    <button>
                      <TbTrash />
                    </button>
                  </form>
                </td>
              ) : (
                <td>{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

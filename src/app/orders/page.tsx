import React from "react";

const OrdersPage = () => {
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
          <tr className="text-sm md:text-base  bg-red-50">
            <td className="hidden md:block py-6 px-1">12334565</td>
            <td className="py-6 px-1">1405.05.05</td>
            <td className="py-6 px-1">12.50</td>
            <td className="hidden md:block py-6 px-1">پیتزا مارگاریتا</td>
            <td>در حال ارسال</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12334565</td>
            <td className="py-6 px-1">1405.05.05</td>
            <td className="py-6 px-1">12.50</td>
            <td className="hidden md:block py-6 px-1">پیتزا مارگاریتا</td>
            <td>در حال ارسال</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12334565</td>
            <td className="py-6 px-1">1405.05.05</td>
            <td className="py-6 px-1">12.50</td>
            <td className="hidden md:block py-6 px-1">پیتزا مارگاریتا</td>
            <td>در حال ارسال</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12334565</td>
            <td className="py-6 px-1">1405.05.05</td>
            <td className="py-6 px-1">12.50</td>
            <td className="hidden md:block py-6 px-1">پیتزا مارگاریتا</td>
            <td>در حال ارسال</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

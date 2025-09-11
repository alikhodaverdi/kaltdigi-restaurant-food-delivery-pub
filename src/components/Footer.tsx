import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="  mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center h-auto md:h-24 px-6 md:px-20 lg:px-32 xl:px-40 py-6 gap-6">
        {/* Logo */}
        <Link href={"/"} className="font-bold text-2xl text-[#FF0B55]">
          رستوران میهمان
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm md:text-base justify-center md:justify-end ">
          <Link href="/menu" className="hover:text-[#FF0B55] transition">
            منو
          </Link>
          <Link href="/about" className="hover:text-[#FF0B55] transition">
            درباره ما
          </Link>
          <Link href="/contact" className="hover:text-[#FF0B55] transition">
            تماس با ما
          </Link>
          <Link href="/offers" className="hover:text-[#FF0B55] transition">
            پیشنهاد ویژه
          </Link>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs md:text-sm border-t border-gray-700 py-4 text-gray-400">
        ساخت توسط علی خداوردی - تمام حقوق اثر محفوظ است
      </div>
    </footer>
  );
};

export default Footer;

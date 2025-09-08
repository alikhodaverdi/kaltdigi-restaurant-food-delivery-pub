import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-1/2 flex md:h-24 lg:px-20 xl:p-40 text-red-500 items-center justify-between">
      <Link href={"/"} className="font-bold text-xl">
        اغذیه
      </Link>

      <p>mehrdad khodaverdi</p>
    </div>
  );
};

export default Footer;

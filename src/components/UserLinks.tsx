"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const UserLinks = () => {
  const { data, stauts } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <div>
          <Link href="/login">ورود</Link>
          <span onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <Link href="/orders">سفارش</Link>
      )}
    </>
  );
};

export default UserLinks;

"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { status } = useSession();

  return (
    <div>
      {status === "unauthenticated" ? (
        <Link href="/login">ورود</Link>
      ) : (
        <div>
          <Link href="/orders">سفارش ها</Link>
          <span className="mr-4 cursor-pointer" onClick={() => signOut()}>
            خروج
          </span>
        </div>
      )}
    </div>
  );
};

export default UserLinks;

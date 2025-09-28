"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { TbTrash } from "react-icons/tb";
import { VscLoading } from "react-icons/vsc";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <VscLoading />;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }

  const handleClick = async () => {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      router.push("/menu");
      toast("محصول با موفقیت حذف شد.");
    } else {
      const data = await res.json();
      toast.error(data.messagee);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:scale-110 text-white p-2 rounded-full absolute top-4 left-4"
    >
      <TbTrash />
    </button>
  );
};

export default DeleteButton;

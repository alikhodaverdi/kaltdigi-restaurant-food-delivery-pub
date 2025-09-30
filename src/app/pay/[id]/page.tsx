"use client";
import React, { useEffect, useState } from "react";

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setclientSecret] = useState("");
  const { id } = params;

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        const data = await res.json();
        setclientSecret(data.clientSecret);
      } catch (error) {}
    };

    makeRequest();
  }, []);

  return <div>PayPage</div>;
};

export default PayPage;

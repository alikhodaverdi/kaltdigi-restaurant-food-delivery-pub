"use client";
import React, { useEffect, useState } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "@/components/CheckOutForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY!);

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

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {" "}
          <CheckOutForm />
        </Elements>
      )}
    </div>
  );
};

export default PayPage;

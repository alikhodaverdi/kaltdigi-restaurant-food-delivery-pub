import { useCheckout, PaymentElement } from "@stripe/react-stripe-js/checkout";
import React from "react";
import AddressForm from "./AddressForm";

const CheckoutForm = () => {
  const checkoutState = useCheckout();

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (checkoutState.type === "loading") {
      return <div>Loading...</div>;
    } else if (checkoutState.type === "error") {
      return <div>Error: {checkoutState.error.message}</div>;
    }

    // checkoutState.type === 'success'
    const { checkout } = checkoutState;
    const result = await checkout.confirm();

    if (result.type === "error") {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      //redirected
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <AddressForm />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;

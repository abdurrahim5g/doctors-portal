import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);

const Payment = () => {
  const data = useLoaderData();
  // console.log(data);
  const { pashent, price, tritmentName } = data;

  return (
    <div className="payment-page">
      <h2 className="text-2xl font-semibold mb-3">Payment for {pashent}</h2>

      <div className="dashboard-content bg-white py-6 px-5 rounded-lg shadow-lg">
        <p>
          Please pay <strong>${price}</strong> for booking {tritmentName}
        </p>

        <div className="checkout-form-payment-page">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

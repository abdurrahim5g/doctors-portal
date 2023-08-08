/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ bookingInfo }) => {
  // destructure props
  const { price, pashent, email, _id } = bookingInfo;

  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  // props check
  //   console.log(bookingInfo);

  // State's
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setsuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // User your card element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: pashent,
            email: email,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("Paymentintent", paymentIntent);
    }

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        transationId: paymentIntent.id,
        amount: paymentIntent.amount,
        name: pashent,
        email: email,
        bookingId: _id,
      };

      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          headers: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setTransactionId(paymentIntent.id);
            setsuccess("Congrass! Your payment completed 😊");
            toast.success("Payment done successfuly ✔");
            navigate("/dashboard/my-appointments");
          }
        });
    }
    // when everything is done. Update processing false
    setProcessing(false);
  };

  return (
    <div className="checkout-form-client w-full md:w-1/2 lg:w-4/12 my-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="btn btn-sm btn-primary mt-5"
        >
          Pay
        </button>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        {transactionId && (
          <p className="text-green-500">
            Transaction Id: <strong>{transactionId}</strong>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useCart from "../../hooks/useCart";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart } = useCart();
  const totalPrice = cart?.reduce((total, item) => total + item?.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosPrivate
        .post("/users/payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res?.data?.clientSecret);
        });
    }
  }, [axiosPrivate, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error:", error);
      setError(error?.message);
    } else {
      console.log("Payment method:", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous@gmail.com",
          },
        },
      });
    if (confirmError) {
      console.log("Confirm error:", confirmError);
    } else {
      console.log("Payment intent:", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), //todo: utc date conversion by moment js
          cartIds: cart?.map((item) => item?._id),
          menuItemIds: cart?.map((item) => item?.menuId),
          status: "pending",
        };
        const res = await axiosPrivate.post("/users/payment-history", payment);
        if (res?.data?.paymentResult?.insertedId) {
          toast?.success("Payment successful!", {
            position: "top-right",
            theme: "colored",
          });
          navigate("/dashboard/payment-history");
        }
      }
    }
  };

  return (
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
        disabled={!stripe || !clientSecret}
        className="bg-yellow-600 disabled:bg-gray-300 px-3 py-1 rounded text-white"
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && (
        <p className="text-green-400">Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;

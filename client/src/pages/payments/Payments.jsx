import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_paymentPK);
const Payments = () => {
  return (
    <div>
      <Helmet>
        <title>Add Items | Bistro Boss</title>
      </Helmet>
      <SectionTitle heading="ADD AN ITEM" subHeading="What's new?" />
      <Container>
        <div className="bg-gray-100 shadow-xl min-h-screen p-12 mt-6">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </Container>
    </div>
  );
};

export default Payments;

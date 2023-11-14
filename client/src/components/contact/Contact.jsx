import { Link } from "react-router-dom";
import Container from "../container/Container";

const Contact = () => {
  return (
    <Container>
      <section className="bg-black text-white text-center p-5 md:p-10">
        <Link to="tel:+880 1406680846" className="md:text-3xl font-bold">
          Call Us: +880 1406680846
        </Link>
      </section>
    </Container>
  );
};

export default Contact;

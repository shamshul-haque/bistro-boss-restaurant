import about_bg from "../../assets/about/about.jpg";

const About = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${about_bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-fixed p-5 md:p-10 lg:p-20"
    >
      <div className="p-5 md:p-10 lg:p-20 text-center text-white space-y-3 hero-overlay bg-black bg-opacity-50">
        <h1 className="text-3xl font-bold uppercase">Bistro Boss</h1>
        <p>
          Welcome to Bistro Boss, your go-to destination for a culinary
          adventure! Indulge in a diverse array of mouthwatering recipes curated
          by seasoned chefs. From savory delights to sweet indulgences, Bistro
          Boss is your ultimate guide to the world of delicious dining. Join us
          in celebrating the art of cooking and elevate your culinary experience
          with Bistro Boss!
        </p>
      </div>
    </section>
  );
};

export default About;

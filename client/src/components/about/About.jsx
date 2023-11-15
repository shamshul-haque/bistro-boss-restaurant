import about_bg from "../../assets/about/about.jpg";
import Cover from "../cover/Cover";

const About = () => {
  return (
    <div>
      <Cover
        img={about_bg}
        title="Bistro Boss"
        desc="Welcome to Bistro Boss, your go-to destination for a culinary
          adventure! Indulge in a diverse array of mouthwatering recipes curated
          by seasoned chefs. From savory delights to sweet indulgences, Bistro
          Boss is your ultimate guide to the world of delicious dining. Join us
          in celebrating the art of cooking and elevate your culinary experience
          with Bistro Boss!"
      />
    </div>
  );
};

export default About;

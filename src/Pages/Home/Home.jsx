import Care from "./Care/Care";
import DoctorAppoinment from "./DoctorAppoinment/DoctorAppoinment";
import Hero from "./Hero/Hero";
import "./Home.css";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="Home-page">
      <Hero></Hero>
      <InfoCards></InfoCards>
      <Services></Services>
      <Care></Care>
      <DoctorAppoinment></DoctorAppoinment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

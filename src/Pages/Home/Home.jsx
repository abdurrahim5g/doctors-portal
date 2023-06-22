import Care from "./Care/Care";
import Hero from "./Hero/Hero";
import "./Home.css";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="Home-page">
      <Hero></Hero>
      <InfoCards></InfoCards>
      <Services></Services>
      <Care></Care>
    </div>
  );
};

export default Home;

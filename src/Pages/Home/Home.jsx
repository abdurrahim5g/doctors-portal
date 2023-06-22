import Hero from "./Hero/Hero";
import "./Home.css";
import InfoCards from "./InfoCards/InfoCards";

const Home = () => {
  return (
    <div className="Home-page">
      <Hero></Hero>
      <InfoCards></InfoCards>
    </div>
  );
};

export default Home;

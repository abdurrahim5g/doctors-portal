import "./Hero.css";
import heroBg from "../../../assets/images/bg.png";
import heroImage from "../../../assets/images/chair.png";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <section
      className="hero-section py-20 md:py-40"
      style={{ background: `url(${heroBg}) no-repeat center / cover` }}
    >
      <div className="site-container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hero-text">
              <h1 className="text-3xl lg:text-5xl font-bold leading-normal">
                Your New Smile Starts Here 😊
              </h1>
              <p className="my-6 mb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="hero-image">
              <figure>
                <img src={heroImage} alt="hero-image" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Button from "../../../components/Button/Button";
import "./Care.css";
import careImage from "../../../assets/images/treatment.png";

const Care = () => {
  return (
    <section className="care-section">
      <div className="site-container">
        <div className="row w-10/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="care-image">
              <figure>
                <img src={careImage} alt="care-image" className="rounded-lg" />
              </figure>
            </div>

            <div className="care-text">
              <h2 className="text-2xl lg:text-3xl font-bold leading-normal">
                Exceptional Dental Care, on Your Terms
              </h2>
              <p className="my-6 mb-10">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using Content here,
                content here, making it look like readable English. Many desktop
                publishing packages and web page
              </p>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Care;

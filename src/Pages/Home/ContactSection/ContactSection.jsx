import "./ContactSection.css";
import contactBG from "../../../assets/images/appointment.png";
import Heading from "../../../components/Heading/Heading";

const ContactSection = () => {
  return (
    <section
      className="contact-section py-20 md:py-40"
      style={{ background: `url(${contactBG}) no-repeat center / cover` }}
    >
      <div className="site-container">
        <div className="row">
          <div className="w-full md:w-2/4 mx-auto">
            <Heading
              className={"text-center text-white"}
              subtitle={"Contact Us"}
              title={"Stay connected with us"}
            ></Heading>

            <form action="#" className="contact-form mt-10 ">
              <div className="single-input">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="single-input">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="single-input">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="site-button btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

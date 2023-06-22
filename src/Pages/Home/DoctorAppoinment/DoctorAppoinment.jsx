import "./DoctorAppoinment.css";
import appoinmentBG from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import Button from "../../../components/Button/Button";
import Heading from "../../../components/Heading/Heading";

const DoctorAppoinment = () => {
  return (
    <section
      className="appoinment-section mt-40"
      style={{ background: `url(${appoinmentBG}) no-repeat center / cover` }}
    >
      <div className="site-container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="appoinment-image">
              <figure>
                <img src={doctor} alt="appoinment-image" className="-mt-20" />
              </figure>
            </div>

            <div className="appoinment-text pb-20 md:py-5">
              <Heading
                className={"text-white"}
                subtitle={"Appoinment"}
                title={"Make an appointment Today"}
              ></Heading>
              <p className="my-6 mb-10 text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the
              </p>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorAppoinment;

import Heading from "../../../components/Heading/Heading";
import "./Services.css";

// import services images
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesInfo = [
    {
      id: 1,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: fluoride,
    },
    {
      id: 2,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: cavity,
    },
    {
      id: 3,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: whitening,
    },
  ];

  return (
    <section className="services-section py-20 lg:py-28">
      <div className="site-container">
        <div className="row">
          <Heading
            subtitle={"Our services"}
            title={"Services We Provide"}
            className={"text-center"}
          ></Heading>
        </div>

        <div className="row mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesInfo?.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

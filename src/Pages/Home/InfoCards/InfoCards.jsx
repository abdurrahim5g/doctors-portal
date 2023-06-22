import "./InfoCards.css";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgClass: "site-gradient",
      icon: clock,
    },
    {
      id: 2,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgClass: "bg-accent",
      icon: marker,
    },
    {
      id: 3,
      title: "Contact us now",
      description: "+000 123 456789",
      bgClass: "site-gradient",
      icon: phone,
    },
  ];
  return (
    <section className="info-cards-section py-20 md:py-28">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardInfo?.map((info) => (
            <InfoCard key={info.id} info={info}></InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;

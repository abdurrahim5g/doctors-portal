/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const { title, desc, image } = service;

  return (
    <div className="service-card card  bg-base-100 shadow-md border hover:shadow-xl transition">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

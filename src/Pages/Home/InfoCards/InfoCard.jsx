/* eslint-disable react/prop-types */
const InfoCard = ({ info }) => {
  const { icon, title, description, bgClass } = info;
  return (
    <div className={`card card-side text-white shadow-xl px-6 ${bgClass}`}>
      <figure style={{ width: "60px", flex: "0 0 60px" }}>
        <img src={icon} alt={title} />
      </figure>
      <div className="card-body pr-0">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;

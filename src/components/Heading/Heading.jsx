/* eslint-disable react/prop-types */
import "./Heading.css";

const Heading = ({ subtitle, title, className }) => {
  return (
    <div className={`${className}`}>
      <h4 className="text-secondary text-xl lg:text-2xl">{subtitle}</h4>
      <h3 className="text-2xl lg:text-4xl font-bold mt-3 lg:mt-6">{title}</h3>
    </div>
  );
};

export default Heading;

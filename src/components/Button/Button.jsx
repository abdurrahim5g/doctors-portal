/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, to }) => {
  return (
    <Link to={to} className={`site-button`}>
      {children}
    </Link>
  );
};

export default Button;

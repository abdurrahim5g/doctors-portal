import { Link } from "react-router-dom";
import errorImg from "./error.jpg";
import "./ErrorElement.css";

const ErrorElement = () => {
  return (
    <section className="error-page">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center items-center">
          <div className="error-text text-center md:text-left">
            <h2 className="error-title ">Oops!</h2>
            <h3 className="text-2xl my-8">
              <strong>404</strong> - You got an error. Please logout and try
              again.
              <br /> OR Go to Homepage Page
            </h3>
            <div>
              <Link
                to={"/"}
                className="btn bg-[#FFC801] hover:opacity-80 hover:bg-[#FFC801]"
              >
                Go to Homepae
              </Link>
            </div>
          </div>
          <div className="error-image">
            <img
              src={errorImg}
              alt="Error image"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorElement;

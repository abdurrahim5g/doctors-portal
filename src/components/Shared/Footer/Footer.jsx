import { Link } from "react-router-dom";
import "./Footer.css";
import footerBg from "../../../assets/images/footer.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(0);
  useEffect(() => {
    const data = new Date();
    setYear(data.getFullYear());
  }, []);

  return (
    <footer
      className="p-14 md:py-20"
      style={{ background: `url(${footerBg}) no-repeat center / cover` }}
    >
      <div className="site-container">
        <div className="footer">
          <div>
            <span className="footer-title">Services</span>
            <Link to="/" className="link link-hover">
              Emergency Checkup
            </Link>
            <Link to="/" className="link link-hover">
              Monthly Checkup
            </Link>
            <Link to="/" className="link link-hover">
              Weekly Checkup
            </Link>
            <Link to="/" className="link link-hover">
              Deep Checkup
            </Link>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <Link to="/" className="link link-hover">
              Fluoride Treatment
            </Link>
            <Link to="/" className="link link-hover">
              Cavity Filling
            </Link>
            <Link to="/" className="link link-hover">
              Teath Whitening
            </Link>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <Link>New York - 101010 Hudson</Link>
          </div>
        </div>

        <div className="copyright text-center pt-10">
          <p>Copyright {year} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

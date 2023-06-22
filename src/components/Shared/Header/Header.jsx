import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);

  const menuItems = (
    <>
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/appointment">appointment</NavLink>
      <NavLink to="/reviews">reviews</NavLink>
      <NavLink to="/contact-us">contact us</NavLink>
      <NavLink to="/login">login</NavLink>
    </>
  );

  return (
    <header className="header-component">
      <div className="site-container">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link
              className="btn btn-ghost text-primary normal-case text-xl"
              to={"/"}
            >
              Doctors Portal
            </Link>
          </div>
          <div className="flex-none">
            <div className="mobile-menu-area md:hidden">
              <button
                className="btn p-3 py-0 text-xl leading-4"
                onClick={() => setShow(!show)}
              >
                <FaBars />
              </button>
              {show && (
                <div
                  className="absolute right-4 bg-white shadow-lg rounded-lg px-3 top-16 border-1 border"
                  onClick={() => setShow(!show)}
                >
                  <ul className="menu menu-vertical px-1 capitalize">
                    {menuItems}
                  </ul>
                </div>
              )}
            </div>

            <ul className="menu menu-horizontal px-1 capitalize header-menu hidden md:block">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

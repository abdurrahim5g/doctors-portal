import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useAuthContex } from "../../../Contex/AuthProvider";

const Header = () => {
  // Use AuthContex
  const { user } = useAuthContex();

  const [show, setShow] = useState(false);

  const menuItems = (
    <>
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/appointment">Appointment</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/contact-us">Contact us</NavLink>
      {!user?.uid ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <NavLink to="/dashboard">Dashboard</NavLink>
      )}
    </>
  );

  return (
    <header className="header-component shadow-lg z-50">
      <div className="site-container">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link className="btn btn-ghost  normal-case text-xl" to={"/"}>
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
                  <nav className="menu menu-vertical px-1 ">{menuItems}</nav>
                </div>
              )}
            </div>

            <nav className="menu menu-horizontal px-1  header-menu hidden md:block">
              {menuItems}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
            <ul className="menu menu-horizontal px-1 capitalize header-menu">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

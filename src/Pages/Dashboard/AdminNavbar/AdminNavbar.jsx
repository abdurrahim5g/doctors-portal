import "./AdminNavbar.css";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar-component admin-nav ">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/">All users</NavLink>
      <NavLink to="/">Add doctor</NavLink>
      <NavLink to="/">Manage Doctor</NavLink>
      <NavLink to="/">Home</NavLink>
      <button className="btn btn-accent m-7">Logout</button>
    </nav>
  );
};

export default AdminNavbar;

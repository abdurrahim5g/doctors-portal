import { toast } from "react-hot-toast";
import { useAuthContex } from "../../../Contex/AuthProvider";
import "./AdminNavbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  /** Use AuthContex */
  const { logOut } = useAuthContex();

  const navigate = useNavigate();

  /**
   *
   * Handle Logout
   */
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successfuly ✅");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <nav className="admin-navbar-component admin-nav ">
      <NavLink to="/dashboard/">Dashboard</NavLink>
      <NavLink to="/dashboard/my-appointments">My Appointments</NavLink>
      <NavLink to="/">All users</NavLink>
      <NavLink to="/">Add doctor</NavLink>
      <NavLink to="/">Manage Doctor</NavLink>
      <NavLink to="/">Home</NavLink>
      <button className="btn btn-accent m-7" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;

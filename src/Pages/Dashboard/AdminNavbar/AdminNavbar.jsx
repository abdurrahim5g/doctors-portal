import { toast } from "react-hot-toast";
import { useAuthContex } from "../../../Contex/AuthProvider";
import "./AdminNavbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const AdminNavbar = () => {
  /** Use AuthContex */
  const { logOut, user } = useAuthContex();

  const [isAdmin] = useAdmin(user?.email);

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

      {isAdmin && (
        <>
          <NavLink to="/dashboard/all-users">All users</NavLink>
          <NavLink to="/dashboard/add-doctor">Add Doctor</NavLink>
        </>
      )}

      <NavLink to="/">Go Home</NavLink>
      <button className="btn btn-accent m-7" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;

import { Outlet } from "react-router-dom";
import AdminNavbar from "../Pages/Dashboard/AdminNavbar/AdminNavbar";
import Header from "../components/Shared/Header/Header";

const Admin = () => {
  return (
    <>
      <Header></Header>

      <div
        className="admin-container border"
        style={{ background: "#F1F5F9", padding: "" }}
      >
        <div className="flex flex-wrap">
          <div className="admin-navbar w-[220px] max-w-[220px] flex-grow overflow-hidden bg-white">
            <AdminNavbar></AdminNavbar>
          </div>
          <div className="admin-content flex-1">
            <div className="admin-site-container p-8">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

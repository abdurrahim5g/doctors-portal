/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContex } from "../Contex/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loading from "../components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const location = useLocation();

  const { user } = useAuthContex();
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  console.log(isAdmin);

  if (isAdminLoading) {
    return <Loading />;
  }

  if (!isAdmin) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;

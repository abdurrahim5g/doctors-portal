/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContex } from "../Contex/AuthProvider";
import Loading from "../components/Loading/Loading";

const Protected = ({ children }) => {
  /**
   * Use AuthContex
   */
  const { user, loading } = useAuthContex();

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default Protected;

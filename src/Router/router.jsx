import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Reviews from "../Pages/Reviews/Reviews";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Admin from "../Layout/Admin";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Protected from "./Protected";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import UserAppointments from "../Pages/Dashboard/UserAppointments/UserAppointments";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorElement from "../components/Shared/ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: (
      <Protected>
        <Admin></Admin>
      </Protected>
    ),
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/dashboard/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "my-appointments",
        element: <UserAppointments />,
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "manage-doctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <AdminRoute>
            <Payment />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-cyan-theta.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

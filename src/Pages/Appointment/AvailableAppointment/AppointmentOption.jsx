import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContex } from "../../../Contex/AuthProvider";

/* eslint-disable react/prop-types */
const AppointmentOption = ({ option, setTritment }) => {
  // get the user from AuthContex
  const { user } = useAuthContex();
  // console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const { name, slots } = option;

  return (
    <div
      className="cardbg-base-100 shadow-xl rounded-lg"
      style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{slots?.length > 0 && slots[0]}</p>
        <p>{slots.length} spaces available</p>
        <div className="card-actions mt-4">
          <label
            htmlFor="booking_modal"
            className="btn site-gradient text-white border-0"
            disabled={slots.length === 0}
            onClick={() => {
              if (user !== null) {
                setTritment(option);
              } else {
                navigate("/login", {
                  state: { from: location },
                  replace: true,
                });
              }
            }}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

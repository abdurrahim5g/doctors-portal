/* eslint-disable react/prop-types */
import format from "date-fns/format";

const AvailableAppointment = ({ selectedDate }) => {
  return (
    <section className="available-appointment py-14 md:py-20">
      <div className="site-container">
        <div className="row">
          <h2 className="text-2xl text-center text-secondary">
            Available Appointments on {format(selectedDate, "PP")}
          </h2>
        </div>

        <div className="booking-row"></div>
      </div>
    </section>
  );
};

export default AvailableAppointment;

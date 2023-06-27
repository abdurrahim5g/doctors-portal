/* eslint-disable react/prop-types */
import format from "date-fns/format";
import { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BoolingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState();
  const [tritment, setTritment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appointmentOptions`)
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <section className="available-appointment py-14 md:py-20">
      <div className="site-container">
        <div className="row">
          <h2 className="text-2xl text-center text-secondary">
            Available Appointments on {format(selectedDate, "PP")}
          </h2>
        </div>

        <div className="booking-row mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appointmentOptions?.map((option) => (
              <AppointmentOption
                key={option._id}
                option={option}
                setTritment={setTritment}
              ></AppointmentOption>
            ))}
          </div>
        </div>

        {tritment && (
          <BookingModal
            tritment={tritment}
            selectedDate={selectedDate}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;

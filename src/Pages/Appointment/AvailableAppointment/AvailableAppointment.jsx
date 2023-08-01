/* eslint-disable react/prop-types */
import format from "date-fns/format";
import { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BoolingModal/BookingModal";
import { useQuery } from "react-query";

const AvailableAppointment = ({ selectedDate }) => {
  const [tritment, setTritment] = useState({});
  const formatedDate = format(selectedDate, "PP");

  const { data: appointmentOptions, refetch } = useQuery({
    queryKey: ["appointmentOptions", formatedDate],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${formatedDate}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="available-appointment py-14 md:py-20">
      <div className="site-container">
        <div className="row">
          <h2 className="text-2xl text-center text-accent font-semibold">
            Available Appointments on {formatedDate}
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
            setTritment={setTritment}
            selectedDate={selectedDate}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;

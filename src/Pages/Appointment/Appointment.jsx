import { useState } from "react";
import "./Appointment.css";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="Appointment-page">
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
    </div>
  );
};

export default Appointment;

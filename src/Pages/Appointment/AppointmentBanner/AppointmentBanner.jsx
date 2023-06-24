import { useState } from "react";
import appointmentBG from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import "./AppointmentBanner.css";

// daypicker import
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section
      className="hero-section py-20 md:py-40"
      style={{ background: `url(${appointmentBG}) no-repeat center / cover` }}
    >
      <div className="site-container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="day-picker">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </div>
            <div className="banner-image">
              <figure>
                <img src={chair} alt="banner-image" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;

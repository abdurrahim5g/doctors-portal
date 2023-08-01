import { format } from "date-fns";
import { useAuthContex } from "../../../Contex/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

/* eslint-disable react/prop-types */
const BookingModal = ({ tritment, selectedDate, setTritment }) => {
  // get user from AuthContex
  const { user } = useAuthContex();

  const { name: tritmentName, slots } = tritment;
  const appointmentData = format(selectedDate, "PP");

  // useForm from "react-hook-form"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBooking = (data) => {
    const bookingsData = {
      appointmentData,
      pashent: user?.displayName,
      email: user?.email,
      tritmentName,
      ...data,
    };
    console.log("Click");

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTritment(null);
          toast.success("Booking successfully ✅");
        } else {
          toast.error("Something is wrong. Please try again!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking_modal" className="modal-toggle" />

      <div className="modal ">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="booking_modal"
              className="btn btn-sm btn-circle btn-accent absolute right-2 top-2"
            >
              ✕
            </label>
          </div>

          <form onSubmit={handleSubmit(handleBooking)}>
            <h3 className="font-bold text-lg">{tritmentName}</h3>
            <div className="form-container mt-10">
              <div className="single-input mb-4">
                <div className="single-input mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    defaultValue={user?.displayName}
                    disabled
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="single-input mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue={user?.email}
                    disabled
                    className="input input-bordered w-full"
                  />
                </div>
                <input
                  type="text"
                  value={appointmentData}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="single-input mb-4">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  {...register("phone", { required: true })}
                />
                <p className="px-1 text-sm text-red-500">
                  {errors.phone && "Please provide your phone number."}
                </p>
              </div>
              <div className="single-input mb-4">
                <select
                  className="select select-bordered w-full"
                  defaultValue={"08.00 AM - 08.30 AM"}
                  {...register("slot", { required: true })}
                >
                  {slots?.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <p className="px-1 text-sm text-red-500">
                  {errors.slot && "Please select your available time."}
                </p>
              </div>
              <div className="single-input ">
                <input
                  type="submit"
                  className=" btn-accent w-full p-3 rounded-lg font-semibold cursor-pointer block"
                  value={"Submit"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

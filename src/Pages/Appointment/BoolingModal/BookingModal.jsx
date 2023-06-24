import { format } from "date-fns";

/* eslint-disable react/prop-types */
const BookingModal = ({ tritment, selectedDate }) => {
  const { name, slots } = tritment;

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Submit");
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

          <form onSubmit={() => handleBooking}>
            <h3 className="font-bold text-lg">{name}</h3>
            <div className="form-container mt-10">
              <div className="single-input mb-4">
                <input
                  type="text"
                  value={format(selectedDate, "PP")}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="single-input mb-4">
                <select className="select select-bordered w-full">
                  {slots?.map((slot, index) => (
                    <option key={index}>{slot}</option>
                  ))}
                </select>
              </div>
              <div className="single-input mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="single-input mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="single-input mb-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="single-input ">
                <input
                  type="submit"
                  className=" btn-accent w-full"
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

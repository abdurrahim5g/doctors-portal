/* eslint-disable react/prop-types */
import confirm from "./check.png";
import warning from "./warning.png";
import question from "./question-mark.png";

const Modal = ({ type, title, message, action = null }) => {
  return (
    <div>
      <dialog id="globalModal" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box text-center">
          <div className="w-24 rounded-full  mx-auto">
            <img
              src={
                (type === "warning" && warning) ||
                (type === "question" && question) ||
                confirm
              }
              alt="Action Image"
            />
          </div>

          <h3 className="font-bold text-lg mt-7">{title}!</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action justify-center">
            {action && (
              <button
                className="btn bg-red-500 text-white px-8 hover:bg-red-400 border-0"
                onClick={action}
              >
                Confirm
              </button>
            )}
            <button className="btn border-0 px-8">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;

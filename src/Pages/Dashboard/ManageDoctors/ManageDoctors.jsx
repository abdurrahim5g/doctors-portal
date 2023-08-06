import { useQuery } from "react-query";
import Loading from "../../../components/Loading/Loading";
import Modal from "../../../components/Shared/Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const ManageDoctors = () => {
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery(["doctors"], async () => {
    const res = await fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  });

  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const handleDoctorDelete = () => {
    const doctorID = deletingDoctor._id;
    fetch(`http://localhost:5000/doctors/${doctorID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result.acknowledged) {
          refetch();
          setDeleteConfirm(true);
          setDeletingDoctor(null);
          setTimeout(() => {
            window.globalModal.showModal();
          }, 1);
        }
      });
  };

  return (
    <div className="dashboard-page">
      <h2 className="text-2xl font-semibold mb-3">Manage Doctors</h2>

      <div className="dashboard-content bg-white py-8 px-8 rounded-lg shadow-lg">
        {isLoading && <Loading />}
        {!isLoading && doctors.length === 0 && (
          <p>
            No doctors found! Please{" "}
            <Link to={"/dashboard/add-doctor"} className="btn-link">
              Add Doctor.
            </Link>
          </p>
        )}
        {doctors.length > 0 && (
          <table className="table table-zebra table-pin-rows">
            <thead className="">
              <tr className="bg-gray-100 text-base">
                <th>SL/No</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Speciality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{++index}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded">
                        <img src={doctor.img} alt={doctor.name} />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.speciality}</td>
                  <td>
                    <label
                      htmlFor=""
                      onClick={() => {
                        setDeletingDoctor(doctor);
                        setTimeout(() => {
                          window.globalModal.showModal();
                        }, 1);
                      }} // show the modal
                      className="bg-red-600 text-white py-2 px-5 rounded shadow-md cursor-pointer hover:bg-red-500"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {deletingDoctor && (
        <Modal
          action={handleDoctorDelete}
          type="question"
          title={`Are you sure you want to delete ${deletingDoctor?.name}`}
          message="We can't backup this data. If you delete this you can't undo. Please click cancle. If you don't want to delete doctor"
        />
      )}

      {deleteConfirm && (
        <Modal type={"confirm"} title={"Doctor delete sucessfuly."} />
      )}
    </div>
  );
};

export default ManageDoctors;

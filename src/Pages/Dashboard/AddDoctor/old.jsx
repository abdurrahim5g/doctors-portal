import { useQuery } from "react-query";
import { useAuthContex } from "../../../Contex/AuthProvider";
import { useForm } from "react-hook-form";
// import { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import "./AddDoctor.css";

const AddDoctor = () => {
  // get user data from AuthContex
  const { user } = useAuthContex();

  // imageBB API key
  const imagebbAPI = import.meta.env.VITE_imagebb_api;

  const { data: speciality = [] } = useQuery(["speciality"], async () => {
    const res = await fetch(
      `http://localhost:5000/speciality?email=${user?.email}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  });

  /**
   * Handle add doctor
   */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    // const avatar = data.avatar[0];
    const formData = new FormData();
    formData.append("doctorImage", data.avatar[0]);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imagebbAPI}`;
    // console.log(formData, avatar);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
      });

    // console.log(new FormData());
  };

  return (
    <div className="dashboard-page">
      <h2 className="text-2xl font-semibold mb-3">Add a Doctor</h2>

      <div className="dashboard-content bg-white py-8 px-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full mb-6 max-w-lg">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("doctorName", { required: true })}
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-lg"
            />
            <p className="text-red-500">
              {errors?.doctorName && "Name is require."}
            </p>
          </div>
          <div className="form-control w-full mb-6 max-w-lg ">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("doctorEmail", { required: true })}
              placeholder="Enter Yout Email"
              className="input input-bordered w-full max-w-lg"
            />
            <p className="text-red-500">
              {errors?.doctorEmail && "Eamil is require. "}
            </p>
          </div>
          <div className="form-control w-full mb-6 max-w-lg">
            <label className="label" htmlFor="speciality">
              Speciality
            </label>
            <select
              className="select select-bordered w-full max-w-lg font-normal"
              id="speciality"
              defaultValue={0}
              {...register("doctorSpeciality", { required: true })}
            >
              <option disabled value={0}>
                Picked one speciality.
              </option>
              {speciality?.map((talent) => (
                <option key={talent._id} value={talent.name}>
                  {talent.name}
                </option>
              ))}
            </select>
            {/* <p className="text-red-500">{formError.doctorSpeciality}</p> */}
          </div>
          <div className="form-control w-full mb-6 max-w-lg">
            <label
              className="label block text-center doctor-avatar"
              htmlFor="avatar"
            >
              Select doctor photo <br />
              <FaRegImage />
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              {...register("avatar", { required: true })}
              hidden
            />
            <p className="text-red-500">
              {errors.avatar && "Please select doctor avatar."}
            </p>
          </div>

          <div className="form-control w-full mb-6  max-w-lg">
            <button className="btn btn-neutral">Add Doctor</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;

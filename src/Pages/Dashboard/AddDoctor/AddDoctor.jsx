import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import "./AddDoctor.css";
import { toast } from "react-hot-toast";

const AddDoctor = () => {
  // imageBB API key
  const imagebbAPI = import.meta.env.VITE_imagebb_api;

  const { data: speciality = [] } = useQuery(["speciality"], async () => {
    const res = await fetch(`http://localhost:5000/speciality`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();
    return data;
  });

  /**
   * Handle add doctor
   */
  const [formError, setFormError] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    const avatar = data.avatar[0];
    const formData = new FormData();
    formData.append("image", avatar);
    const url = `https://api.imgbb.com/1/upload?key=${imagebbAPI}`;
    // console.log(formData, avatar);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: imageData.data.url,
          };
          fetch(`http://localhost:5000/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                reset();
                toast.success(`${doctor.name} added successfuly ✔`);
              }
            });
        }
      });

    if (data.speciality == 0) {
      setFormError({ speciality: "Please select a speciality" });
    } else {
      setFormError({});
    }

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
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-lg"
            />
            <p className="text-red-500">{errors?.name && "Name is require."}</p>
          </div>
          <div className="form-control w-full mb-6 max-w-lg ">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Yout Email"
              className="input input-bordered w-full max-w-lg"
            />
            <p className="text-red-500">
              {errors?.email && "Eamil is require. "}
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
              {...register("speciality", { required: true })}
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
            <p className="text-red-500">{formError.speciality}</p>
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

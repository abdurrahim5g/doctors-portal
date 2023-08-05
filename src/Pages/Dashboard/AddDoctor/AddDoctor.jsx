import { useQuery } from "react-query";
import { useAuthContex } from "../../../Contex/AuthProvider";

const AddDoctor = () => {
  // get user data from AuthContex
  const { user } = useAuthContex();

  const { data: speciality = [] } = useQuery(["speciality"], async () => {
    const res = await fetch(
      `http://localhost:5000/speciality?email=${user?.email}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  });

  return (
    <div className="dashboard-page">
      <h2 className="text-2xl font-semibold mb-3">Add a Doctor</h2>

      <div className="dashboard-content bg-white py-8 px-8 rounded-lg shadow-lg">
        <form>
          <div className="form-control w-full mb-6 max-w-lg">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full mb-6 max-w-lg ">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Yout Email"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full mb-6 max-w-lg">
            <label className="label" htmlFor="speciality">
              Speciality
            </label>
            <select
              className="select select-bordered w-full max-w-lg font-normal"
              id="speciality"
              defaultValue={0}
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

import { useQuery } from "react-query";
import Loading from "../../../components/Loading/Loading";

const ManageDoctors = () => {
  const { data: doctors = [], isLoading } = useQuery(["doctors"], async () => {
    const res = await fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  });
  return (
    <div className="dashboard-page">
      <h2 className="text-2xl font-semibold mb-3">Manage Doctors</h2>

      <div className="dashboard-content bg-white py-8 px-8 rounded-lg shadow-lg">
        {isLoading && <Loading />}
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
    </div>
  );
};

export default ManageDoctors;

import { useQuery } from "react-query";
import { useAuthContex } from "../../../Contex/AuthProvider";
import Loading from "../../../components/Loading/Loading";

const UserAppointments = () => {
  const { user } = useAuthContex();

  const { data, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  //   console.log(data);

  return (
    <div className="dashboard-page">
      <h2 className="text-2xl font-semibold mb-3">My Appointments</h2>
      <h3 className="leading-loose">Email Address: {user?.email}</h3>

      <div className="dashboard-content bg-white py-6 px-5 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          {isLoading && <Loading />}
          {data?.length ? (
            <table className="table table-zebra">
              {/* head */}
              <thead className="font-bold bg-gray-200 text-black">
                <tr>
                  <th>#SL</th>
                  <th>Name</th>
                  <th>Tritment</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time Slot</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((single, index) => (
                  <tr key={single._id}>
                    <th>#{++index}</th>
                    <td>{single.pashent}</td>
                    <td>{single.tritmentName}</td>
                    <td>{single.phone}</td>
                    <td>{single.appointmentDate}</td>
                    <td>{single.slot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3 className="text-center font-medium">No appointments found</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;

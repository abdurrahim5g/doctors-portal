import { useQuery } from "react-query";
import { useAuthContex } from "../../../Contex/AuthProvider";
import Loading from "../../../components/Loading/Loading";
import { Link } from "react-router-dom";

const UserAppointments = () => {
  const { user } = useAuthContex();

  const { data, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  //   console.log(data);

  return (
    <div className="dashboard-page">
      <h2 className="text-2xl font-semibold mb-3">My Appointments</h2>

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
                  <th>Pay</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((booking, index) => (
                  <tr key={booking._id}>
                    <th>#{++index}</th>
                    <td>{booking.pashent}</td>
                    <td>{booking.tritmentName}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.slot}</td>
                    <td>
                      {booking.price && !booking.paid && (
                        <Link
                          className="btn btn-xs btn-secondary"
                          to={`/dashboard/payment/${booking._id}`}
                        >
                          Pay ${booking.price}
                        </Link>
                      )}
                      {booking?.paid && (
                        <div className="badge badge-primary">Paid</div>
                      )}
                    </td>
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

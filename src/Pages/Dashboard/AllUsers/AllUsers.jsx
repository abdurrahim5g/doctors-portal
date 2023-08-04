import { useQuery } from "react-query";
import "./AllUsers.css";
import Loading from "../../../components/Loading/Loading";
const AllUsers = () => {
  const { data: users = [], isLoading } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return data;
  });

  return (
    <div className="all-users-page">
      <h2 className="text-2xl font-semibold mb-3">All Users</h2>

      <div className="dashboard-content">
        <div className="users-table bg-white rounded-lg p-5">
          <div className="overflow-x-auto">
            {isLoading && <Loading />}
            {!isLoading && users.length === 0 && <h3>No users found</h3>}

            {users.length > 0 && (
              <table className="table table-zebra table-pin-rows">
                <thead className="bg-gray-100">
                  <tr>
                    <th>SL/No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Make Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <tr key={user._id}>
                      <th>{++index}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role || "Visitors"}</td>
                      <td>
                        {user.role !== "admin" && (
                          <button className="btn btn-success btn-xs">
                            Make Admin
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

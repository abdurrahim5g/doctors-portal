import { useQuery } from "react-query";
import "./AllUsers.css";
import Loading from "../../../components/Loading/Loading";
import { toast } from "react-hot-toast";
import { useAuthContex } from "../../../Contex/AuthProvider";
const AllUsers = () => {
  const { user: currentUser } = useAuthContex();
  // get users data
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery(["users"], async () => {
    const res = await fetch(
      `http://localhost:5000/users?email=${currentUser.email}`
    );
    const data = await res.json();
    return data;
  });

  // handle Make Admin
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/make-admin?id=${id}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { modifiedCount, acknowledged } = data;
        if (modifiedCount && acknowledged) {
          toast.success("Make admin sucessfuly ✔");
          refetch();
        } else {
          toast.error(data.message || "Something is wrong please try again");
        }
      });
  };

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
                <thead className="">
                  <tr className="bg-gray-100 text-base">
                    <th>SL/No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <tr key={user._id}>
                      <th>{++index}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td className="capitalize">{user.role || "Visitors"}</td>
                      <td>
                        {user.role !== "admin" && (
                          <button
                            className="btn btn-success btn-xs text-xs"
                            onClick={() => handleMakeAdmin(user._id)}
                          >
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

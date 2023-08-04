import { useAuthContex } from "../../../Contex/AuthProvider";

const Dashboard = () => {
  const { user } = useAuthContex();
  return (
    <div className="dashboard-page">
      <h2 className="text-2xl font-semibold mb-3">Dashboard</h2>

      <div className="dashboard-content">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <div className="user-info leading-loose">
            <figure>
              <img
                src={user.photoURL}
                alt={user?.displayName}
                className="border w-28"
              />
            </figure>
            <p>
              <strong>Name: </strong> {user?.displayName}
            </p>
            <p>
              <strong>Email: </strong> {user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

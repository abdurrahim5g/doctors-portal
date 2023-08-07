import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="payment-page">
      <h2 className="text-2xl font-semibold mb-3">Payment</h2>

      <div className="dashboard-content bg-white py-6 px-5 rounded-lg shadow-lg"></div>
    </div>
  );
};

export default Payment;

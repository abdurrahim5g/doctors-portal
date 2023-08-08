import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  const { pashent, price, tritmentName } = data;

  return (
    <div className="payment-page">
      <h2 className="text-2xl font-semibold mb-3">Payment for {pashent}</h2>

      <div className="dashboard-content bg-white py-6 px-5 rounded-lg shadow-lg">
        <p>
          Please pay <strong>${price}</strong> for booking {tritmentName}
        </p>
      </div>
    </div>
  );
};

export default Payment;

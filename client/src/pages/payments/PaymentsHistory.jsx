import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const PaymentsHistory = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();

  const {
    data: payments,
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["payments"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/users/payment-history/${user.email}`
      );
      return res?.data;
    },
  });
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }

  return (
    <div className="my-12">
      <Helmet>
        <title>All Users | Bistro Boss</title>
      </Helmet>
      <SectionTitle heading="PAYMENT HISTORY" subHeading="At a Glance!" />
      <Container>
        <div className="bg-white shadow-xl min-h-screen p-12 mt-6">
          <div className="uppercase">
            <h2 className="font-bold">Total Payments: </h2>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="table">
              <thead className="bg-yellow-600">
                <tr className="uppercase text-white">
                  <th>Sl</th>
                  <th>Price</th>
                  <th>Transaction Id</th>
                  <th>Payment Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>$ {payment?.price}</td>
                    <td>{payment?.transactionId}</td>
                    <td>{payment?.date}</td>
                    <td>{payment?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentsHistory;

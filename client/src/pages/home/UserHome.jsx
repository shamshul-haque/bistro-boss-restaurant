import useAuth from "../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <h1>Hi, Welcome Back!</h1>
    </div>
  );
};

export default UserHome;

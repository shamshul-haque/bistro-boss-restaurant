import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth_bg from "../../assets/auth/auth_bg.png";
import auth_img from "../../assets/auth/auth_img.png";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { loginUser, logoutUser } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    try {
      const user = await loginUser(data?.email, data?.password);
      const res = await axiosPrivate.post("/users/access-token", {
        email: user?.user?.email,
      });
      if (res?.data?.success) {
        toast?.success("Login successful!", {
          position: "top-right",
          theme: "colored",
        });
        if (user) {
          navigate(from, {
            replace: true,
          });
        }
      } else {
        logoutUser();
      }
    } catch (err) {
      toast?.error(err?.code, {
        position: "top-right",
        theme: "colored",
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${auth_bg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[100vh] flex justify-center items-center"
    >
      <Helmet>
        <title>Login | Bistro Boss</title>
      </Helmet>

      <div
        style={{
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
        }}
        className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 p-5 md:p-10 m-5 md:m-10"
      >
        <div className="flex-1 w-full">
          <img src={auth_img} alt="auth_img" />
        </div>
        <div className="flex-1 w-full">
          <h1 className="text-4xl font-bold text-center uppercase">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
            <div className="form-control space-y-1">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="outline-0 border p-2 rounded text-sm"
              />
              {errors?.email?.type === "required" && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control space-y-1">
              <label>Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Type your password"
                className="outline-0 border p-2 rounded text-sm"
              />
              {errors?.password?.type === "required" && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Login"
                className="bg-yellow-600 p-2 rounded uppercase text-white font-medium disabled:bg-slate-200 cursor-pointer"
              />
            </div>
          </form>
          <p className="text-sm text-center pt-5">
            <span>New Here? </span>
            <Link
              to="/register"
              className="text-yellow-600 hover:underline font-medium"
            >
              Create new account
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;

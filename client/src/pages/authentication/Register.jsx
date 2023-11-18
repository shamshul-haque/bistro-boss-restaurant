import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth_bg from "../../assets/auth/auth_bg.png";
import auth_img from "../../assets/auth/auth_img.png";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data?.email, data?.password).then((result) => {
      console.log(result.user);
    });
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
        <title>Register | Bistro Boss</title>
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
          <h1 className="text-4xl font-bold text-center uppercase">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
            <div className="form-control space-y-1">
              <label>Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className="outline-0 border p-2 rounded text-sm"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control space-y-1">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="outline-0 border p-2 rounded text-sm"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control space-y-1">
              <label>Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                })}
                placeholder="Type your password"
                className="outline-0 border p-2 rounded text-sm"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  Password must be 8 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  Password should contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character..
                </span>
              )}
            </div>
            <div className="form-control space-y-1">
              <label>Profile Picture</label>
              <input
                type="url"
                {...register("photo")}
                placeholder="Upload your photo"
                className="outline-0 border p-2 rounded text-sm"
              />
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Sign Up"
                className="bg-yellow-600 transition-all duration-500 p-2 rounded uppercase text-white font-medium disabled:bg-slate-200 cursor-pointer"
              />
            </div>
          </form>
          <p className="text-sm text-center pt-5">
            <span>Already Registered? </span>
            <Link
              to="/login"
              className="text-yellow-600 hover:underline font-medium"
            >
              Go to login
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;

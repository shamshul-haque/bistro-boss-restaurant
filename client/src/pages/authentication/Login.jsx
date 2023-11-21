import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import auth_bg from "../../assets/auth/auth_bg.png";
import auth_img from "../../assets/auth/auth_img.png";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { loginUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    loginUser(email, password).then((result) => {
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
      className="flex justify-center items-center"
    >
      <Helmet>
        <title>Login | Bistro Boss</title>
      </Helmet>

      <div
        style={{
          backgroundImage: `url(${auth_bg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
        }}
        className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 p-5 md:p-10 m-5 md:m-10"
      >
        <div className="flex-1 w-full">
          <img src={auth_img} alt="auth_img" />
        </div>
        <div className="flex-1 w-full">
          <h1 className="text-4xl font-bold text-center uppercase">Login</h1>
          <form onSubmit={handleLogin} className="space-y-5 w-full">
            <div className="form-control space-y-1">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="outline-0 border p-2 rounded text-sm"
                required
              />
            </div>
            <div className="form-control space-y-1">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                className="outline-0 border p-2 rounded text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Login"
                className="bg-yellow-600 transition-all duration-500 p-2 rounded uppercase text-white font-medium disabled:bg-slate-200"
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

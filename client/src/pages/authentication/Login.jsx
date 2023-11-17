import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import auth_bg from "../../assets/auth/auth_bg.png";
import auth_img from "../../assets/auth/auth_img.png";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${auth_bg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen flex justify-center items-center"
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
        }}
        className="shadow-2xl flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:p-20"
      >
        <div className="flex-1">
          <img src={auth_img} alt="" />
        </div>
        <div className="flex-1 ">
          <h1 className="text-2xl font-bold text-center uppercase">Login</h1>
          <form
            onSubmit={handleLogin}
            className="mt-5 space-y-5 md:w-3/4 md:mx-auto"
          >
            <div className="form-control space-y-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="outline-0 border p-2 rounded text-sm"
                required
              />
            </div>
            <div className="form-control space-y-2">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                className="outline-0 border p-2 rounded text-sm"
                required
              />
            </div>
            <div className="form-control space-y-2">
              <label>
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Type the captcha"
                className="outline-0 border p-2 rounded text-sm"
                required
              />
            </div>
            <div className="form-control">
              <button
                disabled={disabled}
                className="bg-yellow-600 transition-all duration-500 p-2 rounded uppercase text-white font-medium disabled:bg-slate-200"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center pt-5">
            <span>New Here? </span>
            <Link
              to="/register"
              className="text-yellow-600 hover:underline font-medium"
            >
              Create New Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

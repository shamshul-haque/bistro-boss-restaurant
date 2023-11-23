import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin, logoutUser } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const handleGoogleLogin = async () => {
    try {
      const user = await googleLogin();
      const res = await axiosPrivate.post("/users/access-token", {
        email: user?.user?.email,
      });
      if (res?.data?.success) {
        const userInfo = {
          name: user?.user?.displayName,
          email: user?.user?.email,
        };
        axiosPublic.post("/users", userInfo);
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
    <div className="mt-5 space-y-3">
      <h2 className="text-xl text-center">Or Sign in With</h2>
      <div className="flex text-xl items-center justify-center gap-5">
        <Link
          to="#"
          className="border border-black p-2 rounded-full hover:text-yellow-600 hover:border-yellow-600 transition-all duration-500"
        >
          <FaFacebookF />
        </Link>
        <button
          onClick={handleGoogleLogin}
          className="border border-black p-2 rounded-full hover:text-yellow-600 hover:border-yellow-600 transition-all duration-500"
        >
          <FaGoogle />
        </button>
        <Link
          to="#"
          className="border border-black p-2 rounded-full hover:text-yellow-600 hover:border-yellow-600 transition-all duration-500"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;

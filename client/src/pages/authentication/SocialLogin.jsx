import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLogin = () => {
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
        <Link
          to="#"
          className="border border-black p-2 rounded-full hover:text-yellow-600 hover:border-yellow-600 transition-all duration-500"
        >
          <FaGoogle />
        </Link>
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

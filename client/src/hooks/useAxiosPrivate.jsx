import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";

const axiosPrivate = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxiosPrivate = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  axiosPrivate?.interceptors?.response?.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error?.response?.status === 401 || error.response.status === 403) {
        logoutUser();
        toast?.warning("Access expired. Login please!", {
          position: "top-right",
          theme: "colored",
        });
        axiosPrivate.post("/users/logout");
        navigate("/login");
      }
    }
  );

  return axiosPrivate;
};

export default useAxiosPrivate;

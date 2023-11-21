import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const useAxiosPrivate = () => {
  return axiosPrivate;
};

export default useAxiosPrivate;

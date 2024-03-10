import axios from "axios";
import { signOut } from "firebase/auth";
import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
// import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_URL}`,
  withCredentials: true,
});
const useAxios = () => {
  const navigate = useNavigate();
  const { auth, setUser, setLoading } = useAuth();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // console.log("Tracked in the Axios Interceptor - ", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("useAxios Problem - ", error.response.status);
          signOut(auth)
            .then(() => {
              setUser(null);
              setLoading(true);
              navigate("/login");
            })
            .catch();
        }
      }
    );
  }, [auth, setLoading,setUser,navigate]);
  return axiosInstance;
};

export default useAxios;
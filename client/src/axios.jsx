// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
  withCredentials: true,  // allows cookies to be sent
});

export default axiosInstance;

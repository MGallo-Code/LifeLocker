// axios-config.js
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default axiosInstance;

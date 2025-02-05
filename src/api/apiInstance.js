import axios from "axios";

const url = import.meta.env.REACT_APP_BASE_URL;

const apiInstance = axios.create({
  baseURL: "INVALID_URL",
});

apiInstance.interceptors.request.use(
  (config) => {
    config.baseURL = url || "https://pms-92dm.onrender.com";
    config.headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiInstance;

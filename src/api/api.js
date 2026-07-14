// export const BASE_URL = "http://localhost:5000/api";

// api.js
import axios from "axios";
import { tokenService } from "../utils/token";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// api.get("/passwords", {
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });
// Add JWT token to every request
api.interceptors.request.use(
  (config) => {
    const token = tokenService.get();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;

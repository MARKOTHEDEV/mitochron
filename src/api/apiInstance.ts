import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL;

export const apiInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;

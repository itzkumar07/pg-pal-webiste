import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost/pg-pal-backend/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = (data) => API.post("/auth/register.php", data);
export const loginUser = (data) => API.post("/auth/login.php", data);

export const addProperty = (data) => API.post("/property/add_property.php", data);
export const getProperties = () => API.get("/property/properties.php");

export default API;

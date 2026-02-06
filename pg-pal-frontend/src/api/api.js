import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost/pg-pal-backend/api",
});

export const registerUser = (data) => API.post("/register.php", data);
export const loginUser = (data) => API.post("/login.php", data);
export const addProperty = (data) => API.post("/add_property.php", data);
export const getProperties = () => API.get("/properties.php");

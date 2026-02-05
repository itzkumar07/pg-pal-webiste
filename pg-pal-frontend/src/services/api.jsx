import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/pg-pal-backend/api"
});

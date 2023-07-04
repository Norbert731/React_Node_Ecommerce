import axios from "axios";

const req = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

export default req;

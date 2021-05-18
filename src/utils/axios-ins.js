import axios from "axios";

const axiosIns = axios.create({
  baseURL: "http://ecommerce-web-site-5.herokuapp.com/",
  responseType: "json",
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});
export default axiosIns;

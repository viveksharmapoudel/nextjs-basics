import axios from "axios";

const instance = axios.create({
  baseURL: " 192.168.1.71:8080/article-api",
});

export default instance;

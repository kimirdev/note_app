import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  }
});


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  console.log(token, "TOKEN")

  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
})
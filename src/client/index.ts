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

  // config.headers.Cookie = 'csrftoken=76kyGObEjEVcjG8J4OOLhHPdboI1HYxhOybjLq4AtDZeLmxJZi0mqTPW8omThGDp'

  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // config.withCredentials = true;
  return config;
})

instance.defaults.headers.common["X-CSRFToken"] = document.querySelector('meta[name="csrf-token"]')?.textContent
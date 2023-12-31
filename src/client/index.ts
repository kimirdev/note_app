import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
})

axios.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
  localStorage.removeItem('token')
  window.location.reload()
 }
 return error;
});

instance.defaults.headers.common["X-CSRFToken"] = document.querySelector('meta[name="csrf-token"]')?.textContent
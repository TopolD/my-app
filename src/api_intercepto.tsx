import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("bearer");
  if (!token) {
    return Promise.reject(new Error("Пользователь не залогинен"));
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      try {
        const refresh = await api.get("/auth/refresh", {
          withCredentials: true,
        });
        localStorage.setItem("bearer", refresh.data);
        error.config.headers.Authorization = `Bearer ${refresh.data}`;
        return api.request(error.config);
      } catch {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;

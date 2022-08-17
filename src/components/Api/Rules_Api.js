import axios from "axios";

const pliegosAPI = axios.create({
  baseURL: process.env.REACT_APP_URL_WS,
  headers: { "Content-Type": "aplication/json" },
});

pliegosAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["--Token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

pliegosAPI.interceptors.response.use(
  (response) => {
    const originalRequest = response.config;
    if (response.data.statusCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios
        .get(`${window._env_.REACT_APP_URL_WS}/v1/Usuario/RefreshToken`, {
          headers: { "--Token": localStorage.getItem("refreshToken") },
        })
        .then((res) => {
          if (res.status === 200 && res.data && res.data.return) {
            originalRequest._retry = false;
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            const { token, refreshToken } = res.data.return;
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);
            pliegosAPI.defaults.headers.common["--Token"] = token;
            return pliegosAPI(originalRequest);
          } else {
            return pliegosAPI(originalRequest);
          }
        });
    }
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios
        .get(`${window._env_.REACT_APP_URL_WS}/v1/Usuario/RefreshToken`, {
          headers: { "--Token": localStorage.getItem("refreshToken") },
        })
        .then((res) => {
          if (res.status === 200 && res.data && res.data.return) {
            originalRequest._retry = false;
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            const { token, refreshToken } = res.data.return;
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);
            pliegosAPI.defaults.headers.common["--Token"] = token;
            return pliegosAPI(originalRequest);
          } else {
            return pliegosAPI(originalRequest);
          }
        });
    }
    if (error.response.status === 403) {
      return Promise.reject(
        "No tiene el permiso necesario para realizar esta operaciÃ³n"
      );
    }
  }
);

export default pliegosAPI;

import axios from "axios";

export function login(data) {
    const { email, password } = data;
    return axios
      .post("https://wine-app-backend.vercel.app/api/user/login", { email, password })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("jwt", JSON.stringify(response.data.token));
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
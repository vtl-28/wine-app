import axios from "axios";

export function fetchWines() {
    return axios.get("http://localhost:3001/api/wine/list", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("jwt").replace(/"/g, ""),
        },
      }).then((response) => {
        console.log(response)
        return response.data;
      }).catch((error) => {
        return error.response.data;
      });
  }
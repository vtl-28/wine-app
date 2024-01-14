import axios from "axios";

export function fetch_wines() {
    return axios.get("http://localhost:3001/api/wine/list", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("jwt").replace(/"/g, ""),
        },
      }).then((response) => {
        return response.data;
      }).catch((error) => {
        return error.response.data;
      });
  }

  export function add_wine(data) {
    return axios
      .post("http://localhost:3001/api/wine/add", data, {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("jwt").replace(/"/g, ""),
        },
      })
      .then((response) => {
        
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  export function update_wine(id, data) {
    return axios
      .put(`http://localhost:3001/api/wine/edit/${id}`, data, {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("jwt").replace(/"/g, ""),
        },
      })
      .then((response) => {
        console.log(response)
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  export function fetch_wine(id) {
    return axios
      .get(`http://localhost:3001/api/wine/${id}`, {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("jwt").replace(/"/g, ""),
        },
      })
      .then((response) => {
        console.log(response)
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
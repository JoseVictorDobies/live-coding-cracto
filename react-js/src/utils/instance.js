import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 10000,
});

instance.interceptors.response.use(
  function (response) {
    if (response.data) {
      const data = response.data;
      if (data.message) {
        const { message } = data;
        console.log(message);
      }
    }
    return response;
  },
  function (error) {
    if (error.response.data) {
      const data = error.response.data;
      if (data.message) {
        const { message } = data;
        console.log(message);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;

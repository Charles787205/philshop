import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const login = async ({ username, password }) => {
  const user = {
    username: username,
    password: password,
  };

  try {
    const { data } = await axios.post(BASE_URL + "token/", user);
    localStorage.clear();
    console.log(data);
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);

    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    window.location.href = "/home";
  } catch (err) {
    console.log(err);
  }
};

export default login;

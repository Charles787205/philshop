import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const logout = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  if (refresh_token !== null) {
    const response = await axios.post(BASE_URL + "logout/", {
      refresh_token: refresh_token,
    });
    console.log(response);
    if (response.status == 205) {
      localStorage.clear();
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/home";
    }
  } else {
    console.log("User is already logged out/");
  }
};

export default logout;

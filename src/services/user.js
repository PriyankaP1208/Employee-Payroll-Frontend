import Axios from "axios";
require("dotenv").config();

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

class User {
  login = (loginDetails) => {
    return Axios.post(`/login`, loginDetails);
  };

  register = (userDetails) => {
    return Axios.post(`/register`, userDetails);
  };
};

export default User;
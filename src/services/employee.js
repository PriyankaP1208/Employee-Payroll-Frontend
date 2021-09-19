import Axios from "axios";
require("dotenv").config();

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

class Employee {
  addEmployee = (employeeDetails) => {
    return Axios.post(`/addEmployee`, employeeDetails);
  };
};

export default Employee;
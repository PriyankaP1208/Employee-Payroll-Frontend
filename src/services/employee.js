import Axios from "axios";
require("dotenv").config();
let token = localStorage.getItem("token");

const header = {
  headers: {
    token: token,
  },
};

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

class Employee {
  addEmployee = (employeeDetails) => {
    return Axios.post(`/addEmployee`, employeeDetails, header);
  };

  getEmployees = () => {
    return Axios.get(`/getEmployees`, header);
  };

  deleteEmployee = (empId) => {
    return Axios.delete(`/deleteEmployee/${empId}`, header);
  };
};

export default Employee;
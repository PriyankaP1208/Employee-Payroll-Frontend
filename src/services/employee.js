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

  getAllEmployees = ()=>{
      return Axios.get(`/getEmployees`, header);
    };
};

export default Employee;
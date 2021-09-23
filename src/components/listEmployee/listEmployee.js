import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  Employee  from '../../services/employee'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ToastContainer, toast } from "react-toastify";
import { Grid} from "@material-ui/core";
//import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
const employee = new Employee();

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const tableStyle = {
  padding: "30px 20px",
  width: 1200,
  margin: "10px 10px",
  elevation: 10
}

export default function ListEmployees({ handleUpdate}) {
  //const actionStyle = { color: "black", margin: "10px 0px 10px 15px"};
  let [employees, setEmployees] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const loadEmployees = () => {
    employee.getEmployees().then((response) => {
      if (response.data.success === true) {
        setEmployees(response.data.data);
      }
      else {
        toast.error("Some error occurred!");
      }
    }).catch((error) => {
      toast.error(error);
    });
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const deleteEmp = (empId) => {
    employee.deleteEmployee(empId).then(res => {
        toast.success("Employee Deleted!")
        loadEmployees();
    }).catch(error => {
        toast.error(error.message);
    })
    
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <TableContainer data-testid="tableContainer" component={Paper} style={tableStyle}>
        <Table data-testid="table" className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow data-testid="tableRowHeader">
              <StyledTableCell data-testid="firstName">First Name</StyledTableCell>
              <StyledTableCell data-testid="lastName">Last Name</StyledTableCell>
              <StyledTableCell data-testid="email">Email</StyledTableCell>
              <StyledTableCell data-testid="gender">Gender</StyledTableCell>
              <StyledTableCell data-testid="salary">Salary</StyledTableCell>
              <StyledTableCell data-testid="department">Department</StyledTableCell>
              <StyledTableCell data-testid="action">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="tableBody">
            {employees.map((employee) => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  {employee.firstName}
                </StyledTableCell>
                <StyledTableCell >{employee.lastName}</StyledTableCell>
                <StyledTableCell >{employee.emailId}</StyledTableCell>
                <StyledTableCell >{employee.gender}</StyledTableCell>
                <StyledTableCell >{employee.salary}</StyledTableCell>
                <StyledTableCell >{employee.department}</StyledTableCell>
                
                <StyledTableCell >
                <EditIcon onClick={() => {
                      handleUpdate(employee);
                  }}/>
                  <DeleteIcon onClick={()=>{
                      deleteEmp(employee._id)
                  }}/>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            <ToastContainer
              position='top-center'
            />
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={open}
        onClose={handleClose}
      />
    </Grid>
  );
}
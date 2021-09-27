import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Grid, IconButton } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";

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

export default function List({ handleUpdate, deleteEmp, employees }) {
  const actionStyle = { color: "black", margin: "10px 0px 10px 15px" };

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

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
              <StyledTableCell data-testid="actions">
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="tableBody">
            {employees.map((emp) => (
              <StyledTableRow key={emp._id}>
                <StyledTableCell component="th" scope="row">
                  {emp.firstName}
                    </StyledTableCell>
                      <StyledTableCell >{emp.lastName}</StyledTableCell>
                      <StyledTableCell >{emp.emailId}</StyledTableCell>
                      <StyledTableCell >{emp.gender}</StyledTableCell>
                      <StyledTableCell >{emp.salary}</StyledTableCell>
                      <StyledTableCell >{emp.department}</StyledTableCell>
                      <StyledTableCell >
                  <IconButton
                    onClick={() => {
                      deleteEmp(emp._id);
                    }}
                    data-testid="del"
                  >
                    <DeleteIcon style={actionStyle} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleUpdate(emp);
                    }}
                    data-testid="update"
                  >
                    <EditIcon style={actionStyle} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Emloyee deleted successfully!"
      />
    </Grid>
  );
}
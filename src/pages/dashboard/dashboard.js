import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AddEmployee from "../../components/addEmployee/addEmployee";
import Dialog from "@material-ui/core/Dialog";
import ListEmployee from "../../components/listEmployee/listEmployee";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UpdateEmployee from "../../components/updateEmployee/updateEmployee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {Employee}  from "../../services/employee";
const employee = new Employee();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  },
  toolbar: {
      paddingRight: 24,
  },
  toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),
  },
  appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
      }),
  },
  menuButton: {
      marginRight: 36,
  },
  menuButtonHidden: {
      display: 'none',
  },
  title: {
      flexGrow: 1,
  },
  drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
      }),
  },
  drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
      },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
  },
  container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  },
  paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
  },
  fixedHeight: {
      width:'auto',
      height:'auto'
      },
  }));

export default function Dashboard() {
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [emp, setEmp] = React.useState({});
  const [employees, setEmployees] = useState([]);

  const handleClickOpen = () => {
    setOpenAdd(true);
  };

  const getAllEmployees = () => {
    employee
      .getEmployees()
      .then((res) => {
        setEmployees(res.data.data);
      })
      .catch((error) => {
        toast.error("Some error occured");
      });
  };

  const deleteEmp = (empId) => {
      employee
        .deleteEmployee(empId)
        .then((res) => {
          toast.success("Employee Deleted");
          getAllEmployees();
        })
        .catch((error) => {
          console.log(error.message);
        });
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  const handleClose = () => {
    setOpenAdd(false);
    setOpenUpdate(false);
    getAllEmployees();
  };

  const handleUpdate = (emp) => {
    setEmp(emp);
    setOpenUpdate(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}>
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            data-testid="title"
            >
              Employee Payroll Application
          </Typography>
          <Button onClick={handleLogout}
              className={classes.logoutButton} variant="outlined" color="inherit" href="/login">LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            key="Add"
            onClick={handleClickOpen}
            data-testid="add"
          >
          <ListItemIcon>{<PersonAddIcon />}</ListItemIcon>
          <ListItemText primary="Add" />
          </ListItem>
        </List>
      </Drawer>
      <Dialog open={openAdd} onClose={handleClose} margin="auto">
        <AddEmployee handleClose={handleClose} />
      </Dialog>
      <Dialog open={openUpdate} onClose={handleClose} margin="auto">
        <UpdateEmployee emp={emp} handleClose={handleClose} />
      </Dialog>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container className={classes.container}>
          <Grid container>
            <ListEmployee
              handleUpdate={handleUpdate}
              employees={employees}
              deleteEmp={deleteEmp}
            />
            <ToastContainer position="top-center" />
          </Grid>
        </Container>
      </main>
    </div>
  );
}
import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ViewListIcon from "@material-ui/icons/ViewList";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Dialog from "@material-ui/core/Dialog";
import AddEmployee from "../components/addEmployee";

const drawerWidth = 240;

const useStyles = makeStyles((content) => ({
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
        ...content.mixins.toolbar,
    },
    appBar: {
        zIndex: content.zIndex.drawer + 1,
        transition: content.transitions.create(['width', 'margin'], {
            easing: content.transitions.easing.sharp,
            duration: content.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: content.transitions.create(['width', 'margin'], {
            easing: content.transitions.easing.sharp,
            duration: content.transitions.duration.enteringScreen,
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
        transition: content.transitions.create('width', {
            easing: content.transitions.easing.sharp,
            duration: content.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: content.transitions.create('width', {
            easing: content.transitions.easing.sharp,
            duration: content.transitions.duration.leavingScreen,
        }),
        width: content.spacing(7),
        [content.breakpoints.up('sm')]: {
            width: content.spacing(9),
        },
    },
    appBarSpacer: content.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: content.spacing(4),
        paddingBottom: content.spacing(4),
    },
    paper: {
        padding: content.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        width:'auto',
        height:'auto'
        },
    }));
  
    function Dashboard() {
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
        const [openAdd, setOpenAdd] = React.useState(false);
        const [setOpenList] = React.useState(false);
        const handleClickOpen = () => {
          setOpenAdd(true);
        };
        const handleClose = () => {
          setOpenAdd(false);
        };
        const handleList = () => {
          setOpenList(true);
        };
        const handleDrawerOpen = () => {
          setOpen(true);
        };
        const handleDrawerClose = () => {
          setOpen(false);
        };

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar className={classes.toolbar}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} data-testid="title">
                                Employee Payroll Application
                            </Typography>
                            <Button
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
                    <ListItem button key="List" onClick={handleList} data-testid="list">
                        <ListItemIcon>{<ViewListIcon/>}</ListItemIcon>
                        <ListItemText primary="List" />
                    </ListItem>
                    <ListItem button key="Add" onClick={handleClickOpen} data-testid="add" >
                        <ListItemIcon>{<PersonAddIcon/>}</ListItemIcon>
                        <ListItemText primary="Add" />
                    </ListItem>
                    <ListItem button key="Edit" data-testid="edit">
                        <ListItemIcon>{<EditIcon/>}</ListItemIcon>
                        <ListItemText primary="Edit" />
                    </ListItem>
                    <ListItem button key="Delete" data-testid="delete">
                        <ListItemIcon>{<DeleteIcon/>}</ListItemIcon>
                        <ListItemText primary="Delete" />
                    </ListItem>
                </List>
        </Drawer>
        <Dialog open={openAdd} onClose={handleClose} margin="auto">
              <AddEmployee />
        </Dialog>        
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Container  className={classes.container}>
                </Container>
        </main>
        </div>
      </Router>
    );
  }

  export default Dashboard;
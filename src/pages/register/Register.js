import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {Avatar, Grid, Paper, Typography, TextField, Button} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { ToastContainer, toast } from "react-toastify";
import * as Yup from 'yup';
import '../login/login.scss'
import User from '../../services/user';
const userObject = new User();

const SignUp=()=>{
    let history = useHistory();
    const paperstyle = {padding:'30px 20px', width:300, margin:'70px auto'}
    const avatarStyle= {backgroundColor:'#99db49'}
    const headerStyle = {margin:0}
    const btnStyle = {margin:'20px 0'}

    const initialValues={
        firstName:'',
        lastName:'',
        emailId:'',
        password:'',
        confirmPassword:''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Name is too short!').required('Required'),
        lastName: Yup.string().min(3, 'Name is too short!').required('Required'),
        emailId: Yup.string().email('Please enter valid email id').required('Required'),
        password: Yup.string().min(8, 'Password must be 8 characters long'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password not match').required('Required')
    });

    const handleLogin = () => {
        history.push("/login");
      };

    const onSubmit = (values, props) => {
        const userDetails = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "emailId": values.emailId,
            "password": values.password,
        }

        userObject.register(userDetails)    
        .then((res) => {
            if (res.data.success === true) {
                toast.success(res.data.message);
            } 
        })
        .catch((error) => {
            toast.error("Invalid credentials");
        });
        props.resetForm();
    };

    return(
        <Router>
            <Grid >
                <Paper elevation={20} style={paperstyle}>
                    <Grid align='center'>
                        <Avatar data-testid='avatar' style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption'>Please fill this form to create an account!</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props)=>( 
                            <Form data-testid='form'>
                                <Field as={TextField} data-testid='firstName' name='firstName' fullWidth label='First Name' 
                                    helperText={<ErrorMessage name="firstName">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                                <Field as={TextField} data-testid='lastName' name='lastName' fullWidth label='Last Name' 
                                    helperText={<ErrorMessage name="lastName">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                                <Field as={TextField} data-testid='email' name='emailId' fullWidth label='Email Id' 
                                    helperText={<ErrorMessage name="emailId">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                                <Field as={TextField} data-testid='password' name='password' type='password' fullWidth label='Password' 
                                    helperText={<ErrorMessage name="password">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                                <Field as={TextField} name='confirmPassword' type='password' fullWidth label='Confirm Password' 
                                    helperText={<ErrorMessage name="confirmPassword">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                                <Button data-testid='button' fullWidth type="submit" variant="contained" color="primary" style={btnStyle}
                                    disabled={props.isSubmitting}>
                                    {props.isSubmitting ? "Loading" : "Sign Up"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <Typography>
                        Do you have an account?
                            <Link to='/login' onClick={handleLogin}> Login</Link>
                    </Typography>
                    <ToastContainer
                        position='top-center'
                    />
                </Paper>
            </Grid>
    </Router>
    )
}

export default SignUp;
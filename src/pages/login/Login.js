import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from 'yup';
import '../login/login.scss';
import User from '../../services/user';
const user = new User();

const Login=()=>{
    let history = useHistory();

    const initialValues={
        emailId:'',
        password:''
    };

    const validationSchema = Yup.object().shape({
        emailId: Yup.string().email('Please enter valid email id').required('Required'),
        password: Yup.string().min(8, 'Password must be 8 characters long')
    });

    const handleRegister = () => {
        history.push("/register");
      };

    const onSubmit=(values, props)=>{
        user.login(values)
        .then((res) => {
            if (res.data.success === true) {
                localStorage.setItem("token", res.data.token);
                setTimeout(() => {
                    history.push("/dashboard");
                  }, 2000);
                  toast.success("Login Successfull");
            } 
            else {
                toast.error("Invalid credentials");
            }
        })
        .catch((error) => {
            toast.error("Invalid Username or Password");
        });
        props.resetForm();
        props.setSubmitting(false);
    }

    return(
        <Router>
            <Grid >
                <Paper elevation={10} className='paperStyle'>
                    <Grid align='center'>
                        <Avatar data-testid='avatar' className='avatarStyle'><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>

                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props)=>(
                            <Form data-testid='form'>
                                <Field as={TextField} data-testid='emailId' label="Email" name="emailId" 
                                    placeholder="enter emailid" fullWidth required 
                                    helperText={<ErrorMessage name="emailId">
                                        {msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                                <Field as={TextField} data-testid='password' label="Password" name="password" 
                                    placeholder="enter password" type='password' fullWidth required
                                    helperText={<ErrorMessage name="password">
                                        {msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                                <Button className='btnStyle' data-testid='button' type='submit' color='primary' variant='contained' fullWidth>
                                    {props.isSubmitting ? "Loading" : "Sign In"}</Button>
                                
                                <Typography>
                                    Do you have an account?
                                    <Link to='/register' onClick={handleRegister}> Create Account</Link>
                                </Typography>
                                <ToastContainer
                                    position='top-center'
                                />
                            </Form>
                        )}
                    </Formik> 
                </Paper>
            </Grid>
        </Router>
    );
};

export default Login;
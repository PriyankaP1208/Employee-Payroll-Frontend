import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import '../login/login.scss';
import User from '../../services/user';
const user = new User();

const Login=()=>{
    const initialValues={
        emailId:'',
        password:''
    };

    const validationSchema = Yup.object().shape({
        emailId: Yup.string().email('Please enter valid email id').required('Required'),
        password: Yup.string().min(8, 'Password must be 8 characters long')
    });

    const onSubmit=(values, props)=>{
        const loginDetails = {
            'emailId':values.emailId,
            'password':values.password
        }

        user.login(loginDetails)
        .then((res) => {
            if (res.data.success === true) {
                alert(res.data.message);
            } 
            else {
                alert("Invalid credentials...!");
            }
        })
        .catch((error) => {
            alert("Invalid Username or Password");
        });
        props.resetForm();
    }

    return(
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
                                <BrowserRouter>
                                    <Link to='/register'> Create Account</Link>
                                </BrowserRouter>
                            </Typography>
                        </Form>
                    )}
                </Formik> 
            </Paper>
        </Grid>
    );
};

export default Login;
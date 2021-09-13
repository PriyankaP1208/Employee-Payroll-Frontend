import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Grid, Paper, Typography, TextField, Button} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import User from '../services/user';
const userObject = new User();

const SignUp=()=>{
    const paperstyle = {padding:'30px 20px', width:300, margin:'70px auto'}
    const avatarStyle= {backgroundColor:'#99db49'}
    const headerStyle = {margin:0}
    const btnStyle = {margin:'20px 0'}

    const initialValues={
        firstName:'',
        lastName:'',
        emailId:'',
        password:''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Name is too short!').required('Required'),
        lastName: Yup.string().min(3, 'Name is too short!').required('Required'),
        emailId: Yup.string().email('Please enter valid email id').required('Required'),
        password: Yup.string().min(8, 'Password must be 8 characters long')
    });

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
                alert(res.data.message);
            } 
        })
        .catch((error) => {
            alert("Registration Failed");
        });
        props.resetForm();
    };

    return(
        <Grid >
            <Paper elevation={20} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Please fill this form to create an account!</Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props)=>( 
                        <Form>
                            <Field as={TextField} name='firstName' fullWidth label='First Name' 
                                helperText={<ErrorMessage name="firstName">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} name='lastName' fullWidth label='Last Name' 
                                helperText={<ErrorMessage name="lastName">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} name='emailId' fullWidth label='Email Id' 
                                helperText={<ErrorMessage name="emailId">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} name='password' type='password' fullWidth label='Password' 
                                helperText={<ErrorMessage name="password">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            
                            <Button fullWidth type="submit" variant="contained" color="primary" style={btnStyle}
                                disabled={props.isSubmitting}>
                                {props.isSubmitting ? "Loading" : "Sign Up"}
                            </Button>
                
                            <Typography>
                                Do you have an account?
                                <Link to='/login'> Login</Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default SignUp;
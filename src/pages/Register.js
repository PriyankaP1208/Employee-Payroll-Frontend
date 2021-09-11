import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Grid, Paper, Typography, TextField, Button} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const SignUp=()=>{
    const paperstyle = {padding:'30px 20px', width:300, margin:'70px auto'}
    const avatarStyle= {backgroundColor:'#99db49'}
    const headerStyle = {margin:0}
    const btnStyle = {margin:'20px 0'}

    const initialValues={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Name is too short!').required('Required'),
        lastName: Yup.string().min(3, 'Name is too short!').required('Required'),
        email: Yup.string().email('Please enter valid email id').required('Required'),
        password: Yup.string().min(8, 'Password must be 8 characters long'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password not match').required('Required')
    });

    const onSubmit=(values)=>{
        console.log(values)
    }

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
                            <Field as={TextField} name='email' fullWidth label='Email Id' 
                                helperText={<ErrorMessage name="email">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} name='password' type='password' fullWidth label='Password' 
                                helperText={<ErrorMessage name="password">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} name='confirmPassword' type='password' fullWidth label='Confirm Password' 
                                helperText={<ErrorMessage name="confirmPassword">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Button style={btnStyle} type='submit' color='primary' variant='contained' fullWidth>Sign Up</Button>
                
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
import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Login=()=>{
    const paperstyle = {padding:'30px 20px', height:'50vh', width:300, margin:'100px auto'};
    const avatarStyle={backgroundColor:'#99db49'};
    const btnStyle = {margin:'20px 0'};
    
    const initialValues={
        email:'',
        password:''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter valid email id').required('Required'),
        password: Yup.string().min(8, 'Enter valid password')
    });

    const onSubmit=(values)=>{
        console.log(values)
    }

    return(
        <Grid >
            <Paper elevation={10} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>

                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props)=>(
                        <Form>
                            <Field as={TextField} label="Email" name="email" 
                                placeholder="enter emailid" fullWidth required 
                                helperText={<ErrorMessage name="email"/>}/>
                            <Field as={TextField} label="Password" name="password" 
                                placeholder="enter password" type='password' fullWidth required
                                helperText={<ErrorMessage name="password"/>}/>
                            <Button style={btnStyle} type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
                            
                            <Typography>
                                Do you have an account?
                                <Link to='/register'> Create Account</Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
};

export default Login;
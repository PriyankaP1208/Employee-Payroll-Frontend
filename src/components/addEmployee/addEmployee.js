import React from 'react';
import {Avatar, Grid, Paper, TextField, Button} from '@material-ui/core';
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { ToastContainer, toast } from "react-toastify";
import * as Yup from 'yup';
import {Employee} from '../../services/employee';
const employee = new Employee();

const AddEmployee=({handleClose})=>{

    const paperstyle = {padding:'30px 20px', width:300}
    const avatarStyle= {backgroundColor:'#99db49'}
    const headerStyle = {margin:0}
    const btnStyle = {margin:'15px 0'}

    const initialValues={
        firstName:'',
        lastName:'',
        emailId:'',
        gender:'',
        salary:'',
        department:''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Name is too short!').required('Required'),
        lastName: Yup.string().min(3, 'Name is too short!').required('Required'),
        emailId: Yup.string().email('Please enter valid email id').required('Required'),
        gender: Yup.string().required('Required'),
        salary: Yup.string().min(4, 'enter minimum 4 digits').required('Required'),
        department: Yup.string().min(2, 'too short!').required('Required')
    });

    const onSubmit = (values, props) => {
        employee.addEmployee(values)    
        .then((res) => {
            toast.success("Employee Added");
            handleClose();
        })
        .catch((error) => {
            toast.error(error);
        });
        props.resetForm();
    }

    return(
        <Grid >
            <Paper elevation={20} style={paperstyle}>
                <Grid align='center'>
                    <Avatar data-testid='avatar' style={avatarStyle}><PersonAddIcon/></Avatar>
                    <h2 style={headerStyle} data-testid="add">
                        Add Employee
                    </h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {()=>( 
                        <Form data-testid='form'>
                            <Field as={TextField} data-testid='firstName' name='firstName' fullWidth label='First Name' 
                                helperText={<ErrorMessage name="firstName">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} data-testid='lastName' name='lastName' fullWidth label='Last Name' 
                                helperText={<ErrorMessage name="lastName">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} data-testid='email' name='emailId' fullWidth label='Email Id' 
                                helperText={<ErrorMessage name="emailId">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} data-testid='gender' name='gender' fullWidth label='Gender' 
                                helperText={<ErrorMessage name="gender">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} data-testid='salary' name='salary' fullWidth label='Salary'   
                                helperText={<ErrorMessage name="salary">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} data-testid='department' name='department' fullWidth label='Department'   
                                helperText={<ErrorMessage name="department">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Button data-testid='button' fullWidth type="submit" variant="contained" color="primary" style={btnStyle} >
                               SUBMIT
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
            <ToastContainer
                position='top-center'
            />
        </Grid>
    )
}

export default AddEmployee;
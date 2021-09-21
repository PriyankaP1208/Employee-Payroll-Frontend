import React from 'react';
import {Avatar, Grid, Paper, TextField, Button} from '@material-ui/core';
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { ToastContainer, toast } from "react-toastify";
import * as Yup from 'yup';
import Employee from '../services/employee';
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
        const employeeDetails = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "emailId": values.emailId,
            "gender": values.gender,
            "salary":values.salary,
            "department":values.department
        }
        employee.addEmployee(employeeDetails)    
        .then((res) => {
            toast.success(res.data.message);
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
                    <h2 style={headerStyle} data-testid="register">
                        Add Employee
                    </h2>
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
                            <Field as={TextField} data-testid='gender' name='gender' fullWidth label='Gender' 
                                helperText={<ErrorMessage name="gender">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} name='salary' fullWidth label='Salary'   
                                helperText={<ErrorMessage name="salary">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Field as={TextField} name='department' fullWidth label='Department'   
                                helperText={<ErrorMessage name="department">{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage >}/>
                            <Button data-testid='button' fullWidth type="submit" variant="contained" color="primary" style={btnStyle} onClick={handleClose}>
                               SUBMIT
                            </Button>
                            <ToastContainer
                                position='top-center'
                            />
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default AddEmployee;
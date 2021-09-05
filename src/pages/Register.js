import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Grid, Paper, Typography, TextField, Button} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const SignUp=()=>{
    const paperstyle = {padding:'30px 20px', width:300, margin:'100px auto'}
    const avatarStyle= {backgroundColor:'#99db49'}
    const headerStyle = {margin:0}
    const btnStyle = {margin:'20px 0'}

    return(
        <Grid >
            <Paper elevation={20} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='First Name'/>
                    <TextField fullWidth label='Last Name'/>
                    <TextField fullWidth label='Email Id'/>
                    <TextField fullWidth label='Password'/>
                    <Button style={btnStyle} type='submit' color='primary' variant='contained' fullWidth>Sign Up</Button>
                </form>
                    <Typography>
                    Do you have an account?
                    <Link to='/login'> Login</Link>
                </Typography>
                
            </Paper>
        </Grid>
    )
}

export default SignUp;
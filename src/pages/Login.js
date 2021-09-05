import React from 'react';
import {Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login=()=>{
    const paperstyle = {padding:'30px 20px', height:'50vh', width:300, margin:'100px auto'}
    const avatarStyle={backgroundColor:'#99db49'}
    const btnStyle = {margin:'20px 0'}

    return(
        <Grid >
            <Paper elevation={10} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label="Email" placeholder="enter emailid" fullWidth required/>
                <TextField label="Password" placeholder="enter password" type='password' fullWidth required/>
                <Button style={btnStyle} type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
                
                <Typography>
                    Do you have an account?
                    <Link href='#'> Create Account</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;
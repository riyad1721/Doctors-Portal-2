import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../images/login.png';
const Login = () => {

    const handleOnBlur = e => {
        const feild = e.target.name;
        console.log(e.target.value);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                    </form>
                    <p>------------------------</p>
                    <Button variant="contained">Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>

        </Container>


    );
};

export default Login;
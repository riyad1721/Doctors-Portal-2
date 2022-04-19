import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Button onClick={logout} color="inherit">LogOut</Button>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
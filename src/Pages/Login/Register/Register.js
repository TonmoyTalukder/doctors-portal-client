import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import login from './../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData};
        newLoginData[field] = value;

        // console.log(field, value, newLoginData);

        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {

        if(loginData.password !== loginData.password2) {
            alert('Passwords do not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid 
                    item 
                    xs={12} md={6}
                    sx={{
                        mt:8
                    }}    
                >
                    <Typography variant="h4" gutterBottom>
                        Register
                    </Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField 
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic" 
                            label="Your Name" 
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" 
                        />
                        <TextField 
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" 
                        />
                        <TextField 
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic" 
                            label="Enter Password"
                            name="password"
                            onBlur={handleOnBlur} 
                            type="password"
                            variant="standard"
                        />
                        <TextField 
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic" 
                            label="Confirm Password"
                            name="password2"
                            onBlur={handleOnBlur} 
                            type="password"
                            variant="standard"
                        />
                        
                        <NavLink
                            to="/login"
                            style={{
                                textDecoration: 'none',
                                color: '#000'
                            }}
                        >
                            <Button 
                                variant="text" 
                                color="primary"
                                sx={{
                                    width: '75%',
                                    m: 1
                                }}
                            >Allready Registered? Please Login.</Button>
                        </NavLink>
                                
                        <Button
                            sx={{
                                width: '50%',
                                m: 1
                            }} 
                            type="submit"
                            variant="contained"
                        >Register</Button>
                    </form>}

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully Registered.</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={login} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
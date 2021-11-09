import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, Box } from '@mui/material';

import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: '-1',
};

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 450,
    // border: '1px solid red'
};

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="body1" sx={{my:3, fontSize:13, fontWeight:'300', color:'gray'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum euismod, nisl sit amet consectetur
                            dignissim, nisi erat euismod nunc, eget egestas
                            ipsum urna eget nunc.       
                        </Typography>
                        <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{width: '400px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
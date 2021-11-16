import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, price, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={8} sm={6} md={4}>
             <Paper elevation={3} sx={{py : 5}}>
                <Typography sx={{color : 'info.main', fontWeight: 600}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    Price ${price}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {space} Spaces Available
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained" color="primary">BOOK APPOINTMENT</Button>
             </Paper>
        </Grid>
        <BookingModal
            booking = {booking}
            date = {date}
            openBooking = {openBooking}
            handleBookingClose = {handleBookingClose}
            setBookingSuccess = {setBookingSuccess}
        ></BookingModal>
        </>
    );
};

export default Booking;
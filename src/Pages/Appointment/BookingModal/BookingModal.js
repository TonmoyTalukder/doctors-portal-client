import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose, booking, date, setBookingSuccess}) => {
    const {name, time, price} = booking;
    const {user} = useAuth();

    const initialInfo = { patientName: user.displayName, patientPhone: '', patientEmail: user.email };

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo  = {...bookingInfo};
      newInfo[field] = value;
      // console.log(newInfo);
      setBookingInfo(newInfo);
    }

    const handleBookingSubmit = (e) => {
        // alert('Submitting');

        // Collect data from form
        const appointment = {
          ...bookingInfo,
          time,
          price,
          serviceName : name,
          date : date.toLocaleDateString()
        }
        // Send data to server
        // console.log(appointment);
        fetch('https://afternoon-basin-62785.herokuapp.com/appointments',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(appointment)
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if(data.insertedId){
              // alert('Appointment booked successfully');
              setBookingSuccess(true);
              handleBookingClose();
            }
          })

        handleBookingClose();
        e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
                <TextField
                    // label="Size"
                    disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    defaultValue={time}
                    size="small"
                />
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "patientName"
                    onBlur = {handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "patientEmail"
                    onBlur = {handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "patientPhone"
                    onBlur = {handleOnBlur}
                    defaultValue='Your Phone Number'
                    size="small"
                />
                <TextField
                    // label="Size"
                    disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    defaultValue={date.toDateString()}
                    size="small"
                />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;
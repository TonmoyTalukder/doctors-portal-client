import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Appointments = ({date}) => {
    const {user} = useAuth();
    const [appointments, setAppointments] = useState([]);

    console.log(appointments);
    useEffect(() => {
        const url = `https://afternoon-basin-62785.herokuapp.com/appointments?patientEmail=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        .then(res => res.json())
        .then(data => {

            setAppointments(data);
        })
    }, [date, user.email, user.token]);

    return (
        <div>
            <h2>Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{  }} aria-label="Appointment Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time Slot</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.payment ? 
                                    'Paid': 
                                        <Link to={`/dashboard/payment/${row._id
                                        }`} style={{textDecoration: 'none', backgroundColor: 'yellow', padding: 3}}>
                                            <Button>Pay</Button>
                                        </Link>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;
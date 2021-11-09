import * as React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appoinments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
                <Calendar 
                date = {date}
                setDate={setDate}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Appointments date={date} />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './Images/Logo.png';
import './Styles.css'
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Navbar from '../Components/SideNav.js'
import IconButton from '@mui/material/IconButton';
import './Styles.css'

import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import MoreTimeIcon from '@mui/icons-material/MoreTime';


const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#26D1B3'
    },
    mode: 'dark',
  },
});

export default function AdminHome() {
  let navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
        <Navbar/>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >   
                <div class="AdminBtn">
                <IconButton  variant="outlined" onClick={() => navigate('/AdminManageReservations')}>
                    <EventRepeatIcon color="primary" sx={{ fontSize: 100 }}/>
                    <h5>Manage Reservations</h5>
                </IconButton >
                </div>
                <div class="AdminBtn">
                <IconButton  variant="outlined" onClick={() => navigate('/AdminSetUpTimeSlots')}>
                    <MoreTimeIcon color="primary" sx={{ fontSize: 100 }}/>
                    <h5>Set Up Time Slots</h5>
                </IconButton >
                </div>

            </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
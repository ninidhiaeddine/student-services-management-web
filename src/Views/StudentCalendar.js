import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//images
import logo from './Logo.png';
import './Mainpage.css'

//icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const theme = createTheme();

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


export default function StudentCalendar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid 
          item
          xs={12}
          sm={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'space-around',
            textAlign: 'center',
          }}
        >   
            <Grid
                item
                xs={12}
                class='ServiceTypeBtn'>
                <LocalLaundryServiceIcon class='ServiceIcon'/>
                <h3>Laundry</h3>
            </Grid>
            <Grid
                item
                xs={12}
                class='ServiceTypeBtn'>
                <DryCleaningIcon class='ServiceIcon'/>
                <h3>Cleaning</h3>
            </Grid>
            <Grid
                item
                xs={12}
                class='ServiceTypeBtn'>
                <PoolIcon class='ServiceIcon'/>
                <h3>Pool</h3>
            </Grid>
            <Grid
                item
                xs={12}
                class='ServiceTypeBtn'>
                <FitnessCenterIcon class='ServiceIcon'/>
                <h3>Gym</h3>
            </Grid>
        </Grid>
        
        
        
        <Grid item xs={12} sm={6}  elevation={6} square
        sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto'
          }}
        >
            
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';
import TimeSlot from '../Components/StudentTimeSlot';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

//icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';


const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#26D1B3',
    },
    mode: 'dark',
  },
});


export default function StudentHome() {
  const [value, setValue] = useState([null, null]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LocalizationProvider sx={{minWidth: 200}} dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(newValue.$D);
            console.log(newValue.$M + 1);
            console.log(newValue.$y);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Container>
      <Grid container columnSpacing={30} rowSpacing={2}>
      </Grid>
      </Container>
      
    </ThemeProvider>
  );
}
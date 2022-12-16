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
import Stack from '@mui/material/Stack';
import ServicesTabs from '../Components/ServicesTabs';
import * as LocalStorageManager from '../Utils/LocalStorageManager.js';

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
  const [authenticatedStudent, setAuthenticatedStudent] = useState(LocalStorageManager.getAuthenticatedStudent());

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={2}>
          <ServicesTabs isDorms={authenticatedStudent.isDorms}/>
        </Grid>

        <Grid item xs={10}>
          <Container sx={{paddingTop: 5}}>
            <Stack direction="row">
              <LocalizationProvider sx={{ minWidth: 200 }} dateAdapter={AdapterDayjs}>
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
                <h2 className='text-center'>Time Slots</h2>
                <Grid container columnSpacing={30} rowSpacing={2}>
                </Grid>
              </Container>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}
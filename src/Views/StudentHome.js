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
import * as TimeSlotsApiService from '../Services/TimeSlotsApiService.js';
import dayjs from 'dayjs';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#26D1B3',
    },
    mode: 'dark',
  },
});


export default function StudentHome() {
  const [selectedDate, setSelectedDate] = useState('');
  const [authenticatedStudent, setAuthenticatedStudent] = useState(LocalStorageManager.getAuthenticatedStudent());
  const [selectedServiceType, setSelectedServiceType] = useState(0);
  const [timeSlotsData, setTimeSlotsData] = useState([]);

  const getSelectedServiceType = (serviceType) => {
    setSelectedServiceType(serviceType);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={2}>
          <ServicesTabs isDorms={authenticatedStudent.isDorms} callback={getSelectedServiceType} />
        </Grid>

        <Grid item xs={10}>
          <Container sx={{ paddingTop: 5 }}>
            <Stack direction="row">
              <LocalizationProvider sx={{ minWidth: 200 }} dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  openTo="day"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);

                    // prepare the dates:
                    let startDate = new Date(newValue.$y, newValue.$M, newValue.$D, 0, 0);
                    let endDate = new Date(newValue.$y, newValue.$M, newValue.$D + 1, 0, 0);

                    // format the dates properly:
                    let startDateFormatted = dayjs(startDate).format("YYYY-MM-DDTHH:mm");
                    let endDateFormatted = dayjs(endDate).format("YYYY-MM-DDTHH:mm");

                    // make the api call:
                    TimeSlotsApiService.getTimeSlots(
                      selectedServiceType,
                      startDateFormatted,
                      endDateFormatted,
                      LocalStorageManager.getAuthorizationTokenFromLocalStorage())
                      .then(response => {
                        if (response.status == 200) {
                          return response.json();
                        } else {
                          setTimeSlotsData([]);
                          return Promise.reject();
                        }
                      })
                      .then(json => setTimeSlotsData(json))
                      .catch(err => {
                        console.error(err);
                      });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Container>
                <h2 className='text-center'>Time Slots</h2>
                <Grid container spacing={2}>
                  {
                    timeSlotsData.map((t, index) => (
                      <Grid item xs={6}>
                        <TimeSlot
                          currentCapacity={t.currentCapacity}
                          maxCapacity={t.maximumCapacity}
                          startTime={dayjs(t.startTime).format('hh:mm A')}
                          endTime={dayjs(t.endTime).format('hh:mm A')}
                        />
                      </Grid>
                    ))
                  }
                </Grid>
              </Container>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}
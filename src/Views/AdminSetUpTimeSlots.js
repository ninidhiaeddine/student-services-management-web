import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { useState } from 'react';
import ServicesTabs from '../Components/ServicesTabs';
import * as TimeSlotsApiService from '../Services/TimeSlotsApiService.js';
import moment from 'moment';
import dayjs from 'dayjs';
import * as LocalStorageManager from '../Utils/LocalStorageManager.js';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import './Styles.css'
const theme = createTheme();

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#26D1B3'
    },
    mode: 'dark',
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function AdminSetUpTimeSlots() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [maxCapacity, setMaxCapacity] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // snackbars states:
  const [successMsg, setSuccessMsg] = useState('0');
  const [warningMsg, setWarningMsg] = useState('0');
  const [sucessSnackbarOpen, setSucessSnackbarOpen] = useState(false);
  const [warningSnackbarOpen, setWarningSnackbarOpen] = useState(false);

  // service type:
  const [selectedServiceType, setSelectedServiceType] = useState(0);
  const getSelectedServiceType = (serviceType) => {
    setSelectedServiceType(serviceType);
  };

  function makeTimeSlots(
    maximumCapacity,
    dateRange,
    slotLengthHours,
    slotLengthMinutes) {
    // get start date and end date:
    let startDate = new Date(dateRange[0].$y, dateRange[0].$M, dateRange[0].$D, 0, 0);
    let endDate = new Date(dateRange[1].$y, dateRange[1].$M, dateRange[1].$D, 0, 0);

    // compute difference in milli seconds:
    let diffInMillis = endDate.getTime() - startDate.getTime();
    let slotLengthInMillis = slotLengthHours * 3600000 + slotLengthMinutes * 60000;

    // compute time slots count:
    let timeSlotsCount = diffInMillis / slotLengthInMillis;

    // create time slots:
    let timeSlots = [];

    for (let i = 0; i < timeSlotsCount; i++) {
      // calculate start and end time of slot:
      let startTime = moment(startDate)
        .add(slotLengthHours * i, 'h')
        .add(slotLengthMinutes * i, 'm')
        .toDate();

      let endTime = moment(startDate)
        .add(slotLengthHours * (i + 1), 'h')
        .add(slotLengthMinutes * (i + 1), 'm')
        .toDate();

      // set up new time slot:
      let newTimeSlot = {
        currentCapacity: 0,
        maximumCapacity: maximumCapacity,
        serviceType: selectedServiceType,
        startTime: dayjs(startTime).format("MMM DD, YYYY HH:mm"),
        endTime: dayjs(endTime).format("MMM DD, YYYY HH:mm"),
      }

      // add time slot to list:
      timeSlots.push(newTimeSlot);
    }

    return timeSlots;
  }

  function handleSubmit() {
    // make the api call:
    let list = makeTimeSlots(maxCapacity, dateRange, hours, minutes);
    console.log(list);
    let jsonBody = JSON.stringify(list);
    TimeSlotsApiService.addTimeSlots(jsonBody, LocalStorageManager.getAuthorizationTokenFromLocalStorage())
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        setWarningMsg('Oops! Could not add time slots.');
        setWarningSnackbarOpen(true);
        return Promise.reject();
      }
    })
    .then(json => {
      setSuccessMsg('Added Time Slots to Database successfully!');
      setSucessSnackbarOpen(true);
    })
    .catch(err => {
      console.error(err);
    });
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={2}>
          <ServicesTabs isDorms={true} callback={getSelectedServiceType} />
        </Grid>

        <Grid item xs={10}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography component="h1" variant="h5">
              Set Up Time Slots
            </Typography>
            <Box component="form" noValidate
              //onSubmit={handleSubmit} 
              sx={{ mt: 3 }}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={{ start: 'Start Date', end: 'End Date' }}
                  >
                    <DesktopDateRangePicker
                      value={dateRange}
                      onChange={(newValue) => {
                        setDateRange(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  min="0"
                  id="MaxCap"
                  label="Max Capacity"
                  name="MaxCap"
                  onChange={(e) => setMaxCapacity(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="Hours"
                  required
                  fullWidth
                  type="number"
                  min="0"
                  id="Hours"
                  label="Hours"
                  autoFocus
                  onChange={(e) => setHours(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="Minutes"
                  required
                  fullWidth
                  min="0"
                  type="number"
                  id="Minutes"
                  label="Minutes"
                  autoFocus
                  onChange={(e) => setMinutes(e.target.value)} />
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={sucessSnackbarOpen} autoHideDuration={3000} onClose={() => setSucessSnackbarOpen(false)}>
        <Alert onClose={() => setSucessSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {successMsg}
        </Alert>
      </Snackbar>

      <Snackbar open={warningSnackbarOpen} autoHideDuration={3000} onClose={() => setWarningSnackbarOpen(false)}>
        <Alert onClose={() => setWarningSnackbarOpen(false)} severity="warning" sx={{ width: '100%' }}>
          {warningMsg}
        </Alert>
      </Snackbar>

    </ThemeProvider>
  );
}
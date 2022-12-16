import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';
import StudentTimeSlot from '../Components/StudentTimeSlot';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ServicesTabs from '../Components/ServicesTabs';
import * as LocalStorageManager from '../Utils/LocalStorageManager.js';
import * as TimeSlotsApiService from '../Services/TimeSlotsApiService.js';
import * as ReservationsApiService from '../Services/ReservationsApiService.js';
import dayjs from 'dayjs';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#26D1B3',
    },
    mode: 'dark',
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function StudentHome() {
  const [selectedDate, setSelectedDate] = useState('');
  const [authenticatedStudent, setAuthenticatedStudent] = useState(LocalStorageManager.getAuthenticatedStudent());
  const [selectedServiceType, setSelectedServiceType] = useState(0);
  const [timeSlotsData, setTimeSlotsData] = useState([]);

  // snackbars states:
  const [successMsg, setSuccessMsg] = useState('0');
  const [warningMsg, setWarningMsg] = useState('0');
  const [sucessSnackbarOpen, setSucessSnackbarOpen] = useState(false);
  const [warningSnackbarOpen, setWarningSnackbarOpen] = useState(false);

  const getSelectedServiceType = (serviceType) => {
    setSelectedServiceType(serviceType);
  };

  function determineServiceType(serviceType) {
    switch (serviceType) {
      case 0:
        return "Laundry";

      case 1:
        return "Room Cleaning";

      case 2:
        return "Gym";

      case 3:
        return "Pool";
    
      default:
        break;
    }
  }

  function handleTimeSlotBooking(index) {
    // find PK_Student and PK_TimeSlot to make the API call:
    let studentId = authenticatedStudent.PK_KEY;
    let timeSlotId = timeSlotsData[index].PK_TimeSlot;

    // prepare booking data:
    let data = {
      studentId: studentId,
      timeSlotId: timeSlotId
    }

    let jsonData = JSON.stringify(data);

    // make api call:
    ReservationsApiService.addReservation(jsonData, LocalStorageManager.getAuthorizationTokenFromLocalStorage())
    .then(response => {
      if (response.status == 200) {
        setSuccessMsg("Successfully booked the requested time slot!");
        setSucessSnackbarOpen(true);
      } else {
        setWarningMsg("Something went wrong with the booking!");
        setWarningSnackbarOpen(true);
      }
    })
  }

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
                          setWarningMsg('Oops! Could not find any time slots for this date. Try another date!');
                          setWarningSnackbarOpen(true);
                          return Promise.reject();
                        }
                      })
                      .then(json => {
                        setTimeSlotsData(json)
                        setSuccessMsg('Found Time Slots for the selected date!');
                        setSucessSnackbarOpen(true);
                      })
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
                        <StudentTimeSlot
                          currentCapacity={t.currentCapacity}
                          maxCapacity={t.maximumCapacity}
                          startTime={dayjs(t.startTime).format('hh:mm A')}
                          endTime={dayjs(t.endTime).format('hh:mm A')}
                          serviceType={determineServiceType(selectedServiceType)}
                          index={index}
                          bookingCallback={handleTimeSlotBooking}
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

      {/* Snackbars */}

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
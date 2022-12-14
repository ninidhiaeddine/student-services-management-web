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

import './Mainpage.css'
const theme = createTheme();

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


export default function SetUp() {
    const [value, setValue] = React.useState([null, null]);
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
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
                id="MaxCap"
                label="Max Capacity"
                name="MaxCap"/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                name="Hours"
                required
                fullWidth
                id="Hours"
                label="Hours"
                autoFocus/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                name="Minutes"
                required
                fullWidth
                id="Minutes"
                label="Minutes"
                autoFocus/>
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
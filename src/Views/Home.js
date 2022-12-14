import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './Logo.png';
import './Mainpage.css'
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#26D1B3'
    },
    mode: 'dark',
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
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
            borderRight: 1
          }}
        >
          <img src={logo} alt="Image of app logo" width="50%"></img>
          <br />
          <h1 className='glow-title'>Student Services Management</h1>
          <br />
          <p>Get ready to make your life easier with a single click </p>
        </Grid>

        <Grid item xs={12} sm={6} elevation={6} square
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
          <Box>
            <div className='text-center'>I am a</div>
            <Link to="/SignIn" style={{ textDecoration: 'none' }} state={{ isStudent: true }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5 }}
                endIcon={<SchoolIcon/>}
              >
                Student
              </Button>
            </Link>

            <Link to="/SignIn" style={{ textDecoration: 'none' }} state={{ isStudent: false }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3}}
                endIcon={<AdminPanelSettingsIcon/>}
              >
                Admin
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
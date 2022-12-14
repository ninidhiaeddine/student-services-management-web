import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//images
import logo from './Logo.png';
import './Mainpage.css'
import { Link, useNavigate } from 'react-router-dom';

const theme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function MainPage() {
  const navigate = useNavigate();

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
          <h1>Student Management App</h1>
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
          <Box sx={{
            mt: 1
          }}>
            <Link to="/SignIn" underline="none" state={{ isStudent: true }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Student
              </Button>
            </Link>

            <Link to="/SignIn" underline="none" state={{ isStudent: false }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
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
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//images
import logo from './Picture1.png';
import './Mainpage.css'

const theme = createTheme();

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


export default function MainPage() {
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
          <br/>
          <h1>Student Management App</h1>
          <br/>
          <p>Get ready to make your life easier with a single click </p>
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
            <Box sx={{ mt: 1 
            }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In As Student
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In As Admin
              </Button>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './Images/Logo.png';
import './Styles.css'
import { useNavigate } from 'react-router-dom';

// icons:
import SchoolIcon from '@mui/icons-material/School';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Divider from '@mui/material/Divider';

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#131418"
    },
    primary: {
      main: '#26D1B3'
    },
    mode: 'dark',
  },
});

export default function Home() {
  let navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Stack spacing={4} sx={{
          width: 1 / 2,
          alignItems: "center",
          justifyContent: 'center',
          mx: "auto"
        }}>
          <img src={logo} alt="Image of app logo" width="70%" ></img>
          <h1 className='glow-title text-center'>Student Services Management</h1>
          <p className='text-center'>I am a</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              width: 1 / 2
            }}
            endIcon={<SchoolIcon />}
            onClick={() => navigate('/SignIn', { state: {isStudent: true}})}
          >
            Student
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              width: 1 / 2
            }}
            endIcon={<AdminPanelSettingsIcon />}
            onClick={() => navigate('/SignIn', { state: {isStudent: false}})}
          >
            Admin
          </Button>
        </Stack>
      </Container>

    </ThemeProvider>
  );
}
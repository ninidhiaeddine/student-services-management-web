import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
        <div class='SideNav'>
        <ButtonGroup vertical>
            <Button>Setting</Button>
            <Button>Acount</Button>
            <Button>Reservation</Button>
            <Button>Help</Button>
        </ButtonGroup>
        </div>
       
      </ThemeProvider>
    );
  }
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as AuthApiService from '../Services/AuthApiService.js';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const theme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isStudent = useLocation().state.isStudent;

  function handleSignIn(event) {
    event.preventDefault();

    const data = {
      email: email,
      password: password
    };
    var jsonBody = JSON.stringify(data);

    AuthApiService.signInStudent(jsonBody);
  }

  function Title(props) {
    if (props.isStudent === true)
        return "Student Sign In";
    return "Admin Sign In";
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          width: ['95d%', '50%', '25%'],
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <Title isStudent={isStudent}/>
        </Typography>
        <Box component="form" noValidate onSubmit={handleSignIn} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => {
              let value = e.target.value;
              setEmail(value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => {
              let value = e.target.value;
              setPassword(value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </ThemeProvider>
  );
}
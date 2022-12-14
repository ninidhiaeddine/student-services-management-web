import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as AuthApiService from '../Services/AuthApiService.js';
import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as LocalStorageManager from '../Utils/LocalStorageManager.js'

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
  const navigate = useNavigate();

  function handleSignIn(event) {
    event.preventDefault();

    const data = {
      email: email,
      password: password
    };
    var jsonBody = JSON.stringify(data);

    if (isStudent) {
      AuthApiService.signInStudent(jsonBody)
        .then(response => {
          if (response.status == 200)
            return response.text()
          else
            return Promise.reject();
        })
        .then(token => {
          if (token)

            LocalStorageManager.storeAuthorizationTokenInLocalStorage(token);

          // get authenticated student info:
          let student = AuthApiService.getCurrentStudent(token);

          // store authenticated student info:
          LocalStorageManager.storeAuthenticatedStudentInLocalStorage(student, password);

          // navigate to student home:
          navigate("/StudentHome");
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      AuthApiService.signInAdmin(jsonBody)
        .then(response => response.text())
        .then(token => {
          if (token.status != 200)
            return;

          // store authorization token:
          LocalStorageManager.storeAuthorizationTokenInLocalStorage(token);

          // get authenticated admin info:
          let admin = AuthApiService.getCurrentAdmin(token);

          // store authenticated student info:
          LocalStorageManager.storeAuthenticatedAdminInLocalStorage(admin, password);

          // navigate to student home:
          navigate("/AdminHome");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  function Title(props) {
    if (props.isStudent === true)
      return "Student Sign In";
    else if (props.isStudent == false)
      return "Admin Sign In";
  }

  function StudentAdminSignUpLink(props) {
    if (props.isStudent === true)
      return <Link to='/StudentSignUp' style={{ textDecoration: 'none' }} variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
    else if (props.isStudent === false)
      return <Link to='/AdminSignUp' style={{ textDecoration: 'none' }} variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
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
          <Title isStudent={isStudent} />
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
              <StudentAdminSignUpLink isStudent={isStudent} />
            </Grid>
          </Grid>
        </Box>
      </Box>

    </ThemeProvider>
  );
}
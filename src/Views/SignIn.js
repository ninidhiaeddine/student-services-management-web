import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as AuthApiService from '../Services/AuthApiService.js';
import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as LocalStorageManager from '../Utils/LocalStorageManager.js';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { OutlinedInput } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const theme = createTheme();

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#26D1B3'
    },
    mode: 'dark',
  },
});

export default function SignIn() {
  const [email, _setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const isStudent = useLocation().state.isStudent;
  const navigate = useNavigate();

  const setEmail = (email) => {
    let emailWithSuffix = '';
    if (isStudent)
      emailWithSuffix = email + "@mail.aub.edu";
    else
      emailWithSuffix = email + "@aub.edu.lb";

    _setEmail(emailWithSuffix);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      return <h2 className='sub-header'>Student Sign In</h2>;
    else if (props.isStudent == false)
      return <h2 className='sub-header'>Admin Sign In</h2>;
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
        <Title isStudent={isStudent} />
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
            InputProps={ isStudent ? {
              endAdornment: (
                <InputAdornment position="end">
                  @mail.aub.edu
                </InputAdornment>
              ),
            } : {
              endAdornment: (
                <InputAdornment position="end">
                  @aub.edu.lb
                </InputAdornment>
              ),
            }}
            onChange={e => {
              let value = e.target.value;
              setEmail(value);
            }}
          />
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              required
              name="password"
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={e => {
                let value = e.target.value;
                setPassword(value);
              }}
            />
          </FormControl>
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
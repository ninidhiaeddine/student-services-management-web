import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

import './Styles.css'

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#26D1B3'
    },
    mode: 'dark',
  },
});

export default function StudentSignUp() {
  //password
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Dropdown 
  const [Gender, setGender] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 className='sub-header'>Student Sign up</h2>
          <Box component="form" noValidate
            //onSubmit={handleSubmit} 
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        @mail.aub.edu
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="IdNumbers"
                  required
                  fullWidth
                  id="IdNumbers"
                  label="ID Number"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="GenderDropDownLabel">Gender</InputLabel>
                  <Select
                    labelId="GenderDropDownLabel"
                    id="GenderDropDown"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={Gender}
                    label="Gender"
                    onChange={handleChangeGender}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChangePassword('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput
                    type={values.showPassword ? 'text' : 'password'}
                    name="password"
                    label="Confirm Password"
                    id="password"
                    autoComplete="new-password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} label="I am a dorms student" />
                </FormGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
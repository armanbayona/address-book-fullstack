import React, { Component }  from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const custom_theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#ff5722',
    },
  },
  typography: { 
    useNextVariants: true
  }
});

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0),
  },
}));

function Register() {
   const classes = useStyles();
  return (
    <MuiThemeProvider theme = { custom_theme }>
      <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} color="primary">
            <Typography component="h1" variant="h5">
              Register
            </Typography>
          
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="contact-number"
              label="Contact Number"
              name="contact-number"
              autoComplete="contact-number"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          </form>
       </Paper>
      </Container>
      </MuiThemeProvider>
  );
}

export default Register;

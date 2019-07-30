import React from 'react';

import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../img/logo.svg';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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
      backgroundColor: theme.palette.grey[700],
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0),
  },
  link: {
    textDecoration: 'none',
  },
  bigAvatar: {
    padding: 12,
    marginBottom: 24,
    width: 60,
    height: 60,
    border: '4px solid #00796bc0',
    backgroundColor: 'white'
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme = { theme }>
      <Container component="main" maxWidth="xs">
          <Paper color="primary" className={classes.paper}>
          <Avatar alt="logo" src={Logo} className={classes.bigAvatar} />
            <Typography component="h1" variant="h5">
              Sign in to AddressBook
            </Typography>
          
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              Sign In
            </Button>
            <Link to="/register" className={classes.link}>
              <Button
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.button}
              >
                Register
              </Button>
            </Link>
          </form>
       </Paper>
      </Container>
      </MuiThemeProvider>
  );
}

export default Login;

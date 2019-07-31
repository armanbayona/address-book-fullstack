import React, { useState }  from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
    padding: theme.spacing(3)
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
}));



function Register(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    home_phone: '',
    mobile_phone: '',
    work_phone: '',
    email: '',
    address_line: '',
    city: '',
    state: '',
    country: '',
    zip: '1000',
    username: '',
    password: '',
  });

  const handleChange = (e) => setState({...state, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.stopPropagation();
    console.log('submit');
    axios.post('http://localhost:3001/api/sign-up', {
      ...state
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    props.history.push('/')
  }

  return (
    <MuiThemeProvider theme = { theme }>
      <Container component="main" maxWidth="md">
          <Paper className={classes.paper} color="primary">
            <Typography component="h1" variant="h5">
              Register
            </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
          
            <Grid container>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    name="first_name"
                    autoComplete="firstname"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="last_name"
                    autoComplete="lastname"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="homephone"
                    label="Home Phone"
                    name="home_phone"
                    autoComplete="homephone"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="mobilephone"
                    label="Mobile Phone"
                    name="mobile_phone"
                    autoComplete="mobilephone"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="workphone"
                    label="Work Phone"
                    name="work_phone"
                    autoComplete="workphone"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Box>
              </Grid>
            </Grid>
            
            <Grid container>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="addressline"
                    label="No./Street/Brgy."
                    name="address_line"
                    autoComplete="addressline"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="state"
                    label="State/Province"
                    name="state"
                    autoComplete="state"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    name="country"
                    autoComplete="country"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    type="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container alignItems="center">
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Register
                  </Button>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <Link to="/" className={classes.link} >
                    <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    >
                      BACK
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
            
          </form>
       </Paper>
      </Container>
      </MuiThemeProvider>
  );
}

export default Register;

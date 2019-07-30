import React, { Component }  from 'react';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
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

function Register() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme = { theme }>
      <Container component="main" maxWidth="md">
          <Paper className={classes.paper} color="primary">
            <Typography component="h1" variant="h5">
              Register
            </Typography>
          <form className={classes.form} noValidate>

            <Grid container md={12}>
              <Grid item md={6} xs={12}>
                <Box px={1}>
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
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
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
                </Box>
              </Grid>
            </Grid>

            <Grid container md={12}>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="Home Phone"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Mobile Phone"
                    name="lastname"
                    autoComplete="lastname"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container md={12}>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="Work Phone"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Email"
                    name="lastname"
                    autoComplete="lastname"
                  />
                </Box>
              </Grid>
            </Grid>
            
            <Grid container md={12}>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="No./Street/Brgy."
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="City"
                    name="lastname"
                    autoComplete="lastname"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container md={12}>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="Province"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Country"
                    name="lastname"
                    autoComplete="lastname"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container md={12}>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="Username"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={1}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Password"
                    name="lastname"
                    autoComplete="lastname"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container xs={12} alignItems="center">
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './Book-Components/Navbar';
import Menubar from './Book-Components/Menu';
import clsx from 'clsx';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Grid, 
  Box, 
  Button,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Menu,
  MenuItem,
} from '@material-ui/core';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { 
  AccountCircle,
  MoreVert,
  ExpandMore, 
} from '@material-ui/icons';

import MenuIcon from '@material-ui/icons/Menu';

import { 
  makeStyles, 
  MuiThemeProvider, 
  createMuiTheme 
} from '@material-ui/core/styles';

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
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  },
  formControl: {

  },
}));

function Book(props) {
  const classes = useStyles();
  useEffect(() =>{
    console.log("Book Rendered");
  }, []);

  const user = JSON.parse(localStorage.getItem('USER_DATA'));
  const [state, setState] = useState({
    username: user.username,
    user_id: user.user_id,
    current_book: 0,
    books: [],
    mbooks: [
      {book_id: 5, user_id: 103, name: "default", date_created: "2019-08-02T01:37:35.857Z"},
      {book_id: 7, user_id: 103, name: "friends", date_created: "2019-08-04T22:47:34.004Z"}
    ],
  });

  return (
    <MuiThemeProvider theme = { theme }>
      <Navbar username={state.username}/>

      <Container maxWidth="md">
        <Menubar user_id={state.user_id} />
      </Container>

    </MuiThemeProvider> 
  );
}



export default Book;


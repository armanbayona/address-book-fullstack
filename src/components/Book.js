import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './Book-Components/Navbar';
import Menubar from './Book-Components/Menu';
import Contacts from './Book-Components/Contacts';
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
    getBooks();
  }, []);

  const user = JSON.parse(localStorage.getItem('USER_DATA'));

  const [state, setState] = useState({
    username: user.username,
    user_id: user.user_id,
    books: [],
    current_book: 0,
  });
  
  const getBooks = () => {
    axios.get(`http://localhost:3001/api/books/${user.user_id}`)
    .then(response => {
      const found = response.data.find( book => book.name === 'all')
      setState({ ...state, books: response.data, current_book: found.book_id});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <MuiThemeProvider theme = { theme }>
      <Navbar username={user.username}/>

      <Container maxWidth="md">
        <Menubar state={state} setState={setState}/>
        <Contacts book={state.current_book}/>
      </Container>

    </MuiThemeProvider> 
  );
}



export default Book;


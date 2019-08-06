import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

function Navbar(props) {
  const [a, setAa] = useState('hi');
  setAa('hello');
  console.log(a)

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('USER_DATA'));
  const [anchorEl, setAnchorEl] = useState(null);
  
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

  useEffect(() => {

    axios.get(`http://localhost:3001/api/books/103`)
      .then(response => {
        setState({ ...state, books: response.data });
        //console.log(response)
        setTimeout(() => findDefault(), 2000)
      })
      .catch(function (error) {
        console.log(error);
      })

  const findDefault = () => {
    const res = state.books.find( book => book.name === 'default')
    //console.log(res)
    //console.log(state)
        //setState({ ...state, current_book: res.book_id});
  }
  

  }, []);


  const handleLogout = () => {
    localStorage.removeItem('USER_DATA');
    props.history.push('/')
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }


 
  
// const getContacts = () => {
//   axios.get('http://localhost:3001/api/contacts/1')
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
// //getContacts();
 const inputLabel = React.useRef(null);

  return (
    <MuiThemeProvider theme = { theme }>
      <AppBar position="sticky">
        <Container maxWidth="md">
          <Toolbar variant="regular">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Box my={1}>
              <Typography variant="h6" color="inherit">
                AddressBook
              </Typography>
            </Box>
            <IconButton style={{marginLeft: 'auto'}} edge="end" color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <AccountCircle />
              <Typography style={{marginLeft: '5px'}} variant="h6" color="inherit">
                {state.username}
              </Typography>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="md">

        <Box p={2}>
          <Card>
            <Box p={2}>
              <Select value={state.current_book}>
                {state.books.map((book) => (
                  <MenuItem key={book.book_id} value={book.book_id}>{book.name.toUpperCase()}</MenuItem>
                ))
              }
              </Select>
            </Box>
          </Card>
        </Box>

        <Box px={2}>
          {Contact('Arman', 'Bayona', 67645745648)}
        </Box>
      </Container>

    </MuiThemeProvider> 
  );
}

function Contact(firstname, lastname, number) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card>
      <CardHeader avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton 
            className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        }
        title={`${firstname} ${lastname}`}
        subheader={`${number}`}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Navbar;


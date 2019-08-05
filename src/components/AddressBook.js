import React, { useState } from 'react';
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
  }
}));

function Navbar(props) {

  if(localStorage.userX){
    console.log(localStorage);
  }
  else{
    props.history.push('/')
  }

  const classes = useStyles();
  const username = JSON.parse(localStorage.getItem('userX'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
      username: username.username,
  });
  const handleLogout = () => {
    localStorage.removeItem('userX');
    props.history.push('/')
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

// const a = () => {
//    axios.get('http://localhost:3001/api/contacts/1')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
// a();


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


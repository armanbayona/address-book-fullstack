import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Box, 
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import Sidenav from './Sidenav';

function Navbar(props) {
  useEffect(() =>{
  	console.log("Navbar Rendered");
  }, []);
 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('USER_DATA');
    props.history.push('/login')
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

	return (
		<AppBar position="sticky">
			<Container maxWidth="lg">
			  <Toolbar variant="regular">
			    <Sidenav />
			    <Box my={1}>
			      <Typography variant="h6" color="inherit">
			        AddressBook
			      </Typography>
			    </Box>
			    <IconButton style={{marginLeft: 'auto'}} edge="end" color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
			      <AccountCircle />
			      <Typography style={{marginLeft: '5px'}} variant="h6" color="inherit">
			        {props.username}
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
	);
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { 
  Box,
  Button,
  IconButton,
  Tooltip,
  Grid,
} from '@material-ui/core';
import { GroupAddTwoTone } from '@material-ui/icons';

function AddBook(props) {
	//OPEN/CLOSE DIALOG
	const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  //RESPONSIVE FULLSCREEN
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  //UPDATE AND SUBMIT DATA
  const user = JSON.parse(localStorage.getItem('USER_DATA'));
  const [state, setState] = useState({
  	name: '',
		user_id: user.user_id,
  });

  const handleChange = (e) => setState({
    ...state, 
    [e.target.name]: e.target.value
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    //console.log(state.user_id);
	  axios.post(`http://localhost:3001/api/book/create`, {
	    ...state,
	  })
	  .then(function (response) {
	    console.log(response.data);
	    setOpen(false);
	    props.setState({...props.state, books: [...props.state.books, response.data]});
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }

	return (
		<div>
			<Tooltip title="New Group" placement="left">
				<IconButton onClick={handleClickOpen} type="button" variant="contained" color="primary">
					<GroupAddTwoTone style={{ fontSize: 30 }}/>
				</IconButton>
			</Tooltip>
	
		  <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
		    <DialogTitle id="form-dialog-title">New Group</DialogTitle>
		    <DialogContent>
					<form id="group" onSubmit={handleSubmit}> 
            <Box px={1}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Group Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
            </Box>
           </form>
		    </DialogContent>

		    <DialogActions>
		      <Button onClick={handleClose} color="primary">
		        Cancel
		      </Button>
		      <Button form="group" type="submit" color="primary">
		        OK
		      </Button>
		    </DialogActions>
		  </Dialog>
      
		</div>
	);
	}

	export default AddBook;
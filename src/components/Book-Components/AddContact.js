import React, { useState } from 'react';
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
import { PersonAddTwoTone } from '@material-ui/icons';

function FormDialog(props) {
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
  const [state, setState] = useState({
    first_name: 'a',
    last_name: 'a',
    home_phone: '1234',
    mobile_phone: '1234',
    work_phone: '1234',
    email: 'a',
    address_line: 'a',
    city: 'a',
    state: 'a',
    country: 'a',
    zip: '1234',
  });

  const handleChange = (e) => setState({
    ...state, 
    [e.target.name]: e.target.value
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    console.log(props.current_book);
    //console.log(state.first_name);
	  axios.post(`http://localhost:3001/api/contact/create`, {
	    ...state,
	    book_id: props.current_book,
	  })
	  .then(function (response) {
	    console.log(response.data);
	    setOpen(false);
	    props.setState({...props.state, contacts: [...props.state.contacts, response.data]});
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }

	return (
		<div>
			<Tooltip title="Add New Contact" placement="left">
				<Button style={{height: '40px'}} onClick={handleClickOpen} type="button" variant="outlined" color="primary">
					<PersonAddTwoTone style={{ margin: '0 8px 0 0' }}/> ADD CONTACT
				</Button>
			</Tooltip>
		      
			
			  <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
			    <DialogTitle id="form-dialog-title">New Contact</DialogTitle>
			    <DialogContent>
						<form id="contact" onSubmit={handleSubmit}> 
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
	                    fullWidth
	                    id="homephone"
	                    label="Home Phone"
	                    name="home_phone"
	                    autoComplete="homephone"
	                  />
	                </Box>
	              </Grid>
	              <Grid item md={6} xs={12}>
	                <Box px={1}>
	                  <TextField
	                    onChange={handleChange}
	                    variant="outlined"
	                    margin="normal"
	                    fullWidth
	                    required
	                    id="mobilephone"
	                    label="Mobile Phone"
	                    name="mobile_phone"
	                    autoComplete="mobilephone"
	                  />
	                </Box>
	              </Grid>
	            </Grid>

	            {/*<Grid container>
	              <Grid item md={6} xs={12}>
	                <Box px={1}>
	                  <TextField
	                    onChange={handleChange}
	                    variant="outlined"
	                    margin="normal"
	                    fullWidth
	                    id="workphone"
	                    label="Work Phone"
	                    name="work_phone"
	                    autoComplete="workphone"
	                  />
	                </Box>
	              </Grid>
	              <Grid item md={6} xs={12}>
	                <Box px={1}>
	                  <TextField
	                    onChange={handleChange}
	                    type="email"
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
	              <Grid item md={4} xs={12}>
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
	                  />
	                </Box>
	              </Grid>
	              <Grid item md={4} xs={12}>
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
	              <Grid item md={4} xs={12}>
	                <Box px={1}>
	                  <TextField
	                    onChange={handleChange}
	                    variant="outlined"
	                    margin="normal"
	                    required
	                    fullWidth
	                    id="zip"
	                    label="Zip Code"
	                    name="zip"
	                    autoComplete="zip"
	                  />
	                </Box>
	              </Grid>
	            </Grid>*/}
	           </form>
			    </DialogContent>

			    <DialogActions>
			      <Button onClick={handleClose} color="primary">
			        Cancel
			      </Button>
			      <Button form="contact" type="submit" color="primary">
			        OK
			      </Button>
			    </DialogActions>
			  </Dialog>
      
		</div>
	);
	}

	export default FormDialog;
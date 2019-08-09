import React, { useEffect } from 'react';

import AddContact from './AddContact';
import AddBook from './AddBook';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { 
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Tooltip,
  Card,
  Select,
  TextField,
  MenuItem,
  Grid,
} from '@material-ui/core';
import { SortTwoTone,  } from '@material-ui/icons';

function Menu(props) {


  useEffect(() =>{
    console.log("Menu Rendered");
  }, []);
  
  const handleChange = (e) => {
    props.setState({...props.state, [e.target.name]: e.target.value});
  }


  return (
    <Card>
      <Box p={2}>
        <Grid container>
          <Box mr="auto">
            <Grid container>
              <TextField
                select
                label="Groups"
                style={{borderColor: '#00796b', color: '#00796b', margin: '0px 8px 0px 0px',}}
                margin="dense"
                variant="outlined"
                name="current_book" 
                onChange={handleChange} 
                value={props.state.current_book}>
                {props.state.books.map((book) => (
                  <MenuItem key={book.book_id} color="primary" value={book.book_id}>{book.name.toUpperCase()}</MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Sort by"
                style={{color: '#00796b', margin: '0px 8px 0px 0px',}}
                margin="dense"
                variant="outlined"
                name="sort_by"
                onChange={handleChange}
                value={props.state.sort_by}>
                  <MenuItem color="primary" value="first_name">FIRSTNAME</MenuItem>
                  <MenuItem color="primary" value="last_name">LASTNAME</MenuItem>
              </TextField>

              <TextField
                select
                label="Order by"
                style={{color: '#00796b', margin: '0px 8px 0px 0px',}}
                margin="dense"
                variant="outlined"
                name="order_by"
                onChange={handleChange}
                value={props.state.order_by}>
                  <MenuItem color="primary" value="ASC">A - Z</MenuItem>
                  <MenuItem color="primary" value="DESC">Z - A</MenuItem>
              </TextField>

              <TextField
                label="Search"
                style={{color: '#00796b', margin: '0px 8px 0px 0px',}}
                margin="dense"
                variant="outlined"
                name="search"
                onChange={handleChange}
              >
                  
              </TextField>

            </Grid>
          </Box>

          <Box ml="auto">
            <Grid container>
              <AddBook state={props.state} setState={props.setState} />
              <AddContact current_book={props.state.current_book} state={props.state} setState={props.setState}/>
            </Grid>
          </Box> 
        </Grid>
      </Box>
    </Card>
  );
}

export default Menu;
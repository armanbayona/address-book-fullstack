import React, { useEffect } from 'react';

import AddContact from './AddContact';
import AddBook from './AddBook';
import { 
  Box,
  Button,
  IconButton,
  Tooltip,
  Card,
  Select,
  MenuItem,
  Grid,
} from '@material-ui/core';
import { SortTwoTone } from '@material-ui/icons';

function Menu(props) {
  useEffect(() =>{
    console.log("Menu Rendered");
  }, []);
  
  const handleChange = (e) => {
    props.setState({...props.state, [e.target.name]: e.target.value});
  }

  return (
     <Card>
    <Box p={1}>
        <Grid container>
          <Box mr="auto">
            <Grid container>
              <Select name="current_book" onChange={handleChange} value={props.state.current_book}>
                {props.state.books.map((book) => (
                  <MenuItem key={book.book_id} value={book.book_id}>{book.name.toUpperCase()}</MenuItem>
                ))}
              </Select>
              <Button variant="outlined" color="primary" >
              Groups
              </Button>
            </Grid>
          </Box>

          <Box ml="auto">
            <Grid container>
               
                <Tooltip title="Create New Group" placement="left" color="primary">
                  <IconButton type="button" variant="contained" color="primary">
                    <SortTwoTone style={{ fontSize: 30 }}/>
                  </IconButton>
                </Tooltip>
             
                <Tooltip title="Create New Group" placement="left" color="primary">
                  <IconButton type="button" variant="contained" color="primary">
                    <SortTwoTone style={{ fontSize: 30 }}/>
                  </IconButton>
                </Tooltip>
             
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
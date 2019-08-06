import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Box,
  Button,
  IconButton,
  Tooltip,
  Card,
  Select,
  MenuItem,
  Toolbar,
  Grid,
} from '@material-ui/core';
import { Add, GroupAdd, PersonAdd } from '@material-ui/icons';

function Menu(props) {
  useEffect(() =>{
    console.log("Menu Rendered");
  }, []);

  const handleChange = (e) => {
    props.setState({...props.state, [e.target.name]: e.target.value});
  }

  return (
    <Box p={2}>
      <Card>
        <Toolbar variant="regular">      
          <Select name="current_book" onChange={handleChange} value={props.state.current_book}>
            {props.state.books.map((book) => (
              <MenuItem key={book.book_id} value={book.book_id}>{book.name.toUpperCase()}</MenuItem>
            ))}
          </Select>
          <Select value="1">
              <MenuItem value="1">SORT BY NAME</MenuItem>
          </Select>


          <Box ml="auto">
            <Grid container>
              <Box mx={1}>
                <Tooltip title="Create New Group" placement="buttom" color="primary">
                  <IconButton type="button" variant="contained" color="primary">
                    <GroupAdd style={{ fontSize: 30 }}/>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box mx={1}>
                <Tooltip title="Add New Contact" placement="buttom">
                  <IconButton type="button" variant="contained" color="primary">
                    <PersonAdd style={{ fontSize: 30 }}/>
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Box>

          
        </Toolbar>
      </Card>
    </Box>
  );
}

export default Menu;
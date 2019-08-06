import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Box,
  Button,
  Card,
  Select,
  MenuItem,
} from '@material-ui/core';

function Menu(props) {
  useEffect(() =>{
    console.log("Menu Rendered");
    getBooks();
  }, []);

  const [state, setState] = useState({
    current_book: 0,
    books: [],
  })
  
  const handleChange = (e) => setState({
    ...state, 
    [e.target.name]: e.target.value
  });
  
  const getBooks = () => {
    axios.get(`http://localhost:3001/api/books/${props.user_id}`)
    .then(response => {
      //console.log(response);
      const found = response.data.find( book => book.name === 'default')
      setState({ ...state, books: response.data, current_book: found.book_id});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <Box p={2}>
      <Card>
        <Box p={2}>
          <Select 
            name="current_book"
            onChange={handleChange} 
            value={state.current_book}
          >
            {state.books.map((book) => (
              <MenuItem key={book.book_id} value={book.book_id}>{book.name.toUpperCase()}</MenuItem>
            ))}
          </Select>
          <Box>{JSON.stringify(state)}</Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Menu;
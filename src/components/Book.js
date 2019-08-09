import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './Book-Components/Navbar';
import Menubar from './Book-Components/Menu';
import Contacts from './Book-Components/Contacts';

import {  
  Container, 
  Box, 
} from '@material-ui/core';

import { 
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


function Book(props) {
 
  useEffect(() =>{
    console.log(props.sort_by)
    console.log("Book Rendered");
    getBooks();
  }, []);

  const user = JSON.parse(localStorage.getItem('USER_DATA'));

  const [state, setState] = useState({
    username: user.username,
    user_id: user.user_id,
    books: [],
    contacts: [],
    current_book: 0,
    sort_by: 'last_name',
    order_by: 'ASC',
  });
  
  //GET BOOK
  const getBooks = () => {
    axios.get(`http://localhost:3001/api/books/${user.user_id}`)
    .then(books => {
      const found = books.data.find( book => book.name === 'all')
      setState({ ...state, books: books.data, current_book: found.book_id});

     /* axios.get(`http://localhost:3001/api/contacts/profile/${found.book_id}`)
      .then(contacts => {
        console.log(contacts.data);
        setState({ 
          ...state, 
          books: books.data,
          current_book: found.book_id,
          contacts: contacts.data})
      })
      .catch(function (error) {
        console.log(error);
      })*/
      
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const getContacts = (id) => {
    
  }




  return (
    <MuiThemeProvider theme = { theme }>
      <Navbar username={user.username}/>

      <Container maxWidth="lg">
        <Box p={1}>
          <Menubar state={state} setState={setState}/>
          <Contacts sort_by={state.sort_by} order_by={state.order_by} current_book={state.current_book} contacts={state.contacts}/>
        </Box>
      </Container>

    </MuiThemeProvider> 
  );
}



export default Book;


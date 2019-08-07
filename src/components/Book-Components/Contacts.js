import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Contact from './Contact';
import { 
 Box,
} from '@material-ui/core';

function Contacts(props) {
  useEffect(() => {
    getContacts(props.current_book);
    addContact(props.contacts);
  }, [props.contacts, props.current_book]);

  const [state, setState] = useState({
    contacts: [],
  });

  const getContacts = (id) => {
    axios.get(`http://localhost:3001/api/contacts/profile/${id}`)
    .then(response => {
      console.log('switch');
      setState({ ...state, contacts: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const addContact = (x) => {
    console.log('add');
    setState({ ...state, contacts: [...state.contacts, x]});
  }
  
   const editContact = (e) => {
    console.log(e)
  }

  const deleteContact = (id) => {
    console.log('Remove', id)
    axios.delete(`http://localhost:3001/api/contact/remove/${id}`)
    .then(response => {
      console.log(response.data);
      const remains = state.contacts.filter(contact => contact.contact_id !== id)
      setState({...state, contacts: remains })
    })
    .catch(function (error) {
      console.log(error);
    })
  }


	return (
		<Box pt={1}>
			 {state.contacts.map((contact, i) => <Contact key={i} contact={contact}  deleteContact={deleteContact} editContact={editContact}/> )}
    </Box>
	);
}

export default Contacts;
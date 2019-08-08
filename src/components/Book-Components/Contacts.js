import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Contact from './Contact';
import { 
 Box,
} from '@material-ui/core';

function Contacts(props) {
  useEffect(() => {
    getContacts(props.current_book);
  }, [props.contacts, props.current_book, props.sort_by, props.order_by]);

  const [state, setState] = useState({
    contacts: [],
    current_book: 0,
  });
  
  //GET WHEN SWITCHED
  const getContacts = (id) => {
    axios.get(`http://localhost:3001/api/contacts/profile/${id}/${props.sort_by}/${props.order_by}`)
    .then(response => {
      console.log('get');
      setState({ ...state, contacts: response.data, current_book: id});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  // const addContact = (contact) => {
  //   console.log('add');
  //   setState({ ...state, contacts: [...state.contacts, contact]});
  // }
  
  const editContact = (contact) => {
    console.log(contact)
    const { contact_id, profile_id, date_created, ...updated_contact } = contact;

    axios.patch(`http://localhost:3001/api/contact/update/${contact_id}`, {
      ...updated_contact
    })
    .then(response => {
      console.log(response.data);
      const unedited = state.contacts.filter(contact => contact.contact_id !== contact_id)
      setState({...state, contacts: [...unedited, updated_contact] })
      //const remains = state.contacts.filter(contact => contact.contact_id !== id)
      //setState({...state, contacts: remains })
    })
    .catch(function (error) {
      console.log(error);
    })

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
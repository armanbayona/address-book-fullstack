import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Contact from './Contact';
import { 
 Box,
} from '@material-ui/core';
 import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen
} from '@material-ui/core/colors';

const color = { 
  red: red[300],
  pink: pink[300],
  purple: purple[300],
  deepPurple: deepPurple[300],
  indigo: indigo[300],
  blue: blue[300],
  lightBlue: lightBlue[300],
  cyan: cyan[300],
  teal: teal[300],
  green: green[300],
  lightGreen: lightGreen[300],
}

const randomProperty = function (obj) {
  const keys = Object.keys(obj)
  console.log('rand')
  return obj[keys[ keys.length * Math.random() << 0]];
};

function Contacts(props) {
  //RUN WHEN PROPS CHANGES
  useEffect(() => {
    getContacts(props.current_book);
  }, [props.contacts, props.current_book, props.sort_by, props.order_by]);

  const [state, setState] = useState({
    contacts: [],
    current_book: 0,
  });
  //GET WHEN SWITCHED GROUPS
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

  const search = 'Tony';
	return (
		<Box pt={1}>
			{state.contacts.map((contact, i) => {
        return (contact.first_name.match(new RegExp(search, 'gi')) || contact.last_name.match(new RegExp(search, 'gi'))  ? 
          <Contact color={randomProperty(color)} key={i} contact={contact}  deleteContact={deleteContact} editContact={editContact} /> : null)    
      })}
    </Box>
	);
}

export default Contacts;
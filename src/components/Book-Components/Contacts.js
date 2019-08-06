import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Contact from './Contact';
import { 
 Box,
} from '@material-ui/core';

function Contacts(props) {
  useEffect(() => {
    getContacts();
  }, [props]);

  const [state, setState] = useState({
    contacts: [],
  });

  const getContacts = () => {
    axios.get(`http://localhost:3001/api/contacts/profile/${props.book}`)
    .then(response => {
      console.log(response.data);
      setState({ ...state, contacts: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

	return (
		<Box px={2}>
			 {state.contacts.map((contact, i) => <Contact key={i} contact={contact} /> )}
    </Box>
	);
}

export default Contacts;
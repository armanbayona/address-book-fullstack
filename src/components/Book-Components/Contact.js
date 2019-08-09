import React, { useState } from 'react';
import EditContact from './EditContact';
import axios from 'axios';
import clsx from 'clsx';
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
import { 
  Avatar,
  Box,
  IconButton,
  Typography,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Button
} from '@material-ui/core';

import { 
  ExpandMore, 
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.grey[700],
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  },
  formControl: {

  },
}));




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
  const classes = useStyles();

  //const random = randomProperty(color);
  React.useEffect(() => {
    console.log(props.color)
  }, [])
  
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick(e) {
    e.preventDefault()
    e.stopPropagation()
    setExpanded(!expanded);
  }

	return (
  <Box pb={1}>
  	 <Card>
        <CardHeader avatar={<Avatar style={{ backgroundColor: props.color }} aria-label="recipe">{props.contact.first_name.charAt(0)}</Avatar>}
          action={
            <IconButton 
              className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          }
          title={`${props.contact.first_name} ${props.contact.last_name}`}
          subheader={`${props.contact.mobile_phone}`}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {/*<CardContent>
      
          </CardContent>*/}
          <CardActions>
            <EditContact 
              editContact={props.editContact}
              contact={props.contact} 
              handleExpandClick={handleExpandClick}
            />
            <Button size="small" onClick={()=>props.deleteContact(props.contact.contact_id)} color="primary">Delete</Button>
          </CardActions>
        </Collapse>
    </Card>
  </Box>
	);
}

export default Contacts;
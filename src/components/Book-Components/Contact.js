import React, { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
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

function Contacts(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

 

	return (
  <Box pb={1}>
  	 <Card>
        <CardHeader avatar={<Avatar aria-label="recipe">R</Avatar>}
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
            <Button size="small" onClick={()=>props.editContact(props.contact.contact_id)} color="primary">Edit</Button>
            <Button size="small" onClick={()=>props.deleteContact(props.contact.contact_id)} color="primary">Delete</Button>
          </CardActions>
        </Collapse>
    </Card>
  </Box>
	);
}

export default Contacts;
import React, { useState } from 'react';
import clsx from 'clsx';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Grid, 
  Box, 
  Button,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
} from '@material-ui/core';
import { 
  Menu, 
  AccountCircle,
  MoreVert,
  ExpandMore, 
} from '@material-ui/icons';
import { 
  makeStyles, 
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
  }
}));

function Navbar(props) {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme = { theme }>
      <AppBar position="sticky">
        <Container maxWidth="md">
          <Toolbar variant="regular">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Box my={1}>
              <Typography variant="h6" color="inherit">
                AddressBook
              </Typography>
            </Box>
            <IconButton edge="end" style={{marginLeft: 'auto'}} color="inherit" aria-label="menu">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md">
        <Box p={2}>
          {Contact('Arman', 'Bayona', 67645745648)}
        </Box>
      </Container>
    </MuiThemeProvider> 
  );
}

function Contact(firstname, lastname, number) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
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
        title={`${firstname} ${lastname}`}
        subheader={`${number}`}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Navbar;
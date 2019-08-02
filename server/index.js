const express = require('express');
const massive = require('massive');
const cors = require('cors');

const users = require('./controllers/users.js');
const contacts = require('./controllers/contacts.js');

massive({
  host: 'localhost',
  port: 5432,
  database: 'addressbook',
  user: 'postgres',
  password: 'addressbook',
}).then(db => {
  const app = express();

  app.set('db', db);

	//MIDDLEWARE
  app.use(express.json());
  app.use(cors());

  //ROUTING USERS
  app.post('/api/sign-up', users.create);
  app.get('/api/protected/data', users.protected);
  app.post('/api/login', users.login);
  //ROUTING CONTACTS
  app.post('/api/contact/create', contacts.create);

  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
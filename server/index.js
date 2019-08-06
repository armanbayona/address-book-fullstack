const express = require('express');
const massive = require('massive');
const cors = require('cors');

const users = require('./controllers/users.js');
const contacts = require('./controllers/contacts.js');
const books = require('./controllers/books.js');

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
  app.get('/api/contacts/:book_id', contacts.read);
  app.get('/api/contacts/profile/:book_id', contacts.read_profile);
  app.patch('/api/contact/update/:contact_id', contacts.update);
  app.delete('/api/contact/remove/:contact_id', contacts.remove);
  //ROUTING BOOK/GROUPS
  app.post('/api/book/create', books.create);
  app.get('/api/books/:user_id', books.read);
  app.patch('/api/book/update/:book_id', books.update);
  app.delete('/api/book/remove/:book_id', books.remove);

  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
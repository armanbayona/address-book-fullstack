const express = require('express');
const massive = require('massive');

// const users = require('./controllers/user.js');

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

  //ROUTING USERS
  // app.post('/api/register', users.register);
  // app.get('/api/protected/data', users.protected);
  // app.post('/api/login', users.login);

  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
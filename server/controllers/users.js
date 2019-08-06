const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const secret = require('../../secret.js')

function create(req, res) {
  const db = req.app.get('db');
	const data = {...req.body};
	const username = data.username;
	const password = data.username;
	delete data.username;
	delete data.password;

  db.profiles.insert({
  	...data
	})
	.then(profile => {
		argon2.hash(password)
		.then(hash => {
		  db.users.insert({
		  	profile_id: profile.profile_id,
		    username,
		    password: hash,
			},{ fields: ['user_id', 'username']})
			.then(user => {
				db.books.insert({
					user_id: user.user_id,
					name: "all"
				})
				.then(book => {
					const token = jwt.sign({ id: user.user_id }, secret);
					res.status(201).json({...profile, ...user, ...book, token})
				})
			})
		})
	})
	.catch(err => {
	  console.error(err);
	});
}

function protected(req, res) {
 if (!req.headers.authorization) {
   return res.status(401).end();
 }

 try {
   const token = req.headers.authorization.split(' ')[1];
   jwt.verify(token, secret); 
   res.status(200).json({ data: 'here is the protected data' });
 } catch (err) {
   console.error(err);
   res.status(401).end();
 }
}

function login(req, res) {
  const db = req.app.get('db');
  const { username, password } = req.body;

  db.users
    .findOne(
      {
        username,
      },
      {
        fields: ['user_id', 'profile_id','username', 'password'],
      }
    )
    .then(user => {
      if (!user) {
        throw new Error('Invalid username');
      }

      return argon2.verify(user.password, password).then(valid => {
        if (!valid) {
          throw new Error('Incorrect password');
        }

        const token = jwt.sign({ id: user.user_id }, secret);
        delete user.password; 
        res.status(200).json({ ...user, token });
      });
    })
    .catch(err => {
      if (
        ['Invalid username', 'Incorrect password'].includes(err.message)
      ) {
        res.status(400400400400400400400).json({ error: err.message });
      } else {
        console.error(err);
        res.status(500).end();
      }
    });
}

module.exports = {
  create, protected, login
};
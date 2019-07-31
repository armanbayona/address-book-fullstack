const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const secret = require('../../secret.js')

function create(req, res) {
  const db = req.app.get('db');
	const { 
		firstName,
		lastName,
		homePhone,
		mobilePhone,
		workPhone,
		email,
		addressLine,
		city,
		state,
		country,
		zip,
		username,
		password,
	} = req.body;
	
	// argon2
	// 	.hash(password)
	// 	.then(hash => {
		  db.profiles.insert({
		    firstName,
				lastName,
				homePhone,
				mobilePhone,
				workPhone,
				email,
				addressLine,
				city,
				state,
				country,
				zip,
				users: [{
					profileId: undefined,
					username,
					password,
					//password: hash,
				}],
			},{ deepInsert: true })
	//})

		.then(profile => {

      res.status(201).json(profile);
		})
		.catch(err => {
		  console.error(err);
		});
}

function register(req, res) {
  const db = req.app.get('db');
  const { username, email, password } = req.body;

  argon2
    .hash(password)
    .then(hash => {
      return db.users.insert(
        {
          username,
          email,
          password: hash,
        },
        {
          fields: ['id', 'username', 'email'],
        }
      );
    })

    .then(user => {
      const token = jwt.sign({ userId: user.id }, secret);
      res.status(201).json({ ...user, token });
    })

    .catch(err => {
      console.error(err);
      res.status(500).end();
    });

}


module.exports = {
  create,
};
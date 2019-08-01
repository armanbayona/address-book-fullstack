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
			.then(user =>{
				const token = jwt.sign({ id: user.user_id }, secret);
				res.status(201).json({...profile, ...user, token})
			})
		})
	})
	.catch(err => {
	  console.error(err);
	});
}
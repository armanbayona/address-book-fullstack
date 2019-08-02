function create(req, res) {
  const db = req.app.get('db');
	const data = {...req.body};
	const book_id = data.book_id;
	delete data.name;

	db.profiles.insert({
		...data
	})
	.then(profile => {
		db.contacts.insert({
			book_id,
			profile_id: profile.profile_id
		})
		.then(contact => {
			res.status(201).json({...profile, ...contact})	
		})
	})
	.catch(err => {
	  console.error(err);
	});
}

function read(req, res) {
	const db = req.app.get('db');

	db.contacts
	.find({
		book_id: req.params.book_id,
	})
	.then(contact => res.status(200).json(contact))
	.catch(err => {
	  console.error(err);
	  res.status(500).end();
	});
}


function update(req, res) {
	const db = req.app.get('db');
	const data = {...req.body};
	const book_id = req.body.book_id;
	delete data.book_id;
	
	db.contacts
	.findOne({
		contact_id: req.params.contact_id
	})
	.then(contact => {
		db.profiles.findOne({
			profile_id: contact.profile_id
		})
		.then(profile => {
			db.profiles.save({
				profile_id: contact.profile_id,
				...data
			})
			.then(updated => {
				res.status(200).json({...updated, ...contact})
			})
		})
	})
	.catch(err => {
	  console.error(err);
	  res.status(500).end();
	});

}

function remove(req, res) {
	const db = req.app.get('db');
	
	db.contacts.findOne({
		contact_id: req.params.contact_id,
	})
	.then(contact => {
		db.contacts.destroy({
			contact_id: req.params.contact_id,
		})
		.then(profile => {
			db.profiles.destroy({
				profile_id: contact.profile_id,
			})
			.then(deleted => res.status(200).json({...deleted, ...profile}))
		})
	})
	.catch(err => {
	  console.error(err);
	  res.status(500).end();
	});
}


module.exports = {
  create, read, update, remove,
};
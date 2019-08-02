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

function readAll(req, res) {
	const db = req.app.get('db');

	db.contacts
	.find()
	.then(contact => res.status(200).json(contact))
	.catch(err => {
	  console.error(err);
	  res.status(500).end();
	});
}

function readOne(req, res) {
	const db = req.app.get('db');
	
	db.contacts.findOne(req.params.id)
  .then(contact => res.status(200).json(contact))
  .catch(err => {
    console.error(err);
    res.status(500).end();
	});
}

function update(req, res) {
	const db = req.app.get('db');
	
	db.contacts.findOne(req.params.id)
	.then(contact => res.status(200).json(contact))
	.catch(err => {
	  console.error(err);
	  res.status(500).end();
	});

}
function remove(req, res) {
	const db = req.app.get('db');
	
	db.contacts.destroy(req.params.id)
	.then(contact => res.status(200).json(contact))
	.catch(err => {
	  console.error(err);
	  res.status(500).end();
	});
}


module.exports = {
  create, readAll, update, remove,
};
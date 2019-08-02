function create(req, res) {
	const db = req.app.get('db');

	db.books.insert({
		...req.body
	})
	.then(book => {
		res.status(201).json(book)	
	})
	.catch(err => {
	  console.error(err);
	});
}

function read(req, res) {
	const db = req.app.get('db');

	db.books.find({
		user_id: req.params.user_id
	})
	.then(book => {
		res.status(201).json(book)	
	})
	.catch(err => {
	  console.error(err);
	});
}

function update(req, res) {
	const db = req.app.get('db');

	db.books.save({
		book_id: req.params.book_id,
		...req.body
	})
	.then(book => {
		res.status(201).json(book)	
	})
	.catch(err => {
	  console.error(err);
	});
}

function remove(req, res) {
	const db = req.app.get('db');

	db.books.destroy({
		book_id: req.params.book_id,
	})
	.then(book => {
		res.status(201).json(book)	
	})
	.catch(err => {
	  console.error(err);
	});
}

module.exports = {
  create, read, update, remove,
};
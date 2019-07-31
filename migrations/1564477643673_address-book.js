exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('books', {
    book_id: {
      type: 'serial',
      primaryKey: true,
    },
    user_id: {
    	type: 'integer',
      references: '"users"',
    },
    name: {
      type: 'text',
      notNull: true,
    },
    date_created: { 
    	type: 'timestamp', notNull: true, 
    	default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  
};

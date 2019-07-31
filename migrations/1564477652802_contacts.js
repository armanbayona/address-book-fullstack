exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('contacts', {
    contact_id: {
      type: 'serial',
      primaryKey: true,
    },
    book_id: {
    	type: 'integer',
      references: '"books"',
    },
    profile_id: {
    	type: 'integer',
      references: '"profiles"',
    },
    date_created: { 
    	type: 'timestamp', notNull: true, 
    	default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
};

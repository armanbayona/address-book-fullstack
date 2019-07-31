exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('contacts', {
    contactId: {
      type: 'serial',
      primaryKey: true,
    },
    bookId: {
    	type: 'integer',
      references: '"books"',
    },
    profileId: {
    	type: 'integer',
      references: '"profiles"',
    },
    dateCreated: { 
    	type: 'timestamp', notNull: true, 
    	default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
};

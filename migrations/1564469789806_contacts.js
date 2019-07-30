exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('contacts', {
    contactId: {
      type: 'serial',
      primaryKey: true,
    },
    bookId: {
    	type: 'integer',
      references: '"address-books"',
    },
    profileId: {
    	type: 'integer',
      references: '"profiles"',
    },
    dateCreated: { 
    	type: 'timestamp', notNull: true, 
    	default: new require('node-pg-migrate').PgLiteral('current_timestamp') 
    },
  });
};

exports.down = (pgm) => {

};

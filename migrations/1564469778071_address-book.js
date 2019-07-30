exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('address-books', {
    bookId: {
      type: 'serial',
      primaryKey: true,
    },
    userId: {
    	type: 'integer',
      references: '"users"',
    },
    name: {
      type: 'text',
      notNull: true,
    },
    dateCreated: { 
    	type: 'timestamp', notNull: true, 
    	default: new require('node-pg-migrate').PgLiteral('current_timestamp') 
    },
  });
};

exports.down = (pgm) => {

};

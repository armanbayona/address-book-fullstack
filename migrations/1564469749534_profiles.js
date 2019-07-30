exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('profiles', {
    profileId: {
      type: 'serial',
      primaryKey: true,
    },
    firstName: {
      type: 'text',
      notNull: true,
    },
    lastname: {
      type: 'text',
      notNull: true,
    },
    homePhone: {
      type: 'text',
    },
    mobilePhone: {
      type: 'text',
    },
    workPhone: {
      type: 'text',
    },
    email: {
      type: 'text',
      notNull: true,
    },
    addressLine: {
      type: 'text',
      notNull: true,
    },
    city: {
      type: 'text',
      notNull: true,
    },
    state.: {
      type: 'text',
      notNull: true,
    },
    country: {
      type: 'text',
      notNull: true,
    },
    zip: {
      type: 'integer',
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

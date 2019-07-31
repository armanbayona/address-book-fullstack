exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('profiles', {
    profile_id: {
      type: 'serial',
      primaryKey: true,
    },
    first_name: {
      type: 'text',
      notNull: true,
    },
    last_name: {
      type: 'text',
      notNull: true,
    },
    home_phone: {
      type: 'text',
    },
    mobile_phone: {
      type: 'text',
    },
    work_phone: {
      type: 'text',
    },
    email: {
      type: 'text',
      notNull: true,
    },
    address_line: {
      type: 'text',
      notNull: true,
    },
    city: {
      type: 'text',
      notNull: true,
    },
    state: {
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
    date_created: { 
    	type: 'timestamp', 
    	notNull: true, 
    	default: pgm.func("current_timestamp"), 
    },
  });
};

exports.down = (pgm) => {

};

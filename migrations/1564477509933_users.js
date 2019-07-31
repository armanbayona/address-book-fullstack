exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users', {
    user_id: {
      type: 'serial',
      primaryKey: true,
    },
    profile_id: {
    	type: 'integer',
      references: '"profiles"',
    },
    username: {
      type: 'text',
      notNull: true,
    },
    password: {
      type: 'text',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {

};

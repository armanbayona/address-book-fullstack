exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users', {
    userId: {
      type: 'serial',
      primaryKey: true,
    },
    profileId: {
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

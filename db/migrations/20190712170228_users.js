exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.string('password')
      table.date('date').defaultTo(new Date(Date.now()).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }))
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('user'),
  ]);
};

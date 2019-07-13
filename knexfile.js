const path = require('path');

const MIGRATIONS = path.join(__dirname, 'db', 'migrations');
const SEED = path.join(__dirname, 'db', 'seeds');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'chess',
      user: 'cj',
      password: 'student'
    },
    migrations: {
      path: MIGRATIONS
    },
    seeds: {
      path: SEED
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'chess',
      user: 'cj',
      password: 'student'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      path: MIGRATIONS
    },
    seeds: {
      path: SEED
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'chess',
      user: 'cj',
      password: 'student'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      path: MIGRATIONS
    },
    seeds: {
      path: SEED
    }
  }

};

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
      directory: MIGRATIONS
    },
    seeds: {
      directory: SEED
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
      directory: MIGRATIONS
    },
    seeds: {
      directory: SEED
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
      directory: MIGRATIONS
    },
    seeds: {
      directory: SEED
    }
  }

};

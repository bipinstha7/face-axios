var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1', // localhost
    user: 'postgres',
    password: 'postgres',
    database: 'faceaxios'
  }
});

module.exports = knex;
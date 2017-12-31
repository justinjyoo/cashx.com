require('dotenv').config()

const config = {
  client: 'pg',
  connection: {
    host: process.env.PG_HOST,
    user: process.env.PG_DEV_USERNAME,
    password: process.env.PG_DEV_PASSWORD
    database: process.env.PG_DATABASE_NAME
  }
}

const knex = require ('knex')(config);


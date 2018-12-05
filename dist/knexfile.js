'use strict';

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      user: 'root',
      password: 'waterfire',
      database: 'typeorm'
    },
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
  actually_use: {
    client: 'mysql',
    connection: {
      user: 'clinic_chumphae',
      password: 'clinic2018',
      database: 'osm'
    }
  }
};
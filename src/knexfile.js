module.exports = {
  development: {
    client: 'mysql', // type database
    connection: {
      user: 'root', // username
      password: 'waterfire', // password
      database: 'typeorm' // database name
    },
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    },
    migrations: {
      directory: __dirname + '/knex/migrations', // directory migrations
    },
    seeds: {
      directory: __dirname + '/knex/seeds' // directory seeds
    }
  },
  actually_use: {
    client: 'mysql',
    connection: {
      user: 'clinic_chumphae',
      password: 'clinic2018',
      database: 'osm',
    }
  }
}
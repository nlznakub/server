module.exports = {
  development: {
    client: 'mysql', // type database
    connection: {
      host: 'ls-c5b066fd8faa374749251d41a936472d4ddbcad4.c9sslnzrd2wa.ap-southeast-1.rds.amazonaws.com',
      user: 'dbmasteruser', // username
      password: 'peer1234', // password
      database: 'tutorial' // database name
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
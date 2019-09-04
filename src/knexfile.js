module.exports = {
  development: {
    client: 'mysql', // type database
    connection: {
      host: '',
      user: '', // username
      password: '', // password
      database: '' // database name
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
  }
}
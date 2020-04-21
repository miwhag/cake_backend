module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/cake_database'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    }

}
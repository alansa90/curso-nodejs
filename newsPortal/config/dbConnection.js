const mysql = require('mysql')
const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_DATABASE,
  DB_PORT
} = require('./www')

console.log(process.env.DB_HOST)

module.exports = () => mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_DATABASE,
  port: DB_PORT
})

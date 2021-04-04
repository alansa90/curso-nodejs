const {
  DB_HOST, 
  DB_USER,
  DB_PASS, 
  DB_DATABASE, 
  DB_PORT
} = require('../../config/www')

module.exports = (app) => {
  app.get('/', (req, res) => {
  let mysql = require('mysql')

  let connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE,
    port: DB_PORT
  })
  
      //  res.render('home')
    connection.query('select * from users', (err, result) => {
      
      res.render('home', { result })
    })
  })
}


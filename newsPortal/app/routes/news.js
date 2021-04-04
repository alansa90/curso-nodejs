const dbConnection = require('../../config/dbConnection')

const conn = dbConnection()

module.exports = (app) => {

  app.get('/news', (req, res) => {
    conn.query('select * from news', (err, result) => {
      res.render('news', {news: result})
      // result.forEach(element => {
      //   console.log(element)    
      // })
    })
  })
}

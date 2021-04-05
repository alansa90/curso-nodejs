module.exports = function (app) {
  
  app.get('/news', (req, res) => {

    const connection = app.config.dbConnection()

    connection.query('select * from news', (err, result) => {
      res.render('news/news', {news: result})
    })
    
  })

}

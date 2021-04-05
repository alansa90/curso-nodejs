module.exports = (app) => {
  
  app.get('/notice', (req, res) => {

    const connection = app.config.dbConnection()

    connection.query('select * from news where idNews = 2', (err, result) => {
      
      res.render('news/notice', {notice: result})
    })
  })

}
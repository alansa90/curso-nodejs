module.exports = (application) => {
  
  application.get('/news', (req, res) => {

    const connection = application.config.dbConnection()
    const newsModel = new application.app.models.NewsDAO(connection)

    newsModel.getNews((err, result) => {
      res.render('news/news', {news: result})
    })
    
  })

}

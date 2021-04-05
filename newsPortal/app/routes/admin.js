module.exports = (application) => {

  application.get('/addNews', (req, res) => {
    res.render('admin/addNews')
  })

  application.post('/news/save', (req, res) => {
    const news = req.body
    
    const connection = application.config.dbConnection()
    const newsModel = new application.app.models.NewsDAO(connection)

    newsModel.saveNews(news, (err, result) => {
      res.redirect('/news')
    })
  })
}
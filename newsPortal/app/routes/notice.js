module.exports = (application) => {
  
  application.get('/notice', (req, res) => {

    const connection = application.config.dbConnection()
    const newsModel = new application.app.models.NewsDAO(connection)

    newsModel.getNotice((err, result) => {
            res.render('news/notice', {notice: result})
    })
  })
}

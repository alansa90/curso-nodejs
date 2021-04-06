const { check, validationResult } = require('express-validator')
module.exports = (application) => {

  application.get('/addNews', (req, res) => {
    res.render('admin/addNews', { validation: {}, noticia: {} })
  })

  application.post('/news/save', [
    check('title', 'title is required').notEmpty(),
    check('resume', 'resume is required').notEmpty(),
    check('resume', 'resume must contain between 10 and 100 characters').isLength(10, 100),
    check('author', 'Author is required').notEmpty(),
    check('dateNews', 'Date is required').notEmpty().isDate({ format: 'YYYY-MM-DD'})
  ], (req, res) => {
    const news = req.body
   
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.render('admin/addNews', { validation: errors, notice: news })
      return
    }

    const connection = application.config.dbConnection()
    const newsModel = new application.app.models.NewsDAO(connection)

    newsModel.saveNews(news, (err, result) => {
      res.redirect('/news')
    })
  })
}
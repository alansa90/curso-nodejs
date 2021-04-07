module.exports = (application) => {
  
  application.get('/news', (req, res) => {
    application.app.controllers.news.news(application, req, res)    
  })

  application.get('/notice/:id', (req, res) => {
    const { id } = req.params
    application.app.controllers.news.notice(id, application, req, res)
  })

}

module.exports = (app) => {
  app.get('/addNews', (req, res) => {
    res.render('addNews')
  })
}
module.exports = function (app) {
  app.get('/addNews', (req, res) => {
    res.render('addNews')
  })
}
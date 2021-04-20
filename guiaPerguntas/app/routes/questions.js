module.exports = (application) => {
  application.get('/form', (req, res) => {
    res.render('questions/form')
  })
}
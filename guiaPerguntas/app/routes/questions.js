module.exports = (application) => {
  application.get('/form', (req, res) => {
    res.render('questions/form')
  })

  application.post('/save', (req, res) => {
    const {
      title,
      description
    } = req.body
    res.send(`Title: ${title}\n
      Description: ${description}`)
  })
}
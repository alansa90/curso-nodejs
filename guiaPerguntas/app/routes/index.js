module.exports = (app) => {
  app.get('/:name/:lang', (req, res) => {
    const {
      name,
      lang
    } = req.params
    let msg = false

    let products = [
      {name: 'Leite', price: 3.15},
      {name: 'Coca-Cola', price: 7.90},
      {name: 'Doritos', price: 5.49},
      {name: 'RedBull', price: 10.99},
      {name: 'Chocolate', price: 3.99}
    ]
    

    res.render('index', {
      name, 
      lang, 
      company: 'Guia do programador',
      subscribes: 8040,
      msg,
      products
    })
  })
}
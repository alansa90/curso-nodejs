const app = require('./config/server')

var indexRoute = require('./app/routes/index')(app)
var homeRoute = require('./app/routes/home')(app)

app.listen(8080, () => console.log('App running...'))
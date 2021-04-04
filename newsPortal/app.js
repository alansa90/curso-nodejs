const app = require('./config/server')

const homeRoute = require('./app/routes/home')(app)
const newsRoute = require('./app/routes/news')(app)
const addNewsRoute = require('./app/routes/addNews')(app)


app.listen(8080, () => console.log('Running...') )
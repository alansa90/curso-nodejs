const app = require('./config/server')

const questionsRoute = require('./app/routes/questions')(app)
const homeRoute = require('./app/routes/home')(app)

app.listen(8080, () => console.log('App running...'))
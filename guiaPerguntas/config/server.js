const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', './app/views')


module.exports = app
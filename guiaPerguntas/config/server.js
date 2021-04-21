const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.use(express.static('app/public'))
app.set('views', './app/views')



module.exports = app
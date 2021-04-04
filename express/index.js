const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Bem vindo')
})

app.get('/blog/:artigo?', (req, res) => {
  const artigo = req.params.artigo
  artigo? res.send(`<h1>Artigo: ${artigo}</h1>`) : res.send('<h1>Bem vindo ao blog!</h1>')
  
})
app.get('/canal/youtube', (req, res) => {
  const canal = req.query["canal"]
  canal? res.send(`<h2>Canal ${canal}</h2>`): res.send('<h2>Nenhum canal informado!</h2>')
})

app.get('/ola/:nome', (req, res) => {
  const name = req.params.nome
  res.send(`<h1>Oi, ${name}</h1>`)
})

app.listen(3000, (e) => {
  if (e) {
    throw e.message
  }
  else {
    console.log('Servidor rodando...')
  }
} )
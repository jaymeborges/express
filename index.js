const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saldacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(saudacao('Guilerme'))

app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.use('/opa', (req, res, next) => {
    console.log('Durante...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
   // let corpo = ''
   // req.on('data', function(parte) {
    //    corpo += parte

  //  })
  //  req.on('end', function() {
   //     res.send(corpo)
   // })
   res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Client ${req,params.id} selecionado!`)
})


app.get('/opa',(req, res, next) => {
    res.json ({
        data: [
       {nome: 'iPad 32GB',Price: 1888.00},
       {nome: 'iPad 32GB',Price: 1888.00},
       {nome: 'iPad 32GB',Price: 1888.00}
    ],
    cont: 30,
    skip: 0,
    limit: 3,
    status: 200
    })
     
    next()

})
    app.use('/opa', (req, res, next) => {
        console.log('Depois...')
        next()
})

app. listen(3001, () => {
    console.log('Backend executando...')
})
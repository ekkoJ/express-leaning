const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'pug')

let myLogger = function (req, res, next) {
  console.log('=====req====')
  next()
}

let timer = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
let indexPug = function (req, res, next) {
  res.render('index', { title: '23333' })
}

app.use(myLogger)
app.use(timer)
app.use(indexPug)

app.get('/', function (req, res) {
  let json = {
    text: 'Hello World!',
    time: req.requestTime,
    id: req.query.id
  }
  // res.render('index', { title: '23333' })
  res.send(json)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

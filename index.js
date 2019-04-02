const express = require('express')
const app = express()

let myLogger = function (req, res, next) {
  console.log('=====req====')
  next()
}

let timer = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(myLogger)
app.use(timer)

app.get('/', function (req, res) {
  let json = {
    text: 'Hello World!',
    time: req.requestTime
  }
  res.send(json)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

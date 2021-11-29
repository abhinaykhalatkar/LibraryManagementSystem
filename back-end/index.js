const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
 
app.post('/login', function (req, res) {
  res.send('Hello World')
  console.log(req)
})
 
app.listen(3000)
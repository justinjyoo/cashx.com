const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// this is a proxy api server handled through create-react-app
app.post('/api/signup', (req, res) => {
  console.log(req, 'success!')
  res.send('Hello Worldfd!')
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))


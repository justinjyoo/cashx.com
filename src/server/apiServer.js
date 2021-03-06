const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv').config();
const crypto = require('crypto');
const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SSID, process.env.TWILIO_AUTH_TOKEN);


// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(4000, () => console.log('Example app listening on port 4000!'))

// allow server to receive cors requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// proxy api server handled through create-react-app
app.post('/api/signup', (req, res) => {
  console.log(req.body, 'success!')
  const hash = crypto.createHmac('sha256', process.env.I_LOVE_CAKES)
                   .update(req.body.password)
                   .digest('hex');
  const salt = crypto.createHmac('sha256', process.env.I_LOVE_CAKES)
                   .update(req.body.username.concat(req.body.email))
                   .digest('hex');

  const getRandomArbitraryInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let SMSAuthToken = getRandomArbitraryInt(1, 1000000);

  client.messages.create({
      body: 'Hi this is CashX! Your one-time code is '.concat(SMSAuthToken.toString()),
      to: '+1'.concat(req.body.mobile),  // Text this number
      from: '+14243736887 ' // From a valid Twilio number
  })
  .then((message) => {

  });

  res.send('Hello World!')
})
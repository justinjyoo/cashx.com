const express = require('express')
const app = express()

app.post('/api/signup', (req, res) => {
  console.log(req, 'success!')
  res.send('Hello World!')
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))
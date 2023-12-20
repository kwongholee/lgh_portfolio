const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

app.listen(8080, () => {
  console.log('listening on 8080')
})

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})
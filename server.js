require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

const connectMongoDBmodule = require('./models/connectMongoDB');
connectMongoDBmodule.mongodbConnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('listening on ', process.env.PORT);
  })
})

// app.get('*', (req,res) => {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
// })
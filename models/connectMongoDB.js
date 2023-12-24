require('dotenv').config();
const mongodbURL = process.env.MONGO_URL;
const mongoose = require('mongoose');

module.exports = {
  mongodbConnect: async () => {
    try {
      await mongoose.connect(mongodbURL);
      console.log('connected to mongodb');
    }
    catch(err) {
      console.log(err);
    }
  }
}
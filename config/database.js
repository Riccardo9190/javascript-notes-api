require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL; 

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL)
  .then(() => console.log('Successful connection with MongoDB'))
  .catch((error) => console.log(error))
  
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/bagels-db';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

mongoose.connection.on('connected', () => {
  console.log(`Delicious bagels stored at ${connectionString}`);
})

mongoose.connection.on('disconnected', () => {
  console.log('Lost connection to bagels')
})

mongoose.connection.on('', (err) => {
  console.log(`Mongoose error: ${err}`);
})

module.exports = {
  bagel: require('./Bagel')
}
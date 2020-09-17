const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bagelSchema = new Schema({
  flavor: {type: String, required: true},
  isDelicious: Boolean
});

const Bagel = mongoose.model('Bagel', bagelSchema);

module.exports = Bagel;


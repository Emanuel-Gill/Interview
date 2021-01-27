const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);
let CardTable = new Schema({
  CardNumber: {
    type: String,
    required: true,
    unique: true
  },
  CardHolder: {
    type: String
  },
  ExpirationYear: {
    type: Number
  },
  SecurityCode: {
    type: Number
  },
  Amount: {
    type: Number
  }
},{
    collection: 'CardTable'
});

CardTable.plugin(uniqueValidator, {message: 'Error, expected {PATH} to be unique.'})

module.exports = mongoose.model('CardTable', CardTable);
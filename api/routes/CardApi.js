require('dotenv').config();
const express = require('express');
const app = express();
const CreditRoute = express.Router();

// Require Business model in our routes module
let Card = require('../models/Card');

// Defined store route
CreditRoute.route('/add').post(function (req, res) {
  let CardDetail = new Card(req.body);
  CardDetail.save()
    .then(business => {
      res.status(200).json({'Card': 'Card in added successfully'});
    })
    .catch(err => {
    res.status(400 ).json(err);
    });
});




CreditRoute.route('/get').get(function (req, res) {
   Card.find(function (err, CardList) {
     if (err) {
       res.status(400).res(err)
     } else {
       res.json(CardList)
     }
   })
});

module.exports = CreditRoute;
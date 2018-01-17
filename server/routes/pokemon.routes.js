var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Pokemon = require('../models/pokemon.model.js')

router.get('/', function(req, res, next) {
  //Get all pokemon
  Pokemon.find(function(err, pokemon) {
    if(err) return next(err);
    res.json(pokemon);
  });
});

router.get('/:id', function(req, res, next) {
  Pokemon.findById(req.params.id, function(err, pokemon) {
    if(err) return next(err);
    res.json(pokemon);
  });
});


module.exports = router;

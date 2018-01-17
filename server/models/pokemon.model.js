var mongoose = require('mongoose');
//id,identifier,species_id,height,weight,base_experience,order,is_default
var PokemonSchema = mongoose.Schema({
  id: Number,
  identifier: String,
  species_id: Number,
  height: Number,
  weight: Number,
  base_experience: Number,
  order: Number,
  is_default: Number
});

module.exports = mongoose.model('Pokemon', PokemonSchema, 'Pokemon');

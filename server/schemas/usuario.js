var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
  tipo : String,
  nombre : String,
  password : String,
  direccion : String,
  celular : String,
  correo : String,
  zona : String,
  tel_fijo : String,
  tabla : []

});

module.exports = mongoose.model('usuario', usuarioSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({

    nombre: String,
    descripcion: String
})

// Modelo

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
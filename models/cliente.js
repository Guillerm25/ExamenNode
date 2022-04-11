const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({

    nombre: String,
    apellidos: String,
    email: String,
    dni: String,
    viaje: String,
    seguro: String,
    pagado: String,

})

// Modelo

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
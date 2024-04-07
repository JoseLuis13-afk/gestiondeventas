const mongoose = require('mongoose');

const ventaTortaSchema = new mongoose.Schema({
    sabor: String,
    tamaño: String,
    precio: Number,
    fechaVenta: Date,
    cliente: {
        nombre: String,
        correo: String,
        telefono: String
    }
});

const VentasModel = mongoose.model('Ventas',ventaTortaSchema,'ventas');
module.exports=VentasModel;
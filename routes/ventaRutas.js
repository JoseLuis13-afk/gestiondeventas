const express = require('express');
const rutas = express.Router();
const VentasModel = require('../models/ventaTorta');

rutas.get('/', async (req, res) =>{
    try {
        const listaVentas = await VentasModel.find();
        //console.log(listaVentas);
        res.json(listaVentas);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});

rutas.get('/agregar', async (req, res) =>{
    //console.log(req.body); 
        const nuevaVentas = await VentasModel({
            sabor: req.body.sabor,
            tamaño: req.body.tamaño,
            precio: req.body.precio,
            fechaVenta: req.body.fechaVenta,
            cliente: {
                nombre: req.body.nombre,
                correo: req.body.correo,
                telefono: req.body.telefono
             } 
        });
        try {
            const guardarVenta = await nuevaVentas.save();
            res.status(201).json(guardarVenta);
        } catch (error) {
            res.status(404).json({mensaje: error.message});
        }
});
rutas.put('/editar/:id', async (req, res) =>{
        try {
            const actualizarVenta = await VentasModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
            res.status(201).json(actualizarVenta);
        } catch (error) {
            res.status(404).json({mensaje: error.message});
        }
});
rutas.delete('/eliminar/:id', async (req, res) =>{
    try {
        const eliminarVenta = await VentasModel.findByIdAndDelete(req.params.id);
        res.json({mensaje: 'Venta eliminada correctamente'});
    } catch (error) {
        res.status(404).json({mensaje: error.message});
    }
});
module.exports=rutas;
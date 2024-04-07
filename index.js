const express = require ('express');
const mongoose = require ('mongoose');
require ('dotenv').config();
//Importar las rutas 
const ventaRutas = require('./routes/ventaRutas');
//Cofiguraciones
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO_URL;
//Configurar express para Json
app.use(express.json());
//Conexion con la db
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Conexion con MONGODB exitosa');
        app.listen(PORT, () => { console.log(`Servidor en funcionando en puerto: ${PORT}`) });
    })
    .catch(error => console.log("Error de conexion con MONGODB",error));

app.use('/ruta-ventas',ventaRutas);
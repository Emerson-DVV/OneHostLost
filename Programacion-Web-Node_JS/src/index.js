// servidor web
const express = require('express'); // importar el modulo express
const cors = require('cors');
const mongoose = require("mongoose"); // importar la conexion con la BD Atlas
require("dotenv").config(); // cargar las variables de entorno desde .env
const userRoutes = require('./routes/user');
const classroomRoutes = require('./routes/classroom'); 
const stateRoutes = require('./routes/state'); 


const app = express(); // inicializar una nueva instancia de la aplicacion express
const port = process.env.PORT || 9000; 

//middleware
app.use(express.json()); // se utiliza para analizar el cuerpo de las solicitudes entrantes con formato json.
app.use('/api', userRoutes); // todas las rutas que comienzen con '/api' deben manejarse utilizando el enrutador 'userRoutes'
app.use('/api', classroomRoutes);
app.use('/api', stateRoutes);
app.use(cors());

//routes 
app.get('/',(req, res) =>{
    res.send('Welcome to my API');
}) 

//mongodb connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error)=> console.error(error));
app.listen(port,() => console.log('server listening on port', port)); // el servidor escucha el puerto determinado

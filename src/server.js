// servidor web
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./DB/conectDB');

//Rutas
const userRoutes = require('./routes/user');
const environmentRoutes = require('./routes/environment');
const facilityRoutes =  require('./routes/facility');
const typeEnvironmentRoutes =  require('./routes/typeEnvironment');


//Puerto
const app = express();
const port = process.env.PORT || 9000; 

//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', environmentRoutes);
app.use('/api', facilityRoutes);
app.use('/api', typeEnvironmentRoutes);

//app.use('/api', Routes);
app.use(cors());
app.use(express.static(path.join(__dirname, 'public/html')));
app.use('/css', express.static(path.join(__dirname, 'public/css'), { 'extensions': ['css'] }));
app.use('/javascript', express.static(path.join(__dirname, 'public/js'), {'extensions':['js']}));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.get('/',(req, res) =>{
    res.send('Welcome to my API');
}) 

connectDB();
    
app.listen(port,() => console.log('server listening on port', port)); // el servidor escucha el puerto determinado

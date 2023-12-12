// servidor web
const express = require('express');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 9000);

//Routes
const userRoutes = require('./routes/user');
const environmentRoutes = require('./routes/environment');
const facilityRoutes =  require('./routes/facility');
const typeEnvironmentRoutes =  require('./routes/typeEnvironment');
const reservation = require('./routes/reservation');

//Middlewares
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', environmentRoutes);
app.use('/api', facilityRoutes);
app.use('/api', typeEnvironmentRoutes);
app.use('/api', reservation);

//Global variables

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

 

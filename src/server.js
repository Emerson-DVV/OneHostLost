// servidor web
const express = require('express');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 9000);

//Routes
const authRoutes = require('./routes/auth.routes.js');
const environmentRoutes = require('./routes/environment');
const facilityRoutes = require('./routes/facility');
const typeEnvironmentRoutes = require('./routes/typeEnvironment');
const reservation = require('./routes/reservation');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', environmentRoutes);
app.use('/api', facilityRoutes);
app.use('/api', typeEnvironmentRoutes);
app.use('/api', reservation);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;



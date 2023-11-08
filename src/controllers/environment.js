const environmentSchema = require("../models/environment");

// Crear un ambiente
const createEnvironment = (req, res) => {
    const environment = new environmentSchema(req.body);
    environment.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Obtener todos los ambientes o algunos por filtro
const getFilteredEnvironments = (req, res) => {
    const {type, capacity } = req.query;
    let filter = {
        enabled: true
    };
    if(type && type !== 'all'){
        filter.typeEnvironment = type;
    }
    if (capacity && capacity !=='all') {
        if(capacity ==='more'){
            filter.capacity = { $gte: 50 };
        }else{
            const lowerCapacity = parseInt(capacity) - 10;
            filter.capacity = { $gt: lowerCapacity, $lte: parseInt(capacity) };
        }  
    }
    environmentSchema.find(filter)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

// Obtener un ambiente por nombre
const getEnvironmentByName = (req, res) => {
    const { name } = req.params;
    environmentSchema.findOne({ name: name })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Actualizar un ambiente por nombre
const updateEnvironmentByName = (req, res) => {
    const { name } = req.params;
    const { newName, capacity, description, active, enabled, typeEnvironment, facility } = req.body;
    environmentSchema.findOneAndUpdate({ name: name },
        { $set: { 
            name: newName, 
            capacity, 
            description, 
            active, 
            enabled, 
            typeEnvironment, 
            facility } 
        }, 
        { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Eliminar un ambiente por nombre
const deleteEnvironmentByName = (req, res) => {
    const { name } = req.params;
    environmentSchema.findOneAndUpdate({ name: name }, { $set: { enabled: false } }, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

module.exports = {
    createEnvironment,
    getEnvironmentByName,
    updateEnvironmentByName,
    deleteEnvironmentByName,
    getFilteredEnvironments
};

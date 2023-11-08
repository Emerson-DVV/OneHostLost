const TypeEnvironment = require("../models/typeEnvironment");

// Crear tipo de ambiente
const createTypeEnvironment = (req,res) => {
    const typeEnvironment = new TypeEnvironment(req.body);
    typeEnvironment.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error}))
};

// Obtener todas los tipos de ambientes
const getAllTypeEnvironment = (req, res) => {
    TypeEnvironment.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Obtener un tipo de ambiente por nombre
const getTypeEnvironmentByName = (req, res) => {
    const { name } = req.params;
    TypeEnvironment.findOne({name : name})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Actualizar un tipo de ambiente por nombre
const updateTypeEnvironmentByName = (req, res) => {
    const { name } = req.params;
    const { newName } = req.body;
    TypeEnvironment.findOneAndUpdate({ name : name }, { $set: { name : newName } }, { new : true})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Eliminar un tipo de ambiente por nombre
const deleteTypeEnvironmentByName = (req, res) => {
    const { name } = req.params;
    TypeEnvironment.findOneAndDelete({ name : name })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

module.exports = {
    createTypeEnvironment,
    getAllTypeEnvironment,
    getTypeEnvironmentByName,
    updateTypeEnvironmentByName,
    deleteTypeEnvironmentByName
}

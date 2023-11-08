const Facility = require('../models/facility');

// Crear una facilidad
const createFacility = (req, res) => {
    const facility = new Facility(req.body);
    facility.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Obtener todas las facilidades
const getAllFacilities = (req, res) => {
    Facility.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Obtener una facilidad por nombre
const getFacilityByName = (req, res) => {
    const { name } = req.params;
    Facility.findOne({ name: name })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Actualizar una facilidad por nombre
const updateFacilityByName = (req, res) => {
    const { name } = req.params;
    const { newName } = req.body;
    Facility.findOneAndUpdate({ name: name }, { $set: { name: newName } }, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Eliminar una facilidad por nombre
const deleteFacilityByName = (req, res) => {
    const { name } = req.params;
    Facility.findOneAndDelete({ name: name })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

module.exports = {
    createFacility,
    getAllFacilities,
    getFacilityByName,
    updateFacilityByName,
    deleteFacilityByName,
};

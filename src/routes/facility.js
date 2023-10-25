const express = require("express");
const facilitySchema = require("../models/facility");
const router = express.Router();

// Crear facilidad
router.post('/facilities', (req, res) => {
    const facility = new facilitySchema(req.body);
    facility.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todas las facilidades
router.get('/facilities', (req, res) => {
    facilitySchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener una facilidad por nombre
router.get("/facilities/:name", (req, res) => {
    const { name } = req.params;
    facilitySchema.findOne({name : name})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar una facilidad por nombre
router.put("/facilities/:name", (req, res) => {
    const { name } = req.params;
    const {newName} = req.body;
    facilitySchema.findOneAndUpdate({ name: name }, { $set: {name : newName} }, { new : true})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar una facilidad por nombre
router.delete("/facilities/:name", (req, res) => {
    const { name } = req.params;
    facilitySchema.findOneAndDelete({name : name})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
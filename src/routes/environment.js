const express = require("express");
const environmentSchema = require("../models/environment");
const router = express.Router();

// Crear ambiente
router.post('/environments', (req, res) => {
    const environment = new environmentSchema(req.body);
    environment.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los ambientes
router.get('/environments', (req, res) => {
    environmentSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un ambiente por nombre
router.get("/environments/:name", (req, res) => {
    const { name } = req.params;
    environmentSchema.findOne({ name: name })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un ambiente por nombre
router.put("/environments/:name", (req, res) => {
    const { name } = req.params;
    const {newName, capacity, description, active, enabled, typeEnvironment, facility} = req.body;
    environmentSchema.findOneAndUpdate({ name: name }, { $set: {name: newName, capacity, description, active, enabled, typeEnvironment, facility} }, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un ambiente por ID
router.delete("/environments/:name", (req, res) => {
    const { name } = req.params;
    environmentSchema.findOneAndUpdate({ name: name }, { $set: { enabled: false } }, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

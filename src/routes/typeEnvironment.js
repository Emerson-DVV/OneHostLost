const express = require("express");
const typeEnvironmentSchema = require("../models/typeEnvironment");
const router = express.Router();

// Crear tipo de aula
router.post('/typeEnvironments', (req, res) => {
    const typeEnvironment = new typeEnvironmentSchema(req.body);
    typeEnvironment.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todas los tipos de aulas
router.get('/typeEnvironments', (req, res) => {
    typeEnvironmentSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un tipo de aula por nombre
router.get("/typeEnvironments/:name", (req, res) => {
    const { name } = req.params;
    typeEnvironmentSchema.findOne({name : name})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un tipo de aula por nombre
router.put("/typeEnvironments/:name", (req, res) => {
    const { name } = req.params;
    const { newName } = req.body;
    typeEnvironmentSchema.findOneAndUpdate({ name : name }, { $set: { name : newName } }, { new : true})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un tipo de aula por nombre
router.delete("/typeEnvironments/:name", (req, res) => {
    const { name } = req.params;
    typeEnvironmentSchema.findOneAndDelete({ name : name })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
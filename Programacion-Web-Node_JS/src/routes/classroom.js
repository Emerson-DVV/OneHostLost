const express = require("express");
const classroomSchema = require("../models/classroom");
const router = express.Router();

// Crear aula
router.post('/classrooms', (req, res) => {
    const classroom = new classroomSchema(req.body);
    classroom.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todas las aulas
router.get('/classrooms', (req, res) => {
    classroomSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un aula por ID
router.get("/classrooms/:id", (req, res) => {
    const { id } = req.params;
    classroomSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un aula por ID
router.put("/classrooms/:id", (req, res) => {
    const { id } = req.params;
    const { aula, capacity, description } = req.body;
    classroomSchema.updateOne({ _id: id }, { $set: { aula, capacity, description } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un aula por ID
router.delete("/classrooms/:id", (req, res) => {
    const { id } = req.params;
    classroomSchema.findByIdAndRemove(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

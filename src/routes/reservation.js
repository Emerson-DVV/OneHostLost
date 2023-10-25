const express = require("express");
const reservationSchema = require("../models/reservation");
const router = express.Router();

// Crear reservacion
router.post('/reservations', (req, res) => {
    const reservation = new reservationSchema(req.body);
    reservation.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todas las reservas
router.get('/reservations', (req, res) => {
    reservationSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un reserva por ID
router.get("/reservations/:id", (req, res)=>{
    const { id } = req.params;
    reservationSchema 
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// Actualizar un reserva por ID
router.put("/reservations/:id", (req, res)=>{
    const { id } = req.params;
    const {classroom, states} = req.body;
    reservationSchema 
        .updateOne({_id: id}, {$set: {classroom, states}})
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// Eliminar una reserva por ID
router .delete("/reservations/:id", (req, res)=>{
    const { id } = req.params;
    reservationSchema 
        .findByIdAndRemove(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

module.exports = router;
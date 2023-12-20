const express = require("express");
const reservationController = require("../controllers/reservation");
const router = express.Router();
const authRequired = require("../middlewares/validateToken.js");

// Crear reservacion
router.post('/reservations', authRequired, reservationController.createReservation);

// Obtener todas las reservas
router.get('/reservations', authRequired, reservationController.getFilteredReservation);

// Actualizar un reserva por ID
router.put("/reservations/:id", authRequired, reservationController.updateReservationById);

// Eliminar una reserva por ID
router.delete("/reservations/:id", authRequired, reservationController.deleteReservationById);

module.exports = router;
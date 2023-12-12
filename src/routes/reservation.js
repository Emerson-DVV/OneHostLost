const express = require("express");
const reservationController = require("../controllers/reservation");
const router = express.Router();

// Crear reservacion
router.post('/reservations',reservationController.createReservation);

// Obtener todas las reservas
router.get('/reservations', reservationController.getFilteredReservation);

// Actualizar un reserva por ID
router.put("/reservations/:id", reservationController.updateReservationById);

// Eliminar una reserva por ID
router .delete("/reservations/:id", reservationController.deleteReservationById);

module.exports = router;
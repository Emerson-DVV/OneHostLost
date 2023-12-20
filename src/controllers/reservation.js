const reservationSchema = require('../models/reservation');

// Crear reservacion
const createReservation = async (req, res) => {
    try {
        const { environment, date, hour, type } = req.body;
        const disponible = await verificarDisponibilidad(date, hour, environment);
        if (disponible) {
            const newReservation = new reservationSchema({
                environment,
                date,
                hour,
                type,
                user: req.user.id,
            });
            await newReservation.save();
            res.json({ reservaConfirmada: true });
        } else {
            res.status(400).json({ reservaConfirmada: false, mensaje: 'Los horarios seleccionados no están disponibles.' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear la reserva", error: error.message });
    }
};
async function verificarDisponibilidad(dateS, hourS, environmentS) {
    // Comprueba si hay alguna reserva en la misma fecha, para el mismo ambiente,
    // y con alguno de los horarios seleccionados
    const reservaExistente = await reservationSchema.findOne({
        date: dateS,
        environment: environmentS,
        hour: { $in: hourS }
    });
    // Si no se encuentra ninguna reserva existente que coincida con estos criterios,
    // entonces el ambiente está disponible para esos horarios
    return !reservaExistente;
}
// Obtener todas las reservas o algunas por ambiente
const getFilteredReservation = (req, res) => {
    const { environment } = req.params;
    let filter = {};
    if (environment && environment !== 'all') {
        filter.environment = environment;
    }
    reservationSchema.find(filter)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Actualizar un reserva por ID
const updateReservationById = (req, res) => {
    const { id } = req.params;
    const { environment, user, date, hour, type } = req.body;
    reservationSchema
        .updateOne({ _id: id }, { $set: { environment, user, date, hour, type } }, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Eliminar una reserva por ID
const deleteReservationById = (req, res) => {
    const { id } = req.params;
    reservationSchema
        .findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({ message: error }));
};

module.exports = {
    createReservation,
    getFilteredReservation,
    updateReservationById,
    deleteReservationById
}
const reservationSchema = require('../models/reservation');

// Crear reservacion
const createReservation = (req, res) => {
    const reservation = new reservationSchema(req.body);
    reservation.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Obtener todas las reservas o algunas por ambiente
const getFilteredReservation = (req, res) => {
    const { environment } = req.params;
    let filter = {};
    if(environment && environment !== 'all'){
        filter.environment = environment;
    }
    reservationSchema.find(filter)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Actualizar un reserva por ID
const updateReservationById = (req, res)=>{
    const { id } = req.params;
    const {environment, user, date, hour, type} = req.body;
    reservationSchema 
        .updateOne({_id: id},{$set: {environment,user,date,hour,type}},{new : true})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

// Eliminar una reserva por ID
const deleteReservationById = (req, res)=>{
    const { id } = req.params;
    reservationSchema 
        .findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
};

module.exports = {
    createReservation,
    getFilteredReservation,
    updateReservationById,
    deleteReservationById
}
const express = require("express");
const facilityController = require("../controllers/facility");
const router = express.Router();

// Crear facilidad
router.post('/facilities', facilityController.createFacility);

// Obtener todas las facilidades
router.get('/facilities', facilityController.getAllFacilities);

// Obtener una facilidad por nombre
router.get("/facilities/:name", facilityController.getFacilityByName);

// Actualizar una facilidad por nombre
router.put("/facilities/:name", facilityController.updateFacilityByName);

// Eliminar una facilidad por nombre
router.delete("/facilities/:name", facilityController.deleteFacilityByName);

module.exports = router;
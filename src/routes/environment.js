const express = require("express");
const router = express.Router();
const environmentController = require("../controllers/environment");

// Crear ambiente
router.post('/environments', environmentController.createEnvironment);

// Obtener todos los ambientes o algunos por filtro
router.get('/environments', environmentController.getFilteredEnvironments);

// Obtener un ambiente por nombre
router.get("/environments/:name", environmentController.getEnvironmentByName);

// Actualizar un ambiente por nombre
router.put("/environments/:name", environmentController.updateEnvironmentByName);

// Eliminar un ambiente por ID
router.delete("/environments/:name", environmentController.deleteEnvironmentByName);

module.exports = router;
//getFilteredEnvironments
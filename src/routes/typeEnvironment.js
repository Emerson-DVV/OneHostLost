const express = require("express");
const typeEnvironmentController = require("../controllers/typeEnvironments");
const router = express.Router();

// Crear tipo de ambiente
router.post('/typeEnvironments', typeEnvironmentController.createTypeEnvironment);

// Obtener todas los tipos de ambientes
router.get('/typeEnvironments', typeEnvironmentController.getAllTypeEnvironment);

// Obtener un tipo de ambiente por nombre
router.get("/typeEnvironments/:name", typeEnvironmentController.getTypeEnvironmentByName);

// Actualizar un tipo de ambiente por nombre
router.put("/typeEnvironments/:name",typeEnvironmentController.updateTypeEnvironmentByName);

// Eliminar un tipo de ambiente por nombre
router.delete("/typeEnvironments/:name", typeEnvironmentController.deleteTypeEnvironmentByName);

module.exports = router;
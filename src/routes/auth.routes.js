const { Router } = require('express');
const {
    login,
    logout,
    register,
    profile,
} = require('../controllers/auth.controller.js')
const authRequired = require("../middlewares/validateToken.js");
const validateSchema = require("../middlewares/validator.middleware.js");
const { registerSchema, loginSchema } = require("../schemas/auth.schema.js");

const router = Router();

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)

module.exports = router;
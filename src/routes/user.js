const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

// Crear usuario 
router.post('/users', (req, res)=>{
    const user = userSchema(req.body); 
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// Obtener todos los usuarios
router.get('/users', (req, res)=>{
    userSchema 
        .find()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// Obtener un usuario por ID
router.get("/users/:id", (req, res)=>{
    const { id } = req.params;
    userSchema 
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// Actualizar un usuario por ID
router.put("/users/:id", (req, res)=>{
    const { id } = req.params;
    const {name, age, email} = req.body;
    userSchema 
        .updateOne({_id: id}, {$set: {name, age, email}})
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// Eliminar un usuario por ID
router.delete("/users/:id", (req, res)=>{
    const { id } = req.params;
    userSchema 
        .findByIdAndRemove(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});
module.exports = router;
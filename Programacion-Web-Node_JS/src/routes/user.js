const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

// create user 
router.post('/users', (req, res)=>{
    const user = userSchema(req.body); 
    // te devuelve los datos desde el request
    // para crear un nuevo usuario
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// ger all users
router.get('/users', (req, res)=>{
    userSchema 
        .find()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// get a user
router.get("/users/:id", (req, res)=>{
    const { id } = req.params;
    userSchema 
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// update a user
router.put("/users/:id", (req, res)=>{
    const { id } = req.params;
    const {name, age, email} = req.body;
    userSchema 
        .updateOne({_id: id}, {$set: {name, age, email}}) // con el $set sabe que tiene que actualizar los datos
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// delete a user
router.delete("/users/:id", (req, res)=>{
    const { id } = req.params;
    userSchema 
        .findByIdAndRemove(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});
module.exports = router;
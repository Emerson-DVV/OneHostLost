const express = require("express");
const stateSchema = require("../models/state");
const router = express.Router();

// create state
router.post('/states', (req, res) => {
    const state = new stateSchema(req.body);
    state.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all states
router.get('/states', (req, res) => {
    stateSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get a state
router.get("/states/:id", (req, res)=>{
    const { id } = req.params;
    stateSchema 
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// update a state
router.put("/states/:id", (req, res)=>{
    const { id } = req.params;
    const {classroom, states} = req.body;
    stateSchema 
        .updateOne({_id: id}, {$set: {classroom, states}})
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

// delete a state
router .delete("/states/:id", (req, res)=>{
    const { id } = req.params;
    stateSchema 
        .findByIdAndRemove(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
});

module.exports = router;
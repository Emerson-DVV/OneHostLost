const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs')
const createAccessToken = require('../libs/jwt.js');

const register = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })
        const userSave = await newUser.save();
        const token = await createAccessToken({ id: userSave._id })
        res.cookie('token', token)
        res.json({
            id: userSave._id,
            username: userSave.username,
            email: userSave.email,
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

        const token = await createAccessToken({ id: userFound._id })
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200);
}

const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
}

module.exports = {
    register,
    login,
    logout,
    profile
}
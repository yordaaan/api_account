const express = require('express');
const user = express.Router();
const data = require('../models/data_user');

user.get('/', async (req, res) =>{
    try {
        const readData = await data.find();
        res.json(readData);
    } catch (err) {
        res.json({message: err});
    }
});

user.get('/:getId', async (req, res) =>{
    try {
        const readData = await data.findById(req.params.getId);
        res.json(readData);
    } catch (err) {
        res.json({message: err});
    }
});

user.post('/', async (req, res) =>{
    const post = new data({
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        name: req.body.name,
        address: req.body.address,
        cityId: req.body.cityId,
        hobbies: req.body.hobbies
    });

    try {
        const insertData = await post.save();
        res.status(201).json(insertData);
    } catch (err) {
        res.status(403).json({message: err});
    }
    console.log(req.body);
});

user.delete('/:getId', async (req, res) =>{
    try {
        const deleteData = await data.remove({_id: req.params.getId});
        res.status(201).json(deleteData);
    } catch (err) {
        res.status(404).json({message: 'Id tidak tersedia'});
    }
});

user.post('/login', async (req, res) =>{
    try {
        var email = req.body.email
        var password = req.body.password

        const login = await data.findOne({email: email});
        res.status(200).json(login,{message: 'Login Success'});

    } catch (err) {
        res.status(401).json({message: err});
    }
});

module.exports = user;
const express = require('express');
const city = express.Router();
const data = require('../models/data_city');

city.get('/', async (req, res) =>{
    try {
        const readData = await data.find();
        res.json(readData);
    } catch(err) {
        res.json({message: err});
    }
});

city.post('/', async (req, res) =>{
    const post = new data({
        city_name: req.body.city_name
    });

    try {
        const insertData = await post.save();
        res.json(insertData);
    } catch(err) {
        res.json({message: err});
    }
});

city.delete('/:getId', async (req, res) =>{
    try {
        const deleteData = await data.remove({_id: req.params.getId});
        res.status(201).json(deleteData);
    } catch (err) {
        res.status(404).json({message: err});
    }
});

module.exports = city;
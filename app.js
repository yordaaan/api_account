const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://rian-UVHXVGlJjExgYzlH:DyiHI8vwQUZVD7LY@18.138.37.176:28019/collection-rian-UVHXVGlJjExgYzlH?authSource=admin';
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Connect to DB
mongoose.connect(url,{useNewUrlParser:true});

//Import Routes
const userRoute = require('./routes/user');
app.use('/register', userRoute);

const cityRoute = require('./routes/city');
app.use('/city', cityRoute);

//Listening to the server
app.listen(8000);